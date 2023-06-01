'use client';
import TextAnnotatorComponent from '@/components/annotators/TextAnnotator';
import { AnnotateTag } from 'react-text-annotate-blend';

const tags = [
    'dog',
    'cat',
    'rat',
    'camel',
    'cow',
    'that',
    'what',
    'she',
    'said',
    'bells',
];
const extensions = ['txt'];

export default function Page() {
    const getAnnotations = (annotations: AnnotateTag[]) => {
        console.log(annotations);
    };
    return (
        <>
            <TextAnnotatorComponent
                props={{
                    tags,
                    supported_extensions: extensions,
                    initial_annotations: [],
                    callback: getAnnotations,
                }}
            />
        </>
    );
}
