import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Luka Blog</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create blog</NavLink>
            </div>
        </nav>
    );
};
