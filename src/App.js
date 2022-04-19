import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="app__container border border-info">
                <Sidebar />
                <Container fluid className="app__main border border-warning">
                    <Home />
                </Container>
            </div>
        </div>
    );
};

export default App;
