import { Me, RequestPost } from '@/common/types';
import RequestPostCard from '@/components/requestpost/RequestPostCard';
import { cookies } from 'next/dist/client/components/headers';

const fetchMe = async () => {
const token = cookies().get('datashelf_token');
     const meRes = await fetch(
                `http://${process.env.backendHost}/api/user/me`,
                {
                    headers: {
                        Authorization: `${token?.value}`,
                    },
                },
            );
    return await meRes.json();
}

const fetchRequestPosts = async (url: string, page: number, limit: number) => {
    url += `?page=${page}&limit=${limit}`;
    const token = cookies().get('datashelf_token');
    const meRes = await fetch(url, {
        headers: {
            Authorization: `${token?.value}`,
        },
        cache: 'no-store',
    });
    return await meRes.json();
};

export default async function Page() {
    const requestPosts: { results: RequestPost[], total: 1 } = await fetchRequestPosts(
        `http://${process.env.backendHost}/api/requestpost`,
        0,
        0,
    );

    const user: Me = await fetchMe();
    return (
        <main className="">
            <h1>Home Page</h1>
            {
                requestPosts.results.map(requestPost => (
                    <RequestPostCard key={requestPost.id} props={{requestPost, user}}/>
                ) )
            }
        </main>
    );
}
