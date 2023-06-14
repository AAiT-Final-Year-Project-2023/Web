export const AUTH_URL = `${process.env.backendHost}/api/auth`;

export const login = async (
    url: string,
    token: string,
    loginInfo: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: JSON.stringify(loginInfo),
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};

export const googleSignIn = async (url: string, token: string): Promise<any[]> => {
    const response = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await response.json();
};

export const register = async (
    url: string,
    token: string,
    signUpInfo: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: JSON.stringify(signUpInfo),
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};


export const verifyEmail= async (
    url: string,
    token: string,
    verifyEmailInfo: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: JSON.stringify(verifyEmailInfo),
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};

export const resendEmailVerification= async (
    url: string,
    token: string,
    resendEmailVerificationInfo: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: JSON.stringify(resendEmailVerificationInfo),
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};

export const changepassword= async (
    url: string,
    token: string,
    password: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            authorization: `${token}`,
        },
        body: JSON.stringify(password),
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};

export const verifyChangePassword= async (
    url: string,
    token: string,
    password: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            authorization: `${token}`,
        },
        body: JSON.stringify(password),
        mode: 'cors',
        cache: 'no-cache',
    });

    return await response.json();
};