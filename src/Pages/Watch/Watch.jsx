import React from "react";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../components/VideoMetaData/VideoMetaData";
import "./Watch.scss";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";
import Comments from "../../components/Comments/Comments";

const Watch = () => {
    return (
        <Row>
            <Col lg={8}>
                <div className="watch__player">
                    <iframe
                        title="myvideo"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        frameBorder="0"
                        allowFullScreen
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>

                <VideoMetaData />
                <Comments />
            </Col>
            <Col lg={4}>
                {[...Array(10)].map(() => (
                    <VideoHorizontal />
                ))}
            </Col>
        </Row>
    );
};

export default Watch;
