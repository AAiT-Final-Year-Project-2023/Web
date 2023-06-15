import { DATASET_URL, getMany as getManyDatasets } from '@/common/api/dataset';
import {
    REQUEST_POST_URL,
    getMany as getManyRequestPosts,
} from '@/common/api/requestPost';
import { USER_URL, me } from '@/common/api/user';
import { DatasetResult, Me, RequestPostResult } from '@/common/types';
import { HomeDatasetsContainer } from '@/components/dataset/HomeDatasetContainer';
import { HomeRequestPostsContainer } from '@/components/requestpost/HomeRequestPostsContainer';
import { cookies } from 'next/dist/client/components/headers';
import { Suspense } from 'react';

export default async function Page() {
    // get the latest 3 request posts
    const token = cookies().get('datashelf_token')?.value || '';
    const requestPostUrl =
        REQUEST_POST_URL + `?page=${1}&limit=${3}&sortByDate=ASC`;
    const requestPosts: Promise<RequestPostResult> = getManyRequestPosts(
        requestPostUrl,
        token,
    );

    // get the latest 3 datasets
    const datasetUrl = DATASET_URL + `?page=${1}&limit=${3}&sortByDate=ASC`;
    const datasets: Promise<DatasetResult> = getManyDatasets(datasetUrl, token);

    const meUrl = USER_URL + '/me';
    const user: Me = await me(meUrl, token);

    return (
        <main className="">
            <h1>Home Page</h1>
            <section>
                <h1 className="prose">Latest Request Posts</h1>
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
            <section>
                <h1 className="prose">Latest Datasets</h1>
                <Suspense
                    fallback={
                        <div className="flex w-full justify-center">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    }
                >
                    {/* @ts-expect-error Server Component */}
                    <HomeDatasetsContainer
                        props={{ promise: datasets, user }}
                    />
                </Suspense>
            </section>
        </main>
    );
}
