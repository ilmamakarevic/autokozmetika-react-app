import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="container py-5">
        <nav className="nav align-items-center">
            <a className="me-5" href="index.html">
                <img src="images/logo.png" alt="logo" />
            </a>
            <Link to="/" className="nav-link">Home</Link>
            <Link href="" className="nav-link">Shop</Link>
            <Link to="/products" className="nav-link">Products</Link>
        </nav>
     </footer>
    );
}; 

export default Footer;