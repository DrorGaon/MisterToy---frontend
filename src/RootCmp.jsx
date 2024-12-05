import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";

export function RootCmp(){

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}