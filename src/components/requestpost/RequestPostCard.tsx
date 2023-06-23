'use client';
import { Me, RequestPost } from '@/common/types';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import moment from 'moment';
import UpvoteDownvoteComponent from '../UpvoteDownvote';
import { BsCameraVideo, BsFileText, BsImage } from 'react-icons/bs';
import { AiOutlineAudio } from 'react-icons/ai';
import { CiFloppyDisk } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';
import { ImDownload3 } from 'react-icons/im';
import {
    REQUEST_POST_URL,
    countContributions,
    diskUsage,
    download,
    downvote,
    upvote,
} from '@/common/api/requestPost';
import Link from 'next/link';
import { showErrorAlert } from '@/common/functions';
import { FaMoneyCheckAlt } from 'react-icons/fa';

export default async function RequestPostCard({
    props,
}: {
    props: { requestPost: RequestPost; user: Me };
}) {
    const [requestPostState, setRequestPostState] = useState<RequestPost>(
        props.requestPost,
    );
    const [progress, setProgress] = useState<{ used: number; total: number }>();
    const [totalContributions, setTotalContributions] = useState<number>();
    const [acceptedContributions, setAcceptedContributions] =
        useState<number>();
    const [rejectedContributions, setRejectedContributions] =
        useState<number>();

    const {
        id: requestPostId,
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
        access,
        updated_at,
        user,
        payment_plan,
        upvoted_by,
        downvoted_by,
    } = requestPostState;

    const { id: userId } = props.user;

    const getContributions = async (
        stats: 'all' | 'pending' | 'accepted' | 'rejected',
    ): Promise<number> => {
        const token = Cookies.get('datashelf-token') || '';
        const url = `${REQUEST_POST_URL}/${requestPostState.id}/contributionsCount?status=${stats}`;
        const totalcontributions = await countContributions(url, token);
        return totalcontributions;
    };

    const getProgress = async (): Promise<{ used: number; total: number }> => {
        const token = Cookies.get('datashelf-token') || '';
        const url = `${REQUEST_POST_URL}/${requestPostState.id}/diskUsage?status=accepted`;
        const diskUsageResponse: { used: number; total: number } =
            await diskUsage(url, token);
        return diskUsageResponse;
    };

    useEffect(() => {
        getProgress().then((progress) => setProgress(progress));

        getContributions('all').then((contributions) =>
            setTotalContributions(contributions),
        );

        getContributions('accepted').then((contributions) =>
            setAcceptedContributions(contributions),
        );

        getContributions('rejected').then((contributions) =>
            setRejectedContributions(contributions),
        );
    }, []);

    const handleDownload = async () => {
        const token = Cookies.get('datashelf_token') || '';
        const url = `${REQUEST_POST_URL}/${requestPostState.id}/download`;
        const response = await download(url, token);
        if (!response.ok) {
            showErrorAlert(response.statusText, document);
            return;
        }
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.setAttribute(
            'download',
            `${requestPostState.title} (request post).zip`,
        );
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
    };

    const hasUpvoted = (): boolean => {
        return requestPostState.upvoted_by.some(
            (upvote) => upvote.id === userId,
        );
    };

    const hasdownvoted = (): boolean => {
        return requestPostState.downvoted_by.some(
            (downvote) => downvote.id === userId,
        );
    };

    const [isUpvoted, setIsUpvoted] = useState(hasUpvoted());
    const [isDownvoted, setIsDownvoted] = useState(hasdownvoted());

    const handleUpvote = async () => {
        const token = Cookies.get('datashelf_token') || '';
        const url = `${REQUEST_POST_URL}/${requestPostState.id}/upvote`;
        const updatedRequestPost = await upvote(url, token);
        setRequestPostState(updatedRequestPost);
    };

    const handleDownvote = async () => {
        const token = Cookies.get('datashelf_token') || '';
        const url = `${REQUEST_POST_URL}/${requestPostState.id}/downvote`;
        const updatedRequestPost = await downvote(url, token);
        setRequestPostState(updatedRequestPost);
    };

    const datatypeView = () => {
        if (requestPostState.datatype === 'image') {
            return <BsImage />;
        } else if (requestPostState.datatype === 'text') {
            return <BsFileText />;
        } else if (requestPostState.datatype === 'video') {
            return <BsCameraVideo />;
        } else if (requestPostState.datatype === 'audio') {
            return <AiOutlineAudio />;
        } else {
            <p>Unknown type</p>;
        }
    };

    return (
        <div className="flex gap-4 rounded-lg p-5 shadow-lg transition-all duration-150 ease-linear hover:rounded-none hover:shadow-2xl">
            {requestPostState.closed && (
                <div>
                    <UpvoteDownvoteComponent
                        props={{
                            count:
                                requestPostState.upvoted_by.length +
                                requestPostState.downvoted_by.length,
                            isUpvoted,
                            isDownvoted,
                            setIsUpvoted,
                            setIsDownvoted,
                            downvoteCallback: handleDownvote,
                            upvoteCallback: handleUpvote,
                        }}
                    />
                </div>
            )}
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="mb-2 flex items-center">
                        <div className="flex-shrink-0">
                            <div className="avatar ">
                                <div className="w-16 rounded">
                                    {user.image && user.image !== '' ? (
                                        <img
                                            src={
                                                user.image.includes(
                                                    'googleusercontent',
                                                )
                                                    ? user.image
                                                    : `http://${process.env.backendHost}/uploads/profile_images/${requestPostState.user.image}`
                                            }
                                            alt={`${user.username}'s profile picture`}
                                        />
                                    ) : (
                                        <p className="h-full bg-green-200 text-lg leading-loose ">
                                            {requestPostState.user &&
                                            requestPostState.user.username
                                                ? requestPostState.user.username.charAt(
                                                      0,
                                                  )
                                                : ''}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium">
                                {requestPostState.user.username}
                            </p>
                            <p className="text-xs font-medium ">{`${moment(
                                requestPostState.created_at,
                            ).fromNow()}`}</p>
                        </div>
                    </div>
                    <div>
                        {requestPostState.closed ? (
                            <div className="badge badge-warning">Closed</div>
                        ) : (
                            <div className="badge badge-success">Open</div>
                        )}
                    </div>
                </div>
                <div className="mb-2 flex flex-col gap-2">
                    <h1 className="mb-1 text-xl font-bold">
                        {requestPostState.title}
                    </h1>
                    <div>
                        <h1 className="mb-1 font-bold">Description</h1>
                        <p className="mb-2 text-sm">
                            {requestPostState.description}
                        </p>
                    </div>
                    <div>
                        <h1 className="mb-1 font-bold">Guidlines</h1>
                        <p className="mb-2 text-sm">
                            {requestPostState.guidelines}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between md:justify-normal md:gap-x-80">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <p className="text-base font-medium">
                                    Payment:{' '}
                                </p>
                                <FaMoneyCheckAlt />
                                {requestPostState.payment}
                            </div>
                            {!requestPostState.closed && (
                                <div className="flex flex-wrap items-center gap-2">
                                    <p className="text-base font-medium">
                                        Deadline:{' '}
                                    </p>
                                    <SlCalender />
                                    {moment(requestPostState.deadline).format(
                                        'lll',
                                    )}
                                </div>
                            )}
                            <div className="flex flex-wrap items-center gap-2">
                                <p className="text-base font-medium">
                                    Datatype:{' '}
                                </p>
                                {datatypeView()}
                                {requestPostState.datatype}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <p className="text-base font-medium">
                                    File extensions:{' '}
                                </p>
                                {requestPostState.extensions.map(
                                    (extension, index) => (
                                        <div
                                            key={index}
                                            className="badge badge-warning badge-outline p-3"
                                        >
                                            {extension}
                                        </div>
                                    ),
                                )}
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                                <p className="text-base font-medium">
                                    Max data size:{' '}
                                </p>
                                <CiFloppyDisk size={20} />
                                {(
                                    requestPostState.data_size /
                                    1024 /
                                    1024
                                ).toFixed(2)}{' '}
                                MB
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <p className="text-base font-medium">
                                    Labels:{' '}
                                </p>
                                {requestPostState.labels.map((label, index) => (
                                    <div
                                        key={index}
                                        className="badge badge-info badge-outline p-3"
                                    >
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-3">
                                <div className="stats stats-vertical shadow md:stats-horizontal">
                                    <div className="stat">
                                        <div className="stat-title">
                                            Total Contributions
                                        </div>
                                        <div className="stat-value">
                                            {totalContributions}
                                        </div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title">
                                            Accepted Contributions
                                        </div>
                                        <div className="stat-value">
                                            {acceptedContributions}
                                        </div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title">
                                            Rejected Contributions
                                        </div>
                                        <div className="stat-value">
                                            {rejectedContributions}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap items-center gap-4">
                        {requestPostState.user.id === userId && (
                            <Link
                                className="btn-success btn-outline btn"
                                href={`requestposts/${requestPostState.id}}/`}
                            >
                                {' '}
                                See contributions{' '}
                            </Link>
                        )}

                        {requestPostState.closed && (
                            <button
                                className="btn-info btn-outline btn-sm btn"
                                onClick={handleDownload}
                            >
                                <ImDownload3 />
                                Download
                            </button>
                        )}

                        {!requestPostState.closed &&
                            requestPostState.user.id !== userId && (
                                <Link
                                    className="btn-success btn-outline btn"
                                    href={`requestposts/${requestPostState.id}/contribute`}
                                >
                                    {' '}
                                    Contribute{' '}
                                </Link>
                            )}
                    </div>
                    <div>
                        {userId === requestPostState.user.id && progress && (
                            <div className="flex items-center gap-4">
                                <p>Disk usage: </p>
                                <div className="flex flex-wrap items-center gap-2">
                                    <div
                                        className="radial-progress border-4 border-primary bg-primary text-primary-content"
                                        style={{
                                            '--value':
                                                (progress.used /
                                                    progress.total) *
                                                100,
                                        }}
                                    >
                                        {(progress.used / progress.total) * 100}
                                        %
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
