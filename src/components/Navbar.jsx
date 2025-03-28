import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
    <nav className="navbar justify-content-center" style={{backgroundColor: "#171717", borderRadius: "15px"}}>
        <div className="container d-flex justify-content-center">
            <Link to="/">
                <span className="navbar-brand mb-0 h1 text-center fs-1 text-white">Tus contactos</span>
            </Link>
        </div>
    </nav>
	);
};