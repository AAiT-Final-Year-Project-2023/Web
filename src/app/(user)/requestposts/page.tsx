import {
    REQUEST_POST_URL,
    getMany as getManyRequestPosts,
} from '@/common/api/requestPost';
import { USER_URL, me } from '@/common/api/user';
import { Me, RequestPostResult } from '@/common/types';
import { HomeDatasetsContainer } from '@/components/dataset/HomeDatasetContainer';
import { HomeRequestPostsContainer } from '@/components/requestpost/HomeRequestPostsContainer';
import { cookies } from 'next/dist/client/components/headers';
import { Suspense } from 'react';

export default async function Page() {
    // get the latest 5 request posts
    const token = cookies().get('datashelf_token')?.value || '';
    const requestPostUrl =
        REQUEST_POST_URL + `?page=${1}&limit=${5}&sortByDate=ASC`;
    const requestPosts: Promise<RequestPostResult> = getManyRequestPosts(
        requestPostUrl,
        token,
    );

    const meUrl = USER_URL + '/me';
    const user: Me = await me(meUrl, token);

    return (
        <main className="">
            <section className="my-2">
                <h1 className="text-3xl font-bold">Request Posts</h1>
                <Suspense
                    fallback={
                        <div className="flex w-full justify-center">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    }
                >
                    {/* @ts-expect-error Server Component */}
                    <HomeRequestPostsContainer
                        props={{ promise: requestPosts, user }}
                    />
                </Suspense>
            </section>
        </main>
    );
}
