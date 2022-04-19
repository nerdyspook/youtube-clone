import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Categories from "../../components/Categories/Categories";
import Video from "../../components/Video/Video";
import "./Home.scss";

const Home = () => {
    return (
        <Container>
            <Categories />
            <Row>
                {[...new Array(20)].map(() => (
                    <Col lg={3} md={4}>
                        {" "}
                        <Video />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
