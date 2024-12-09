import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { ToyIndex } from "./pages/ToyIndex.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { About } from "./pages/About.jsx";
import { ToyEdit } from "./pages/ToyEdit.jsx";

export function RootCmp(){

    return (
        <Router>
            <section className="app main-layout">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/toys" element={<ToyIndex />} />
                        <Route path="/toys/edit" element={<ToyEdit />} />
                        <Route path="/toys/edit/:toyId" element={<ToyEdit />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}