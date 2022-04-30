import React, { useState } from "react";
import { mockComponent } from "react-dom/test-utils";
import "./VideoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

const VideoMetaData = () => {
    const [more, setMore] = useState(false);

    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        {numeral(10000).format("0.a")} Views
                        {moment("2020-06-6").fromNow()}
                    </span>

                    <div>
                        <span className="m-3">
                            <MdThumbUp size={26} />{" "}
                            {numeral(10000).format("0.a")}
                        </span>
                        <span className="mr-3">
                            <MdThumbDown size={26} />{" "}
                            {numeral(10000).format("0.a")}
                        </span>
                    </div>
                </div>
            </div>
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img
                        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                        alt=""
                        className="rounded-circle "
                    />

                    <div className="d-flex flex-column channel__desc">
                        <span>NerdySpook</span>
                        <span>{numeral(10000).format("0.a")} Subscribers</span>
                    </div>
                </div>
                <button className="btn border-0 p-2 m-2">Subscribe</button>
            </div>
            <div className={`videoMetaData__description ${more && "more"}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, voluptas. Natus, possimus velit exercitationem
                ducimus quibusdam accusantium ex, esse distinctio dicta nam
                sapiente odio excepturi! Quidem nemo impedit quae dolorum!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis quas, provident itaque sunt perspiciatis suscipit
                atque magnam, facilis recusandae hic ea odio eius ex, voluptas
                quidem facere ut dolores. Cum!
            </div>
            <div className="read-more" onClick={() => setMore((more) => !more)}>
                {more ? "Show less" : "show more"}
            </div>
        </div>
    );
};

export default VideoMetaData;
