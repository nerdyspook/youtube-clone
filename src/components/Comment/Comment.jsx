import moment from "moment";
import React from "react";
import "./Comment.scss";

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img
                src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                alt=""
                className="rounded-circle avatar"
            />
            <div className="comment__body">
                <p className="comment__header mb-1">
                    NerdySpook • {moment("2020-05-05").fromNow()}
                </p>
                <p className="mb-0">Nice</p>
            </div>
        </div>
    );
};

export default Comment;
