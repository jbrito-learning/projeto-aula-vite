import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                Frontend II
            </div>
            <nav className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}

export default Navbar;