'use client';
import { tagColors } from '@/common/constants';
import {
    isSupportedFileExtension,
    isSupportedFileSize,
} from '@/common/functions';
import { ImageLabel } from '@/common/types';
import React, { useState, useRef, useEffect } from 'react';

export default function ImageAnnotatorComponent({
    props,
}: {
    props: {
        tags: string[];
        supportedExtensions: string[];
        maxFileSize: number;
        initialAnnotations?: ImageLabel[];
        cb: (arg: ImageLabel[], file: File | null) => void;
    };
}) {
    const { tags, supportedExtensions, maxFileSize, initialAnnotations, cb } =
        props;
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    const [selectedTag, setSelectedTag] = useState<string>(tags[0]);
    const [annotations, setAnnotations] = useState<ImageLabel[]>(
        initialAnnotations || [],
    );
    const [drawing, setDrawing] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);
    const colorsMapRef = useRef<Map<string, string>>(new Map());

    const fallbackColor = '#fff100';
    const colorsMap = new Map<string, string>();
    tags.forEach((tag, index) => {
        colorsMap.set(tag, tagColors[index]);
    });
    colorsMapRef.current = colorsMap;

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            setCtx(canvas.getContext('2d'));
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current && canvasRef.current && image) {
                const containerWidth = containerRef.current.offsetWidth;
                const img = new Image();
                img.src = image.src;
                img.onload = () => {
                    const imageHeight =
                        (img.height / img.width) * containerWidth;
                    const canvas = canvasRef.current;
                    if (canvas) {
                        canvas.width = containerWidth;
                        canvas.height = imageHeight;
                    }
                    handleImageLoad();
                };
            }
        };

        handleResize();

        return () => {};
    }, [image]);

    useEffect(() => {
        handleImageLoad();
    }, [annotations]);

    const handleImageLoad = () => {
        if (canvasRef.current && image) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                drawAnnotations(ctx);
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            if (!isSupportedFileExtension(file, 'image', supportedExtensions)) {
                alert('Unsupported file type');
                e.target.files = null;
                return;
            }

            if (!isSupportedFileSize(file, maxFileSize)) {
                alert('File size too big');
                e.target.files = null;
                return;
            }

            const img = new Image();
            img.onload = () => {
                setImage(img);
            };
            img.src = URL.createObjectURL(file);
            setFile(file);
        }
    };

    const drawAnnotations = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(
            image as HTMLImageElement,
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height,
        );
        annotations.forEach((annotation) => {
            if (annotation.visible) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = annotation.color;
                ctx.fillStyle = annotation.color;
                ctx.beginPath();
                ctx.rect(
                    annotation.x,
                    annotation.y,
                    annotation.width,
                    annotation.height,
                );
                ctx.closePath();
                ctx.stroke();
                ctx.font = '16px Arial';
                ctx.fillText(
                    `${annotation.id} - ${annotation.tag}`,
                    annotation.x,
                    annotation.y - 5,
                );
            }
        });
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (ctx) {
            setDrawing(true);
            setStartX(e.nativeEvent.offsetX);
            setStartY(e.nativeEvent.offsetY);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (drawing && ctx) {
            const currentX = e.nativeEvent.offsetX;
            const currentY = e.nativeEvent.offsetY;

            const width = currentX - startX;
            const height = currentY - startY;

            handleImageLoad();

            ctx.strokeStyle =
                colorsMapRef.current.get(selectedTag) || fallbackColor;
            ctx.lineWidth = 2;
            ctx.fillStyle = ctx.strokeStyle;
            ctx.beginPath();
            ctx.rect(startX, startY, width, height);
            ctx.stroke();
            ctx.fillText(selectedTag, startX, startY - 5);
        }
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (drawing && ctx) {
            const currentX = e.nativeEvent.offsetX;
            const currentY = e.nativeEvent.offsetY;

            const width = currentX - startX;
            const height = currentY - startY;

            const annotation: ImageLabel = {
                id: annotations.length + 1,
                tag: selectedTag,
                x: startX,
                y: startY,
                width,
                height,
                visible: true,
                color: colorsMapRef.current.get(selectedTag) || fallbackColor,
            };

            setAnnotations([...annotations, annotation]);
            setDrawing(false);
        }
    };

    const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTag(e.target.value);
    };

    const handleAnnotationShowHide = (id: number) => {
        setAnnotations((prevAnnotations) =>
            prevAnnotations.map((annotation) =>
                annotation.id === id
                    ? { ...annotation, visible: !annotation.visible }
                    : annotation,
            ),
        );
    };

    const handleAnnotationDelete = (id: number) => {
        setAnnotations((prevAnnotations) =>
            prevAnnotations.filter((annotation) => annotation.id !== id),
        );
    };

    const handleSubmit = () => {
        cb(annotations, file);
    };

    return (
        <div className="">
           <div className='flex items-center gap-x-16 gap-y-10 '>
            <input
                type="file"
                className='file-input file-input-bordered file-input-primary w-full max-w-xs'
                accept={supportedExtensions
                    .map((ext) => `.${ext}`)
                    .join(',')}
                onChange={handleFileChange}
            />
            <div className='flex items-center justify-center'>
                    <label htmlFor="tag-select" className='m-4'>Tag: </label>
                    <select
                        id="tag-select"
                        value={selectedTag}
                        onChange={handleTagChange}
                        className="select select-primary w-full max-w-xs"
                    >
                        {tags.map((tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
            </div> 
            <div className="my-3 flex flex-wrap items-start gap-x-24">
                <div ref={containerRef} className="relative">
                    <canvas
                        ref={canvasRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseOut={handleMouseUp}
                        style={{
                            cursor: 'crosshair',
                            width: image?.width,
                            height: image?.height
                        }}
                    ></canvas>
                    {image && (
                        <img
                            src={image.src}
                            alt="Loaded Image"
                            onLoad={handleImageLoad}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: 'auto',
                                top: 0,
                                left: 0,
                                visibility: 'hidden',
                            }}
                        />
                    )}
                </div>
                {annotations.length > 0 && (
                    <div className="w-max shadow-lg">
                        <div className="bg-neutral-100 p-3 text-center text-lg">
                            Annotations {'('}
                            {annotations.length}
                            {')'}
                        </div>
                        <div className="max-h-60 overflow-auto px-4 py-3">
                            {annotations.map((rectangle) => (
                                <div
                                    key={rectangle.id}
                                    className="m-1 flex items-center justify-evenly gap-5 border-b border-b-gray-300 py-3"
                                >
                                    <p>{rectangle.id}</p>
                                    <p>{rectangle.tag}</p>
                                    <button
                                        className="btn btn-active btn-ghost"
                                        onClick={() =>
                                            handleAnnotationShowHide(
                                                rectangle.id,
                                            )
                                        }
                                    >
                                        {rectangle.visible ? 'hide' : 'show'}
                                    </button>
                                    <button
                                        className="btn btn-error"
                                        onClick={() =>
                                            handleAnnotationDelete(rectangle.id)
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
            {/* {image && ( */}
            <div className="flex flex-col items-center p-7">
                
                <div>
                    <button
                        onClick={handleSubmit}
                        className="btn btn-outline btn-primary"
                    >
                        Submit
                    </button>
                </div>
            </div>
            {/* )} */}
        </div>
    );
}
