import { FileExtension } from '../types';

export const FILE_EXTENTION = `${process.env.backendHost}/api/file-extension`;

export const create = async (
    url: string,
    token: string,
    fileExtension: FileExtension,
): Promise<FileExtension> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
            'X-Custom-Header': 'Custom Value',
        },
        body: JSON.stringify(fileExtension),
        mode: 'cors',
        cache: 'no-cache',
    });
    return await response.json();
};

export const getMany = async (
    url: string,
    token: string,
): Promise<FileExtension[]> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
    });
    return await response.json();
};

export const get = async (
    url: string,
    token: string,
): Promise<FileExtension> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
    });
    return await response.json();
};

export const update = async (
    url: string,
    token: string,
    fileExtension: Partial<FileExtension>,
): Promise<FileExtension> => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
            'X-Custom-Header': 'Custom Value',
        },
        body: JSON.stringify(fileExtension),
        mode: 'cors',
        cache: 'no-cache',
    });
    return await response.json();
};

export const remove = async (url: string, token: string) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};
