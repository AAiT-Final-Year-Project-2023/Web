export const CONTRIBUTION_URL = `${process.env.backendHost}/api/contribution`;

export const create = async (
    url: string,
    token: string,
    contribution: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: JSON.stringify(contribution),
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};

export const getMany = async (url: string, token: string): Promise<any[]> => {
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

export const getCount = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const accept = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const reject = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            Authorization: `${token}`,
        },
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
        },
        cache: 'no-store',
    });
    return await response.json();
};
