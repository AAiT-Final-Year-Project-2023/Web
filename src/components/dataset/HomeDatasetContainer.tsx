import { DatasetResult, Me} from "@/common/types";
import DatasetCard from "./DatasetCard";

export async function HomeDatasetsContainer({ props }: { props: {promise: Promise<DatasetResult>, user: Me}}) {
  const datasets = await props.promise;
  const me: Me = props.user

  return (
    <ul>
      {
  datasets.results.map(dataset=> (
                   <li>
<DatasetCard key={dataset.id} props={{dataset, user: me}}/>
                   </li> 
                ) )
 
      }
    </ul>  
  )
}