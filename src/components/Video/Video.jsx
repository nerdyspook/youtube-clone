import React from "react";
import "./Video.scss";

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img
                    src="https://i.ytimg.com/vi/CHSnz0bCaUk/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDpGpbVz4_eJQddh_hNCbwOKrJXUA"
                    alt=""
                />
                <span>01:30</span>
            </div>
            <div className="video__title">
                Create app in 1hr 30mins # made by anonymous
            </div>
            <div className="video__details">
                <span>5M views </span>•<span> 69 days ago</span>
            </div>
            <div className="video__channel">
                <img
                    src="https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s68-c-k-c0x00ffffff-no-rj"
                    alt=""
                />
                <p>NerdySpook</p>
            </div>
        </div>
    );
};

export default Video;
