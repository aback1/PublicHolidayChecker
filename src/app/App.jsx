import MainLayout from "../common/MainLayout/MainLayout.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element=
                        <MainLayout />
                    />
                </Routes>
            </Router>

        </div>
    );
}