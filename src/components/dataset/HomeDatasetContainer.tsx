import { DatasetResult, Me } from '@/common/types';
import DatasetCard from './DatasetCard';

export async function HomeDatasetsContainer({
    props,
}: {
    props: { promise: Promise<DatasetResult>; user: Me };
}) {
    const datasets = await props.promise;
    const me: Me = props.user;

    return (
        <ul className="justify-left flex flex-wrap gap-4">
            {datasets.results.map((dataset) => (
                <li className="max-w-md" key={dataset.id}>
                    <DatasetCard props={{ dataset, user: me }} />
                </li>
            ))}
        </ul>
    );
}
