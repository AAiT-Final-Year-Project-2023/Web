'use client';
import { tagColors } from '@/common/constants';
import {
    isSupportedFileExtension,
    isSupportedFileSize,
} from '@/common/functions';
import { AudioLabel } from '@/common/types';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MdVolumeOff, MdVolumeUp, MdZoomIn } from 'react-icons/md';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin, { Region } from 'wavesurfer.js/dist/plugins/regions';

type AudioAnnotation = {
    color: string;
    visible: boolean;
} & AudioLabel;

export default function AudioAnnotatorComponent({
    props,
}: {
    props: {
        initialAudio?: File;
        tags: string[];
        supportedExtensions: string[];
        maxFileSize: number;
        initialAnnotations?: AudioLabel[];
        cb: (arg: AudioLabel[]) => void;
    };
}) {
    const {
        initialAudio,
        tags,
        supportedExtensions,
        maxFileSize,
        initialAnnotations = [],
        cb,
    } = props;

    const [selectedTag, setSelectedTag] = useState<string>(tags[0]);

    const colorsMapRef = useRef<Map<string, string>>(new Map());
    const fallbackColor = '#fff100';
    const colorsMap = new Map<string, string>();
    tags.forEach((tag, index) => {
        colorsMap.set(tag, tagColors[index] + '99');
    });

    const createInitialAnnotations = () => {
        const annotations: AudioAnnotation[] = [];
        initialAnnotations.forEach((annotation) => {
            annotations.push({
                ...annotation,
                color: colorsMap.get(annotation.tag) || fallbackColor,
                visible: true,
            });
        });
        return annotations;
    };

    const [annotations, setAnnotations] = useState<AudioAnnotation[]>(
        createInitialAnnotations,
    );

    colorsMapRef.current = colorsMap;

    const [audioFile, setAudioFile] = useState<File | null>(
        initialAudio || null,
    );
    const wavesurfer = useRef<WaveSurfer | null>(null);
    const wavesurferRegions = useRef<RegionsPlugin | null>(null);
    const wavesurferContainer = useRef<HTMLDivElement>(null);
    const [volume, setVolume] = useState<number>(10);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const currentTimeRef = useRef<HTMLParagraphElement>(null);
    const [totalTime, setTotalTime] = useState<number>(0);
    const [zoom, setZoom] = useState<number>(10);

    function formatDuration(seconds: number) {
        seconds = parseInt(seconds.toFixed(0));
        let date = new Date(seconds * 1000);
        let hours = date.getUTCHours();
        let minutes = date.getUTCMinutes();
        let secondsLeft = date.getUTCSeconds();
        return (
            hours.toString().padStart(2, '0') +
            ':' +
            minutes.toString().padStart(2, '0') +
            ':' +
            secondsLeft.toString().padStart(2, '0')
        );
    }

    useEffect(() => {
        if (!wavesurfer.current) {
            wavesurfer.current = WaveSurfer.create({
                container: wavesurferContainer.current || '',
                waveColor: '#89CFF0',
                progressColor: '#0071C5',
                autoCenter: true,
                minPxPerSec: zoom,
            });

            wavesurferRegions.current = wavesurfer.current.registerPlugin(
                RegionsPlugin.create(),
            );

            wavesurferRegions.current.enableDragSelection({
                color: colorsMap.get(selectedTag),
            });
        }

        wavesurferRegions.current?.on('region-updated', regionUpdatedHandler);

        wavesurfer.current.on('audioprocess', (currTime: number) => {
            if (currentTimeRef.current)
                currentTimeRef.current.innerHTML = formatDuration(currTime);
        });

        return () => {
            wavesurferRegions.current?.unAll();
        };
    }, []);

    useEffect(() => {
        if (audioFile && wavesurfer.current) {
            const audioFileUrl = URL.createObjectURL(audioFile);
            wavesurfer.current.load(audioFileUrl);
            wavesurfer.current.on('ready', () => {
                if (isPlaying) wavesurfer.current?.play();
                setTotalTime(
                    wavesurfer.current ? wavesurfer.current.getDuration() : 0,
                );
            });
        }
    }, [audioFile]);

    useEffect(() => {
        wavesurferRegions.current?.clearRegions();
        annotations.forEach((annotation) => {
            if (annotation.visible)
                wavesurferRegions.current?.addRegion({
                    start: annotation.startTime,
                    end: annotation.endTime,
                    color: annotation.color,
                    id: annotation.id.toString(),
                    content: annotation.tag,
                });
        });
    }, [annotations]);

    useEffect(() => {
        isPlaying ? wavesurfer.current?.play() : wavesurfer.current?.pause();
    }, [isPlaying]);

    useEffect(() => {
        wavesurfer.current?.setMuted(isMuted);
    }, [isMuted]);

    useEffect(() => {
        wavesurfer.current?.setVolume(volume / 100);
    }, [volume]);

    useEffect(() => {
        if (audioFile) {
            wavesurfer.current?.zoom(zoom);
        }
    }, [zoom]);

    const regionUpdatedHandler = (region: Region) => {
        let updatedRegion: AudioAnnotation = annotations.filter(
            (annotation) => annotation.id.toString() === region.id,
        )[0];

        updatedRegion = {
            ...updatedRegion,
            startTime: region.start,
            endTime: region.end,
        };

        setAnnotations((old: AudioAnnotation[]) => {
            return old.map((annotation) => {
                if (annotation.id == updatedRegion.id) {
                    return updatedRegion;
                }
                return annotation;
            });
        });
    };

    const handleAddRegion = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (wavesurfer.current) {
            const currentTime = wavesurfer.current?.getCurrentTime();
            const duration = wavesurfer.current?.getDuration();
            let start = currentTime;
            let end = currentTime;

            if (currentTime - 5 > 0) {
                start = currentTime - 5;
            }

            if (currentTime + 5 < duration) {
                end = currentTime + 5;
            }

            const newRegion: AudioAnnotation = {
                id: annotations.length + 1,
                startTime: start,
                endTime: end,
                color: colorsMap.get(selectedTag) || fallbackColor,
                tag: selectedTag,
                visible: true,
            };
            setAnnotations([...annotations, newRegion]);
        }
    };

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const volume = parseInt(e.target.value);
        setVolume(volume);
    };

    const handleZoomChange = (e: ChangeEvent<HTMLInputElement>) => {
        const minPxPerSec = e.target.valueAsNumber;
        setZoom(minPxPerSec);
    };

    const handleAutoCenterChange = (e: ChangeEvent<HTMLInputElement>) => {
        wavesurfer.current?.setOptions({
            autoCenter: e.target.checked,
        });
    };

    const handleTagChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (wavesurferRegions.current)
            wavesurferRegions.current.enableDragSelection({
                color: colorsMap.get(e.target.value),
            });
        setSelectedTag(e.target.value);
    };

    const handleAnnotationDelete = (id: number) => {
        const updatedAnnotations = annotations.filter(
            (annotation) => annotation.id !== id,
        );
        setAnnotations(updatedAnnotations);
    };

    const handleAnnotationShowHide = (id: number) => {
        annotations.map((annotation) => {
            if (annotation.id === id) {
                annotation.visible = !annotation.visible;
            }
        });
        setAnnotations([...annotations]);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            if (!isSupportedFileExtension(file, 'audio', supportedExtensions)) {
                alert('Unsupported file type');
                e.target.files = null;
                return;
            }

            if (!isSupportedFileSize(file, maxFileSize)) {
                alert('File size too big');
                e.target.files = null;
                return;
            }
            setAudioFile(file);
        }
    };

    const handleSubmit = () => {
        cb(annotations);
    };

    return (
        <div className="">
            <div className="flex items-center justify-around">
                <input
                    type="file"
                    accept={supportedExtensions
                        .map((ext) => `.${ext}`)
                        .join(',')}
                    onChange={handleFileChange}
                />

                {wavesurfer.current && (
                    <div className="flex items-center justify-start gap-4">
                        <div>
                            <label htmlFor="tag-select">Tag: </label>
                            <select
                                id="tag-select"
                                value={selectedTag}
                                onChange={handleTagChange}
                                className="bg-gray-100 p-3"
                            >
                                {tags.map((tag) => (
                                    <option key={tag} value={tag}>
                                        {tag}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            className="block rounded-md bg-green-600 px-4 py-3 font-semibold text-white"
                            onClick={handleAddRegion}
                        >
                            Add New Annotation
                        </button>
                    </div>
                )}
            </div>
            <div ref={wavesurferContainer} />
            {audioFile && wavesurfer.current ? (
                <div className="m-4 flex flex-col gap-4 p-4 shadow-lg">
                    <div className="flex items-center justify-between text-lg">
                        <p ref={currentTimeRef}></p>
                        <button onClick={() => setIsPlaying(!isPlaying)}>
                            {isPlaying ? (
                                <FaPause size={30} />
                            ) : (
                                <FaPlay size={30} />
                            )}
                        </button>
                        <p>{formatDuration(totalTime)}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-max items-center justify-center gap-3">
                            <p>
                                <MdZoomIn />
                            </p>
                            <input
                                onChange={handleZoomChange}
                                type="range"
                                min={10}
                                max={500}
                                value={zoom}
                                className={`h-4 w-full appearance-none rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none`}
                            />
                        </div>

                        <div className="flex w-max items-center justify-center gap-3">
                            <button onClick={() => setIsMuted(!isMuted)}>
                                {isMuted ? (
                                    <MdVolumeOff size={20} />
                                ) : (
                                    <MdVolumeUp size={20} />
                                )}
                            </button>
                            <input
                                onChange={handleVolumeChange}
                                type="range"
                                className={`h-4 w-full appearance-none rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none ${
                                    isMuted
                                        ? 'thumb:bg-gray-400'
                                        : 'thumb:bg-blue-500'
                                }`}
                                value={volume}
                            />
                            <p className={isMuted ? `text-gray-400` : 'black'}>
                                {volume}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label className="mr-3" htmlFor="autocenter">
                            Autocente:
                        </label>
                        <input
                            id="autocenter"
                            type="checkbox"
                            defaultChecked
                            onChange={handleAutoCenterChange}
                        />
                    </div>
                </div>
            ) : (
                ''
            )}
            {annotations.length > 0 && (
                <div className="prose my-4">
                    <h3 className="">Annotations ({annotations.length})</h3>
                    <div>
                        <div className="m-1 flex items-center justify-start gap-16 rounded-t-xl border-b-2 border-b-blue-400/40 bg-blue-100/25 py-3 pl-4">
                            <p>Id</p>
                            <p>Start</p>
                            <p>End</p>
                            <p>Tag</p>
                        </div>
                        {annotations.map((annotation, index) => (
                            <div
                                key={index}
                                className="m-1 flex items-center justify-evenly gap-5 border-b border-b-blue-200 py-3 hover:bg-blue-100/20"
                            >
                                <p>{annotation.id}</p>
                                <p>{formatDuration(annotation.startTime)}</p>
                                <p>{formatDuration(annotation.endTime)}</p>
                                <p>
                                    <span
                                        className="h-4 w-4 rounded-full"
                                        style={{
                                            color: colorsMap.get(
                                                annotation.tag,
                                            ),
                                        }}
                                    ></span>
                                    {annotation.tag}
                                </p>
                                <button
                                    className="w-16 rounded-md bg-gray-100 px-3 py-1 font-semibold"
                                    onClick={() =>
                                        handleAnnotationShowHide(annotation.id)
                                    }
                                >
                                    {annotation.visible ? 'hide' : 'show'}
                                </button>
                                <button
                                    className="rounded-md bg-red-600 px-3 py-1 font-semibold text-white"
                                    onClick={() =>
                                        handleAnnotationDelete(annotation.id)
                                    }
                                >
                                    delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}{' '}
        </div>
    );
}
