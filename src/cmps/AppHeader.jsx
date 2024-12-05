import { NavLink } from "react-router-dom";


export function AppHeader(){


    return (
        <section className="app-header main-layout full">
            <h1>Mister Toy</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/toys">Catalog</NavLink>
            </nav>
        </section>
    )
}