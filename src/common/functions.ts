export const isSupportedFileExtension = (
    file: File,
    fileType: string,
    supportedExtensions: string[],
): boolean => {
    let fileTypeExtension = file.type.split('/');
    const [currFileType, currFileExtension] = fileTypeExtension;
    if (currFileType && currFileType === fileType) {
        return true;
    }

    if (currFileExtension && supportedExtensions.includes(currFileExtension)) {
        return true;
    }
    return false;
};

export const isSupportedFileSize = (
    file: File,
    maxFileSize: number,
): boolean => {
    return file.size < maxFileSize;
};
