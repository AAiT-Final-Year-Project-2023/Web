'use client';
import AudioAnnotatorComponent from '@/components/annotators/AudioAnnotator';
import { AudioLabel } from '@/common/types';

export default function Page() {
    const tags = ['dog', 'cat', 'die'];
    const supportedExtensions = ['mp3', 'x-flac'];
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

    const getData = (data: AudioLabel[]) => {
        console.log(data);
    };

    return (
        <main className="">
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
            <AudioAnnotatorComponent
                props={{
                    tags,
                    supportedExtensions,
                    maxFileSize: 1_000_000_000,
                    initialAnnotations,
                    cb: getData,
                }}
            />
        </main>
    );
}
