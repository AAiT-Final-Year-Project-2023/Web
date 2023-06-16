import { RequestPost } from '../types';

export const REQUEST_POST_URL = `http://${process.env.backendHost}/api/requestpost`;

export const create = async (
    url: string,
    token: string,
    requestPost: RequestPost,
): Promise<RequestPost> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: JSON.stringify(requestPost),
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};

export const getMany = async (
    url: string,
    token: string,
): Promise<{ results: RequestPost[]; total: number }> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const get = async (url: string, token: string): Promise<RequestPost> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const download = async (url: string, token: string): Promise<Response> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/octet-stream',
        },
        cache: 'no-store',
    });
    return response;
};

export const close = async (
    url: string,
    token: string,
): Promise<RequestPost> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const upvote = async (
    url: string,
    token: string,
): Promise<RequestPost> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const downvote = async (
    url: string,
    token: string,
): Promise<RequestPost> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const makePublic = async (
    url: string,
    token: string,
): Promise<RequestPost> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const makePrivate = async (
    url: string,
    token: string,
): Promise<RequestPost> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const diskUsage = async (
    url: string,
    token: string,
): Promise<{used: number, total: number}> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const countContributions = async (
    url: string,
    token: string,
): Promise<number> => {
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
    requestpost: Partial<RequestPost>,
): Promise<RequestPost> => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            authorization: `${token}`,
        },
        body: JSON.stringify(requestpost),
        cache: 'no-store',
    });
    return await response.json();
};

export const remove = async (
    url: string,
    token: string,
): Promise<RequestPost> => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};
