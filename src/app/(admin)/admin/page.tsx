import { DATASET_URL, getMany as getManyDatasets } from '@/common/api/dataset';
import { DatasetStatus } from '@/common/constants';
import { DatasetResult } from '@/common/types';
import { AdminDatasetsContainer } from '@/components/dataset/AdminDatasetContainer';
import { cookies } from 'next/dist/client/components/headers';
import { Suspense } from 'react';

export default async function Page() {
    const token = cookies().get('datashelf_token')?.value || '';
    const datasetUrl =
        DATASET_URL +
        `?page=${1}&limit=${500}&sortByDate=ASC&status=${
            DatasetStatus.PENDING
        }`;
    const datasets: Promise<DatasetResult> = getManyDatasets(datasetUrl, token);

    return (
        <main className="">
            <h1 className="text-3xl font-bold">Home Page</h1>
            <section className="my-2">
                <h1 className="text-3xl font-bold">
                    Datasets Pending Approval
                </h1>
                <Suspense
                    fallback={
                        <div className="flex w-full justify-center">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    }
                >
                    {/* @ts-expect-error Server Component */}
                    <AdminDatasetsContainer props={{ promise: datasets }} />
                </Suspense>
            </section>
        </main>
    );
}
