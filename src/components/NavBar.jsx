
import { Link, useLocation } from 'react-router-dom';
import "../styles/nav-bar.css";

export default function NavBar() {
    const location = useLocation();

    const getIconSrc = (page) => {
        return location.pathname === `/${page === 'explore' ? '' : page}`
            ? `/${page}-Icon-filled.png`
            : `/${page}-Icon.png`;
    };
    
    return (
        <div className="nav-bar">
            <Link to="/" className="nav-btn">
                <img src={getIconSrc('explore')} alt="explore icon" />
            </Link>
            <Link to="/search" className="nav-btn">
                <img src={getIconSrc('search')} alt="search icon" />
            </Link>
            <Link to="/add" className="nav-btn">
                <img src={getIconSrc('add')} alt="add icon" />
            </Link>
            <Link to="/inbox" className="nav-btn">
                <img src={getIconSrc('inbox')} alt="inbox icon" />
            </Link>
            <Link to="/profile" className="nav-btn">
                <img src={getIconSrc('profile')} alt="user icon" />
            </Link>
        </div>
    );
}
