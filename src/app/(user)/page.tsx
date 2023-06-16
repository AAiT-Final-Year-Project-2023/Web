'use client';
import AudioAnnotatorComponent from '@/components/annotators/AudioAnnotator';
import { AudioLabel, ImageLabel } from '@/common/types';
import ImageAnnotatorComponent from '@/components/annotators/ImageAnnotator';
import { useRouter } from 'next/navigation';

export default function Page() {
    const tags = ['lights', 'star', 'die'];
    // const supportedExtensions = ['mp3', 'x-flac'];
    const supportedExtensions = ['jpg', 'png'];
    const initialAnnotations = new Array<AudioLabel>();
    initialAnnotations.push({
        id: 1,
        startTime: 4,
        endTime: 8,
        tag: tags[0],
    });

    initialAnnotations.push({
        id: 2,
        startTime: 9,
        endTime: 23,
        tag: tags[1],
    });

    // const getData = (data: AudioLabel[]) => {
    //     console.log(data);
    // };

    const getData = (data: ImageLabel[]) => {
        console.log(data);
    };

    const router = useRouter();
    router.push("/home");

    return (
        <main className="content">
            <h1>Landing Page</h1>
            {/* <VideoAnnotatorComponent /> */}
            {/* <ImageAnnotatorComponent
                props={{
                    tags,
                    supportedExtensions,
                    maxFileSize: 1_000_000,
                    initialAnnotations,
                    cb: getData,
                }}
            /> */}
            {/* <AudioAnnotatorComponent
                props={{
                    tags,
                    supportedExtensions,
                    maxFileSize: 1_000_000_000,
                    initialAnnotations,
                    cb: getData,
                }}
            /> */}
            {/* <ImageAnnotatorComponent
                props={{
                    tags,
                    supportedExtensions,
                    cb: getData,
                    initialAnnotations: [],
                    maxFileSize: 1_000_000_000,
                }} */}
            />
        </main>
    );
}
