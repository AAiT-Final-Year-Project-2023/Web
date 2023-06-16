'use client';
import { AudioLabel, ImageLabel, Me, RequestPost } from '@/common/types';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import moment from 'moment';
import UpvoteDownvoteComponent from '../UpvoteDownvote';
import { BsCameraVideo, BsFileText, BsImage } from 'react-icons/bs';
import { AiOutlineAudio } from 'react-icons/ai';
import { CiFloppyDisk } from 'react-icons/ci';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { ImDownload3 } from 'react-icons/im';
import { REQUEST_POST_URL, countContributions, diskUsage, download, downvote, get, upvote } from '@/common/api/requestPost';
import { useParams } from 'next/navigation';
import ImageAnnotatorComponent from '../annotators/ImageAnnotator';
import VideoAnnotatorComponent from '../annotators/VideoAnnotator';
import TextAnnotatorComponent from '../annotators/TextAnnotator';
import { AnnotateTag } from 'react-text-annotate-blend';
import AudioAnnotatorComponent from '../annotators/AudioAnnotator';

export default function RequestPostDetail({
    props,
}: {
    props: { token: string };
}) {
    const [requestPost, setRequestPost] = useState<RequestPost>();
    const [progress, setProgress] = useState<{ used: number, total: number }>();
    const [totalContributions, setTotalContributions] = useState<number>();
    const [acceptedContributions, setAcceptedContributions] = useState<number>();
    const [rejectedContributions, setRejectedContributions] = useState<number>();

    const params = useParams();
    const requestPostId = params.id;
    const url = `${REQUEST_POST_URL}/${requestPostId}`
    const token = props.token;


    useEffect(() => {
        get(url, token).then((requestPostData) => {
            setRequestPost(requestPostData);
        })
    }, [])


    const getContributions = async (stats: 'all' | 'pending' | 'accepted' | 'rejected'): Promise<number> => {
        const token = Cookies.get('datashelf-token') || '';
        const url = `${REQUEST_POST_URL}/${requestPostId}/contributionsCount?status=${stats}`;
        const totalcontributions = await countContributions(url, token);
        return totalcontributions;
    }

    const getProgress = async (): Promise<{ used: number, total: number }> => {
        const token = Cookies.get('datashelf-token') || '';
        const url = `${REQUEST_POST_URL}/${requestPostId}/diskUsage?status=accepted`;
        const diskUsageResponse: { used: number, total: number } = await diskUsage(url, token);
        return diskUsageResponse;
    }

    useEffect(() => {
        getProgress()
            .then(progress => setProgress(progress));

        getContributions('all')
            .then(contributions => setTotalContributions(contributions))

        getContributions('accepted')
            .then(contributions => setAcceptedContributions(contributions))

        getContributions('rejected')
            .then(contributions => setRejectedContributions(contributions))

    }, [])



    const datatypeView = () => {
        if (requestPost?.datatype === 'image') {
            return <BsImage />;
        } else if (requestPost?.datatype === 'text') {
            return <BsFileText />;
        } else if (requestPost?.datatype === 'video') {
            return <BsCameraVideo />;
        } else if (requestPost?.datatype === 'audio') {
            return <AiOutlineAudio />;
        } else {
            <p>Unknown type</p>;
        }
    };

    const contributeImage = (arg: ImageLabel[]) => {
        console.log(arg);
    }

    const contributeVideo = () => {

    }

    const contributeAudio = (args: AudioLabel[]) => {
        console.log(args);
    }

    const contributeText = (arg: AnnotateTag[]) => {
        console.log(arg);
    }


    return (
        <div>
            {
                !requestPost && <div className="flex w-full justify-center">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            }
            {
                requestPost &&
                <div className="flex gap-4 rounded-lg p-5 transition-all duration-150 ease-linear">
                    <div className="">
                        <div className="flex items-center justify-between">
                            <div className="mb-2 flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="avatar ">
                                        <div className="w-16 rounded">
                                            {requestPost.user?.image && requestPost.user.image !== '' ? (
                                                <img
                                                    src={requestPost.user.image.includes('googleusercontent') ?
                                                        requestPost.user.image :
                                                        `http://${process.env.backendHost}/uploads/profile_images/${requestPost.user.image}`}
                                                    alt={`${requestPost.user.username}'s profile picture`}
                                                />
                                            ) : (
                                                <p className="h-full bg-green-200 text-lg leading-loose ">
                                                    {requestPost?.user &&
                                                        requestPost.user.username
                                                        ? requestPost.user.username.charAt(
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
                                        {requestPost.user?.username}
                                    </p>
                                    <p className="text-xs font-medium ">{`${moment(
                                        requestPost.created_at,
                                    ).fromNow()}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <h1 className="mb-1 text-xl font-bold">
                                {requestPost.title}
                            </h1>
                            <div>
                                <h1 className='font-bold mb-1'>Description</h1>
                                <p className="mb-2 text-sm">
                                    {requestPost.description}
                                </p>
                            </div>
                            <div>
                                <h1 className='font-bold mb-1'>Guidlines</h1>
                                <p className="mb-2 text-sm">
                                    {requestPost.guidelines}
                                </p>
                            </div>
                            <div className='flex justify-between md:justify-normal md:gap-x-80 items-center flex-wrap'>
                                <div className='flex flex-col gap-2'>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-base font-medium">Payment: </p>
                                        <FaMoneyCheckAlt />
                                        {requestPost.payment}
                                    </div>
                                    {
                                        !requestPost.closed &&
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p className="text-base font-medium">Deadline: </p>
                                            <SlCalender />
                                            {moment(requestPost.deadline).format('lll')}
                                        </div>
                                    }
                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-base font-medium">Datatype: </p>
                                        {datatypeView()}
                                        {requestPost.datatype}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <p className="text-base font-medium">File extensions: </p>
                                        {requestPost.extensions?.map((extension, index) => (
                                            <div
                                                key={index}
                                                className="badge badge-warning badge-outline p-3"
                                            >
                                                {extension}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-base font-medium">Max requestPost size: </p>
                                        <CiFloppyDisk size={20} />
                                        {(requestPost.data_size / 1024 / 1024).toFixed(2)} MB
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <p className="text-base font-medium">Labels: </p>
                                        {requestPost.labels?.map((label, index) => (
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
                                        <div className="stats stats-vertical md:stats-horizontal shadow">

                                            <div className="stat">
                                                <div className="stat-title">Total Contributions</div>
                                                <div className="stat-value">{totalContributions}</div>
                                            </div>

                                            <div className="stat">
                                                <div className="stat-title">Accepted Contributions</div>
                                                <div className="stat-value">{acceptedContributions}</div>
                                            </div>

                                            <div className="stat">
                                                <div className="stat-title">Rejected Contributions</div>
                                                <div className="stat-value">{rejectedContributions}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-4 flex-wrap'>
                            <div>
                                {
                                    progress &&
                                    <div className='flex gap-4 items-center'>
                                        <p>Disk usage: </p>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": (progress.used / progress.total) * 100 }}>{(progress.used / progress.total) * 100}%</div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className='my-16'>
                <h1 className='text-4xl text-center font-bold my-5'>Contribute</h1>
                <div className=''>
                    {/* {
                        requestPost &&
                        <ImageAnnotatorComponent props={{ tags: requestPost.labels, maxFileSize: requestPost.data_size, initialAnnotations: [], supportedExtensions: ['jpg', 'png'], cb: contributeImage }} />
                    } */}

                    {/* {
                        requestPost &&
                        <TextAnnotatorComponent props={{ tags: requestPost.labels, max_file_size: requestPost.data_size, initial_annotations: [], supported_extensions: ['txt'], callback: contributeText }} />
                    } */}


                    {
                        requestPost?.datatype === "image" &&
                        <ImageAnnotatorComponent props={{ tags: requestPost.labels, maxFileSize: requestPost.data_size, initialAnnotations: [], supportedExtensions: requestPost.extensions, cb: contributeImage }} />
                    }
                    {
                        requestPost?.datatype === "text" &&
                        <TextAnnotatorComponent props={{ tags: requestPost.labels, max_file_size: requestPost.data_size, initial_annotations: [], supported_extensions: requestPost.extensions, callback: contributeText }} />
                    }
                    {
                        requestPost?.datatype === "audio" && 
                        <AudioAnnotatorComponent props={{ tags: requestPost.labels, maxFileSize: requestPost.data_size, initialAnnotations: [], supportedExtensions: requestPost.extensions, cb: contributeAudio}} />
                    }
                </div>
            </div>
        </div>

    )
        ;
}
