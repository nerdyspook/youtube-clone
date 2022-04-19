import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import "./App.scss";
import { useState } from "react";

const App = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="App">
            <Header setShowNav={setShowNav} />
            <div className="app__container">
                <Sidebar show={showNav} setShowNav={setShowNav} />
                <Container fluid className="app__main">
                    <Home />
                </Container>
            </div>
        </div>
    );
};

export default App;
