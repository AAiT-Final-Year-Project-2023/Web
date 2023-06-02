'use client';
import ImageAnnotatorComponent, {
    ImageLabel,
} from '@/components/annotators/ImageAnnotator';

export default function Page() {
    const tags = ['dog', 'cat', 'die'];
    const supportedExtensions = ['png', 'jpg'];
    const initialAnnotations = new Array<ImageLabel>();
    const getData = (data: ImageLabel[]) => {
        console.log(data);
    };

    return (
        <main className="">
            <h1>Landing Page</h1>
            {/* <VideoAnnotatorComponent /> */}
            <ImageAnnotatorComponent
                props={{
                    tags,
                    supportedExtensions,
                    maxFileSize: 100_000,
                    initialAnnotations,
                    cb: getData,
                }}
            />
        </main>
    );
}
