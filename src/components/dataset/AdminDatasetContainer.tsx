import { DatasetResult, Me } from '@/common/types';
import DatasetCardAdmin from './DatasetCardAdmin';

export async function AdminDatasetsContainer({
    props,
}: {
    props: { promise: Promise<DatasetResult> };
}) {
    const datasets = await props.promise;
    return (
        <ul className="justify-left flex flex-wrap gap-4">
            {datasets?.results?.map((dataset) => (
                <li className="max-w-md" key={dataset.id}>
                    <DatasetCardAdmin props={{ dataset }} />
                </li>
            ))}
        </ul>
    );
}
