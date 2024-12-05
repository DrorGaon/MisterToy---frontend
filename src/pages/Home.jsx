import { AppHeader } from "../cmps/AppHeader.jsx";
import { ToyIndex } from "./ToyIndex.jsx";

export function Home(){
    return (
        <section className="home">
            <AppHeader />
            <ToyIndex />
        </section>
    )
}