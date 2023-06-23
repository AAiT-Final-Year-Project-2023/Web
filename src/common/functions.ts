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

export const showErrorAlert = (message: string, document: Document) => {
    const alert = document.createElement('div');
    alert.className =
        'alert alert-error transition-all duration-150 ease-linear';
    alert.style.position = 'fixed';
    alert.style.top = '30px';
    alert.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>${message}</span>
  `;
    document.body.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000); // remove after 3 seconds
};

export const showInfoAlert = (message: string, document: Document) => {
    const alert = document.createElement('div');
    alert.className =
        'alert alert-info transition-all duration-150 ease-linear';
    alert.style.position = 'fixed';
    alert.style.top = '30px';
    alert.innerHTML = `
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>${message}</span>
  `;
    document.body.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000); // remove after 3 seconds
};
