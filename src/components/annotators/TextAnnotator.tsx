'use client';
import { tagColors } from '@/common/constants';
import { useRef, useState } from 'react';
import { AnnotateTag, TextAnnotateBlend } from 'react-text-annotate-blend';

export default function TextAnnotatorComponent({
    props,
}: {
    props: {
        tags: string[];
        supported_extensions: string[];
        max_file_size: number;
        initial_annotations?: AnnotateTag[];
        callback: (arg: AnnotateTag[], file: File | null) => void;
    };
}) {
    const { tags, supported_extensions, initial_annotations, callback } = props;
    const [annotations, setAnnotations] = useState<AnnotateTag[]>(
        initial_annotations ?? [],
    );
    const [file, setFile] = useState<File | null>(null);
    const [selectedTag, setSelectedTag] = useState<string>(tags[0]);
    const [text, setText] = useState('');
    const message = useRef<HTMLDivElement>(null);

    const tagColor = new Map<string, string>();

    tags.forEach((tag, index) => {
        tagColor.set(tag, tagColors[index]);
    });

    const handleAnnotationChange = (value: any) => {
        setAnnotations(value);
    };

    const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newTag = event.target.value;
        setSelectedTag(newTag);
    };

    const getSpan = (span: any) => ({
        ...span,
        tag: selectedTag,
        color: tagColor.get(selectedTag),
    });

    const handleSubmit = () => {
        if (callback) callback(annotations, file);
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            const file_name = file.name;
            const file_extention = file_name.substring(
                file_name.lastIndexOf('.') + 1,
            );
            
            if (!supported_extensions.includes(file_extention)) {
                alert('Unsupported file type!');
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                if (message.current) {
                    message.current.innerHTML = '';
                }
                setText(event.target?.result?.toString() || '');
            };
            reader.onprogress = (event) => {
                if (message.current) {
                    message.current.innerHTML = 'Loading...';
                }
            };

            reader.readAsText(file);
            setFile(file);
        }
    };

    return (
        <div className="rounded-2xl p-8">
            <div id="loading-text" ref={message}></div>
            <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-3">
                    <label htmlFor="tag-select">Tag:</label>
                    <select
                        className="select select-primary w-full max-w-xs"
                        id="tag-select"
                        onChange={handleTagChange}
                    >
                        {tags.map((tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
                {!text ? (
                    ''
                ) : (
                    <div className="max-h-96 overflow-auto rounded-sm p-5 shadow-xl">
                        <TextAnnotateBlend
                            style={{
                                fontSize: '1.2rem',
                            }}
                            content={text}
                            onChange={handleAnnotationChange}
                            value={annotations}
                            getSpan={getSpan}
                        />
                    </div>
                )}

                <div className="flex w-full gap-4 items-end justify-between">
                    <label className="block">
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                            onChange={handleFileChange}
                        />
                    </label>
                    <button
                        onClick={handleSubmit}
                        className="btn btn-outline btn-primary"
                    >
                        Submit
                    </button>
                </div>
            </div>

            <h3 className="mt-11">Current Stored Value</h3>

            <div>
                <pre>{JSON.stringify(annotations, null, 4)}</pre>
            </div>
        </div>
    );
}
