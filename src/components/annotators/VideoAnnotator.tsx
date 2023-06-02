'use client';
export default function VideoAnnotatorComponent() {
    const config = {
        interfaces: [
            {
                type: 'image_classification',
                labels: ['cat', 'dog'],
                description: 'Classify the image as a cat or a dog',
            },
        ],
        task: {
            source: 'https://example.com/images',
            data: {
                image: '$image',
            },
        },
    };

    const handleLabelUpdate = (updatedLabel: any) => {
        console.log('Updated label:', updatedLabel);
    };

    let labels: any = [];

    return <></>;
}
