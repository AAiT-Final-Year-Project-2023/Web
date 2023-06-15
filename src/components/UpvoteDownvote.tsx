import React, { useState } from 'react';
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
    upvoteCallback: () => void;
    downvoteCallback: () => void;
}

export default function UpvoteDownvoteComponent({ props }: { props: Props }) {
    const { count, isUpvoted, isDownvoted, upvoteCallback, downvoteCallback } =
        props;
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);
    const [voteCount, setVoteCount] = useState(count);

    const handleUpvote = () => {
        if (!upvoted && !downvoted) {
            setUpvoted(true);
            setVoteCount(voteCount + 1);
        } else if (!upvoted && downvoted) {
            setUpvoted(true);
            setDownvoted(false);
            setVoteCount(voteCount + 2);
        } else {
            setUpvoted(false);
            setVoteCount(voteCount - 1);
        }
        upvoteCallback();
    };

    const handleDownvote = () => {
        if (!upvoted && !downvoted) {
            setDownvoted(true);
            setVoteCount(voteCount - 1);
        } else if (upvoted && !downvoted) {
            setUpvoted(false);
            setDownvoted(true);
            setVoteCount(voteCount - 2);
        } else {
            setDownvoted(false);
            setVoteCount(voteCount + 1);
        }
        downvoteCallback();
    };

    return (
        <div className="flex flex-col items-center">
            <button className={`text-gray-400`} onClick={handleUpvote}>
                {upvoted ? (
                    <BiUpArrow className='hover:transition-all duration-150 ease-linear upvoteDownvoteIcon' fill="rgba(7, 104, 159, 1)" size={24} />
                ) : (
                    <BiUpArrow className='upvoteDownvoteIcon' size={24} />
                )}
            </button>
            <span className=" font-medium ">{voteCount}</span>
            <button className={`text-gray-400`} onClick={handleDownvote}>
                {downvoted ? (
                    <BiDownArrow className='upvoteDownvoteIcon' fill="rgba(7, 104, 159, 1)" size={24} />
                ) : (
                    <BiDownArrow className='upvoteDownvoteIcon' size={24} />
                )}
            </button>
        </div>
    );
}
