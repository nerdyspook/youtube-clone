import React from "react";
import Comment from "../Comment/Comment";
import "./Comments.scss";

const Comments = () => {
    const handleComment = () => {};

    return (
        <div className="comments">
            <p>1 2 3 4 </p>
            <div className="comments__form d-flex w-100 my-2">
                <img
                    src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    alt=""
                    className="rounded-circle avatar"
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input
                        type="text"
                        className="flex-grow-1"
                        placeholder="Write a comment"
                    />

                    <button className="border-0 p-2">Comment</button>
                </form>
            </div>

            <div className="comments__list">
                {[...Array(15)].map(() => (
                    <Comment />
                ))}
            </div>
        </div>
    );
};

export default Comments;
