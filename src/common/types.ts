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

export type AudioLabel = {
    id: number;
    startTime: number;
    endTime: number;
    tag: string;
};
