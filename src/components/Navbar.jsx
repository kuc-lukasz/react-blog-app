import { NavLink } from "react-router-dom";
import { Nav } from "../styles/styles.jsx";
export const Navbar = () => {
    return (
        <Nav className="navbar">
            <h1>Luka Blog</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create blog</NavLink>
            </div>
        </Nav>
    );
};
