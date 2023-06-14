import { Me, RequestPostResult } from "@/common/types";
import RequestPostCard from "./RequestPostCard";

export async function HomeRequestPostsContainer({ props }: { props: {promise: Promise<RequestPostResult>, user: Me}}) {
  const requestPosts = await props.promise;
  const me: Me = props.user

  return (
    <ul>
      {
  requestPosts.results.map(requestPost => (
                   <li>
<RequestPostCard key={requestPost.id} props={{requestPost, user: me}}/>
                   </li> 
                ) )
 
      }
    </ul>  
  )
}