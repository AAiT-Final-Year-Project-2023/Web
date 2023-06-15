export const DATASET_URL = `http://${process.env.backendHost}/api/dataset`;

export const create = async (
    url: string,
    token: string,
    dataset: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: dataset,
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};

export const getMany = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const get = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const upvote = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const downvote = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const update = async (
    url: string,
    token: string,
    dataset: Partial<any>,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            Authorization: `${token}`,
        },
        body: JSON.stringify(dataset),
        cache: 'no-store',
    });
    return await response.json();
};

export const remove = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const download = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/octet-stream',
        },
        cache: 'no-store',
    });
    return await response.blob();
};
