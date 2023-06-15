export const USER_URL = `http://${process.env.backendHost}/api/user`;

export const me = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};

export const makeAdmin = async (url: string, token: string): Promise<any> => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};

export const uploadProfilePicture = async (
    url: string,
    token: string,
    formData: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: formData,
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};
