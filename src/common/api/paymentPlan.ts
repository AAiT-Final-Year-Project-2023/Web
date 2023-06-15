export const PAYMENT_PLAN_URL = `${process.env.backendHost}/api/paymentplan`;

export const create = async (
    url: string,
    token: string,
    paymentPlan: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
            'X-Custom-Header': 'Custom Value',
        },
        body: JSON.stringify(paymentPlan),
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

export const update = async (
    url: string,
    token: string,
    paymentPlan: any,
): Promise<any> => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            Authorization: `${token}`,
        },
        body: JSON.stringify(paymentPlan),
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
