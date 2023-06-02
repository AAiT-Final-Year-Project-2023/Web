'use client'
import ImageAnnotatorComponent, { ImageLabel } from "@/components/annotators/ImageAnnotator";

export default function Page() {
    const tags = ["dog", "cat", "die"];
    const supported_extensions = ["png", "jpg"]
    const initial_annotations = new Array<ImageLabel>()
    const getData = (data: ImageLabel[]) => {
        console.log(data);
    }

    return (
        <main className="">
            <h1>Landing Page</h1>
            {/* <VideoAnnotatorComponent /> */}
            <ImageAnnotatorComponent props={{ tags, supported_extensions, initial_annotations, cb: getData}} />
        </main>
    );
}
