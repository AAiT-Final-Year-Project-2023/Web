import { DATASET_URL, getMany as getManyDatasets } from '@/common/api/dataset';
import { USER_URL, me } from '@/common/api/user';
import { DatasetResult, Me } from '@/common/types';
import { HomeDatasetsContainer } from '@/components/dataset/HomeDatasetContainer';
import { cookies } from 'next/dist/client/components/headers';
import { Suspense } from 'react';

export default async function Page() {
    const token = cookies().get('datashelf_token')?.value || '';
    const datasetUrl = DATASET_URL + `?page=${1}&limit=${5}&sortByDate=ASC`;
    const datasets: Promise<DatasetResult> = getManyDatasets(datasetUrl, token);

    const meUrl = USER_URL + '/me';
    const user: Me = await me(meUrl, token);

    return (
        <main className="">
            <section className='my-2'>
                <h1 className="text-3xl font-bold">Datasets</h1>
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
