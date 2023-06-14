'use client'
import { Me, RequestPost } from '@/common/types';
import Cookies from 'js-cookie';
import { cookies } from 'next/dist/client/components/headers';
import { useState } from 'react';

const fetchUpvote = async (url: string, requestPostId: string) => {
        url += `/${requestPostId}/upvote`;
        const token = cookies().get('datashelf_token');
        const meRes = await fetch(url, {
            headers: {
                Authorization: `${token?.value}`,
            },
            cache: 'no-store',
        });
        return await meRes.json();
}

const fetchDownvote = async (url: string, requestPostId: string) => {
    url += `/${requestPostId}/downvote`;
    const token = Cookies.get('datashelf_token');
    console.log(token);
    const meRes = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
        cache: 'no-store',
    });
    return await meRes.json();
}

export default function RequestPostCard({ props }: { props: { requestPost: RequestPost, user: Me } }) {
    const [requestPostState, setRequestPostState] = useState<RequestPost>(props.requestPost);
    const {
        id: requestPostId ,
        title,
        description,
        labels,
        guidelines,
        datatype,
        extensions,
        data_size,
        payment,
        deadline,
        closed,
        created_at,
        user,
        payment_plan,
        upvoted_by,
        downvoted_by,
    } = requestPostState;

    const { id: userId } = props.user;

    const hasUpvoted = (): boolean => {
        props.requestPost.upvoted_by.forEach(upvote => {
            if(upvote.id === userId) return true;
        });
        return false;
    }

    const hasdownvoted = (): boolean => {
        props.requestPost.downvoted_by.forEach(downvote => {
            if(downvote.id === userId) return true;
        });
        return false;
    }

    const handleUpvote = async () => {
        const updatedRequestPost = await fetchUpvote('api/requestpost/', requestPostId);
        setRequestPostState(updatedRequestPost);
    }

    const handleDownvote = async () => {
        const updatedRequestPost = await fetchDownvote('api/requestpost/', requestPostId);
        setRequestPostState(updatedRequestPost);
    }

    return (
        <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <div className="mt-4 flex space-x-2">
                {labels.map((label) => (
                    <span
                        key={label}
                        className="rounded-md bg-blue-500 px-2 py-1 text-sm text-white"
                    >
                        {label}
                    </span>
                ))}
            </div>
            <p className="mt-4 text-gray-500">{guidelines}</p>
            <div className="mt-4 flex space-x-2">
                <span className="rounded-md bg-gray-200 px-2 py-1 text-sm text-gray-800">
                    {datatype}
                </span>
                {extensions.map((extension) => (
                    <span
                        key={extension}
                        className="rounded-md bg-gray-200 px-2 py-1 text-sm text-gray-800"
                    >
                        {extension}
                    </span>
                ))}
                <span className="rounded-md bg-gray-200 px-2 py-1 text-sm text-gray-800">
                    {data_size} bytes
                </span>
            </div>
            <div className="mt-4 flex space-x-2">
                <span className="rounded-md bg-green-500 px-2 py-1 text-sm text-white">
                    {payment}
                </span>
                <span className="rounded-md bg-gray-200 px-2 py-1 text-sm text-gray-800">
                    Deadline: {`${deadline}`}
                </span>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <img
                    className="h-8 w-8 rounded-full"
                    src={user.image}
                    alt={user.username}
                />
                <p className="text-gray-500">{user.username}</p>
            </div>
            <div className="flex items-center space-x-4 mt-4">
        <button
          className={`${
            hasUpvoted() ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
          } rounded-md px-2 py-1 text-sm`}
          onClick={handleUpvote}
        >
          ({requestPostState.upvoted_by.length})Upvote
        </button>
        <button
          className={`${
            hasdownvoted() ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
          } rounded-md px-2 py-1 text-sm`}
          onClick={handleDownvote}
        >
          ({requestPostState.downvoted_by.length}) Downvote
        </button>
      </div>
        </div>
    );
}
