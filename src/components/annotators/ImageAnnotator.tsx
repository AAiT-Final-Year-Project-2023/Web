'use client';
import React, { useState, useRef, useEffect } from 'react';

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

// ...

export default function ImageAnnotatorComponent({
    props,
}: {
    props: {
        tags: string[];
        supported_extensions: string[];
        initial_annotations?: ImageLabel[];
        cb: (arg: ImageLabel[]) => void;
    };
}) {
    const { tags, supported_extensions, initial_annotations, cb } = props;
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            setCtx(canvas.getContext('2d'));
        }
    }, []);

    const handleImageLoad = () => {
        if (canvasRef.current && image) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const img = new Image();
            img.onload = handleImageLoad;
            img.src = URL.createObjectURL(file);
            setImage(img);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current && canvasRef.current && image) {
                const containerWidth = containerRef.current.offsetWidth;
                const imageHeight =
                    (image.height / image.width) * containerWidth;
                const canvas = canvasRef.current;
                canvas.width = containerWidth;
                canvas.height = imageHeight;
                handleImageLoad();
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [image]);

    

    return (
        <div>
            <input
                type="file"
                accept={supported_extensions.join(',')}
                onChange={handleFileChange}
            />
            <div ref={containerRef} className='relative'>
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={600}
                    style={{ border: '1px solid black' }}
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
        </div>
    );
}
