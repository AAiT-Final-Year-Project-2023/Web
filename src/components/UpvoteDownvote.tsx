import React, { Dispatch, SetStateAction, useState } from 'react';
import {
    BiDownArrow,
    BiDownArrowAlt,
    BiUpArrow,
    BiUpArrowAlt,
    BiUpvote,
} from 'react-icons/bi';

interface Props {
    count: number;
    isUpvoted: boolean;
    isDownvoted: boolean;
    setIsUpvoted: Dispatch<SetStateAction<boolean>>;
    setIsDownvoted: Dispatch<SetStateAction<boolean>>;
    upvoteCallback: () => void;
    downvoteCallback: () => void;
}

export default function UpvoteDownvoteComponent({ props }: { props: Props }) {
    const {
        count,
        isUpvoted,
        isDownvoted,
        setIsUpvoted,
        setIsDownvoted,
        upvoteCallback,
        downvoteCallback,
    } = props;
    const [voteCount, setVoteCount] = useState(count);

    const handleUpvote = () => {
        if (!isUpvoted && !isDownvoted) {
            setIsUpvoted(true);
            setVoteCount(voteCount + 1);
        } else if (!isUpvoted && isDownvoted) {
            setIsUpvoted(true);
            setIsDownvoted(false);
            setVoteCount(voteCount + 2);
        } else {
            setIsUpvoted(false);
            setVoteCount(voteCount - 1);
        }
        upvoteCallback();
    };

    const handleDownvote = () => {
        if (!isUpvoted && !isDownvoted) {
            setIsDownvoted(true);
            setVoteCount(voteCount - 1);
        } else if (isUpvoted && !isDownvoted) {
            setIsUpvoted(false);
            setIsDownvoted(true);
            setVoteCount(voteCount - 2);
        } else {
            setIsDownvoted(false);
            setVoteCount(voteCount + 1);
        }
        downvoteCallback();
    };

    return (
        <div className="flex flex-col items-center">
            <button className={`text-gray-400`} onClick={handleUpvote}>
                {isUpvoted ? (
                    <BiUpArrow
                        className="upvoteDownvoteIcon duration-150 ease-linear hover:transition-all"
                        fill="rgba(7, 104, 159, 1)"
                        size={24}
                    />
                ) : (
                    <BiUpArrow className="upvoteDownvoteIcon" size={24} />
                )}
            </button>
            <span className=" font-medium ">{voteCount}</span>
            <button className={`text-gray-400`} onClick={handleDownvote}>
                {isDownvoted ? (
                    <BiDownArrow
                        className="upvoteDownvoteIcon"
                        fill="rgba(7, 104, 159, 1)"
                        size={24}
                    />
                ) : (
                    <BiDownArrow className="upvoteDownvoteIcon" size={24} />
                )}
            </button>
        </div>
    );
}
