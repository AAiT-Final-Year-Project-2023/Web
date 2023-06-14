'use client'
import { Dataset, Me } from "@/common/types";
import { useState } from "react";

export default function DatasetCard({ props }: { props: { dataset: Dataset, user: Me } }) {
    const [datasetState, setDatasetState] = useState<Dataset>(props.dataset);
    const {
        id: datasetId,
        created_at,
        datatype,
        description,
        downvoted_by,
        updated_at,
        upvoted_by,
        labels,
        payment_plan,
        purchased_by,
        price,
        size,
        src,
        status,
        title,
        user
    } = datasetState;

    const { id: userId } = props.user;

    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
  <div className="flex items-center mb-2">
    <div className="flex-shrink-0">
      <img className="h-10 w-10 rounded-full" src={user.image} alt="Profile picture" />
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-gray-900">{user.username}</p>
      <p className="text-xs font-medium text-gray-500">{`${created_at}`}</p>
    </div>
  </div>
  <div className="mb-2">
    <h2 className="text-lg font-medium text-gray-900 mb-1">{title}</h2>
    <p className="text-sm text-gray-700 mb-2">{description}</p>
    <div className="flex flex-wrap">
      {labels.map((label, index) => (
        <span key={index} className="bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-2 py-1 mr-2 mb-2">
          {label}
        </span>
      ))}
    </div>
  </div>
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
        <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 3.333l-6.667 6.667h13.334L10 3.333z"/>
        </svg>
      </button>
      <span className="ml-1 mr-2 text-gray-700 text-xs font-medium">{upvoted_by.length}</span>
      <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
        <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 16.667l6.667-6.667H3.333L10 16.667z"/>
        </svg>
      </button>
      <span className="ml-1 text-gray-700 text-xs font-medium">{downvoted_by.length}</span>
    </div>
    <button className="btn btn-success text-white">
     Download 
    </button>
  </div>
</div>
 
    )
}