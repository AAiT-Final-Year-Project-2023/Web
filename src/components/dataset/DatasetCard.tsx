'use client';
import { Dataset, Me } from '@/common/types';
import { useState } from 'react';
import UpvoteDownvoteComponent from '../UpvoteDownvote';
import moment from 'moment';
import { ImDownload3 } from 'react-icons/im';
import { CiFloppyDisk } from 'react-icons/ci';
import { BsImage, BsFileText, BsCameraVideo } from 'react-icons/bs';
import { AiOutlineAudio } from 'react-icons/ai';
import { DATASET_URL, download, downvote, upvote } from '@/common/api/dataset';
import Cookies from 'js-cookie';

export default function DatasetCard({
    props,
}: {
    props: { dataset: Dataset; user: Me };
}) {
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
        user,
    } = datasetState;

    const { id: userId } = props.user;


        const hasUpvoted = (): boolean => {
       return datasetState.upvoted_by.some(upvote=> upvote.id === userId); 
    };

    const hasdownvoted = (): boolean => {
       return datasetState.downvoted_by.some(downvote => downvote.id === userId); 
    };

    const [isUpvoted, setIsUpvoted] = useState(hasUpvoted());
    const [isDownvoted, setIsDownvoted] = useState(hasdownvoted());

    const handleUpvote = async () => {
        const token = Cookies.get('datashelf_token') || '';
        const url = `${DATASET_URL}/${datasetState.id}/upvote`;
        const response:Dataset = await upvote(url, token);
        setDatasetState(response);
    };


    const handleDownvote = async () => {
        const token = Cookies.get('datashelf_token') || '';
        const url = `${DATASET_URL}/${datasetState.id}/downvote`;
        const response: Dataset = await downvote(url, token);
        setDatasetState(response);
    };

    const handleDownload = async () => {
        const token = Cookies.get('datashelf_token') || '';
        const url = `${DATASET_URL}/${datasetState.id}/download`;
        const blob = await download(url, token);
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = `${datasetState.title} (dataset).zip`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
    };



    const datatypeView = () => {
        if (datasetState.datatype === 'image') {
            return <BsImage />;
        } else if (datasetState.datatype === 'text') {
            return <BsFileText />;
        } else if (datasetState.datatype === 'video') {
            return <BsCameraVideo />;
        } else if (datasetState.datatype === 'audio') {
            return <AiOutlineAudio />;
        } else {
            <p>Unknown type</p>;
        }
    };

    return (
        <div className="flex gap-4 rounded-lg p-5 shadow-lg transition-all duration-150 ease-linear hover:rounded-none hover:shadow-2xl">
            <div>
                <UpvoteDownvoteComponent
                    props={{
                        count:
                            datasetState.upvoted_by.length +
                            datasetState.downvoted_by.length,
                        isUpvoted, 
                        isDownvoted,
                        setIsUpvoted,
                        setIsDownvoted,
                        downvoteCallback: handleDownvote,
                        upvoteCallback: handleUpvote,
                    }}
                />
            </div>
            <div className="">
                <div className="mb-2 flex items-center">
                    <div className="flex-shrink-0">
                        <div className="avatar ">
                            <div className="w-16 rounded">
                               { user.image && user.image !== "" ? <img
                                    src={`http://${process.env.backendHost}/uploads/profile_images/${datasetState.user.image}`}
                                    alt={`${datasetState.user.username}'s profile picture`}
                                />: <p className="h-full bg-green-200 text-lg leading-loose ">
                                        {user && user.username
                                            ? user.username.charAt(0)
                                            : ''}
                                    </p>} 
                            </div>
                        </div>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium">
                            {datasetState.user.username}
                        </p>
                        <p className="text-xs font-medium ">{`${moment(
                            datasetState.created_at,
                        ).fromNow()}`}</p>
                    </div>
                </div>
                <div className="mb-2">
                    <h1 className="prose mb-1 text-xl font-bold  ">
                        {datasetState.title}
                    </h1>
                    <p className="mb-2 text-sm">
                        {datasetState.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="text-base font-medium">Datatype: </p>
                        {datatypeView()}
                        {datasetState.datatype}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="text-base font-medium">Size: </p>
                        <CiFloppyDisk size={20} />
                        {(datasetState.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <p className="text-base font-medium">Labels: </p>
                        {datasetState.labels.map((label, index) => (
                            <div
                                key={index}
                                className="badge badge-info badge-outline p-3"
                            >
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="btn-neutral btn-outline btn-sm btn"
                    onClick={handleDownload}
                >
                    <ImDownload3 />
                    Download
                </button>
            </div>
        </div>
    );
}
