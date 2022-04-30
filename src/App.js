import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import "./App.scss";
import { useState } from "react";
import Login from "./Pages/Login/Login";
import Search from "./Pages/Search/Search";
import { Routes, Route, Outlet } from "react-router-dom";
import Error from "./Pages/Error/Error";
import Watch from "./Pages/Watch/Watch";

const Layout = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <Header setShowNav={setShowNav} />
            <div className="app__container">
                <Sidebar show={showNav} setShowNav={setShowNav} />
                <Container fluid className="app__main">
                    <Outlet />
                </Container>
            </div>
        </>
    );
};

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="watch/:id" element={<Watch />} />
                </Route>
                <Route path="/auth" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};

export default App;
