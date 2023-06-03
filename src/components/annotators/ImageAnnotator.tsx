'use client';
import React, { useState, useRef, useEffect, useDebugValue } from 'react';

export type ImageLabel = {
    id: number;
    tag: string;
    x: number;
    y: number;
    width: number;
    height: number;
    visible: boolean;
    color: string;
};

export default function ImageAnnotatorComponent({
    props,
}: {
    props: {
        tags: string[];
        supportedExtensions: string[];
        maxFileSize: number;
        initialAnnotations?: ImageLabel[];
        cb: (arg: ImageLabel[]) => void;
    };
}) {
    const { tags, supportedExtensions, maxFileSize, initialAnnotations, cb } =
        props;
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    const [selectedTag, setSelectedTag] = useState<string>(tags[0]);
    const [rectangles, setRectangles] = useState<ImageLabel[]>(
        initialAnnotations || [],
    );
    const [drawing, setDrawing] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);

    const tagColors = [
        '#fff100',
        '#ff8c00',
        '#e81123',
        '#ec008c',
        '#68217a',
        '#00188f',
        '#00bcf2',
        '#00b294',
        '#009e49',
        '#bad80a',
    ];
    const fallbackColor = '#fff100';
    const colorsMap = new Map<string, string>();
    tags.forEach((tag, index) => {
        colorsMap.set(tag, tagColors[index]);
    });

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

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [image]);

    const handleImageLoad = () => {
        if (canvasRef.current && image) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                rectangles.forEach((rectangle) => {
                    if (rectangle.visible) {
                        ctx.strokeStyle = rectangle.color;
                        ctx.lineWidth = 2;
                        ctx.fillStyle = rectangle.color;
                        ctx.beginPath();
                        ctx.rect(
                            rectangle.x,
                            rectangle.y,
                            rectangle.width,
                            rectangle.height,
                        );
                        ctx.stroke();
                        ctx.fillText(
                            rectangle.tag,
                            rectangle.x,
                            rectangle.y - 5,
                        );
                    }
                });
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
                handleImageLoad();
            };
            img.src = URL.createObjectURL(file);
        }
    };

    const isSupportedFileExtension = (
        file: File,
        fileType: string,
        supportedExtensions: string[],
    ): boolean => {
        let fileTypeExtension = file.type.split('/');
        const [currFileType, currFileExtension] = fileTypeExtension;
        if (currFileType && currFileType === fileType) {
            return true;
        }

        if (
            currFileExtension &&
            supportedExtensions.includes(currFileExtension)
        ) {
            return true;
        }
        return false;
    };

    const isSupportedFileSize = (file: File, maxFileSize: number): boolean => {
        return file.size < maxFileSize;
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

            ctx.strokeStyle = colorsMap.get(selectedTag) || fallbackColor;
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

            const rectangle: ImageLabel = {
                id: rectangles.length + 1,
                tag: selectedTag,
                x: startX,
                y: startY,
                width,
                height,
                visible: true,
                color: colorsMap.get(selectedTag) || fallbackColor,
            };

            setRectangles([...rectangles, rectangle]);
            setDrawing(false);
            console.log(rectangles);
        }
    };

    const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTag(e.target.value);
    };

    return (
        <div>
            <input
                type="file"
                accept={supportedExtensions.join(',')}
                onChange={handleFileChange}
            />
            <div ref={containerRef} className="relative">
                <canvas
                    ref={canvasRef}
                    width={0}
                    height={0}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseOut={handleMouseUp}
                    style={{
                        cursor: 'crosshair',
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
            <div>
                <label htmlFor="tag-select">Select Tag:</label>
                <select
                    id="tag-select"
                    value={selectedTag}
                    onChange={handleTagChange}
                >
                    {tags.map((tag) => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
