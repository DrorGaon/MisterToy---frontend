import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { ToyIndex } from "./pages/ToyIndex.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";

export function RootCmp(){

    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/toys" element={<ToyIndex />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}