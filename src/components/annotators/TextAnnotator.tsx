'use client';
import { useRef, useState } from 'react';
import { AnnotateTag, TextAnnotateBlend } from 'react-text-annotate-blend';

export default function TextAnnotatorComponent({
    props,
}: {
    props: {
        tags: string[];
        supported_extensions: string[];
        initial_annotations?: AnnotateTag[];
        callback: (arg: AnnotateTag[]) => void;
    };
}) {
    const { tags, supported_extensions, initial_annotations, callback } = props;
    const [annotations, setAnnotations] = useState<AnnotateTag[]>(
        initial_annotations ?? [],
    );
    const [selectedTag, setSelectedTag] = useState<string>(tags[0]);
    const [text, setText] = useState('');
    const message = useRef<HTMLDivElement>(null);

    const COLORS: string[] = [
        '#6fff00',
        '#00ffbb',
        '#cf4444',
        '#f7980a',
        '#fbff0d',
        '#00eaff',
        '#008cff',
        '#1500ff',
        '#ff00ee',
    ];
    const tagColor = new Map();

    tags.forEach((tag, index) => {
        tagColor.set(tag, COLORS[index]);
    });

    const handleAnnotationChange = (value: any) => {
        console.log(value);
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
        if (callback) callback(annotations);
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
        }
    };

    return (
        <div className="rounded-2xl bg-zinc-200 p-8">
            <div id="loading-text" ref={message}></div>
            <h2 className="mb-4 text-3xl">Choose a file to be labeled</h2>

            <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-3">
                    <label htmlFor="tag-select">Select a tag</label>
                    <select
                        className="focus:shadow-outline appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
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

                <div className="flex w-full items-end justify-between">
                    <label className="block">
                        <span className="text-gray-700">Choose a file</span>
                        <input
                            type="file"
                            className="w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-4 py-2"
                        />
                    </label>
                    <button
                        onClick={handleSubmit}
                        className="block rounded-lg bg-green-500 p-4 text-lg font-bold text-white shadow-lg"
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
