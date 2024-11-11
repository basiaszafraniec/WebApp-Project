import { Link, useLocation } from 'react-router-dom';  // Import necessary hooks and components from React Router
import "../styles/nav-bar.css";  // Import the CSS for styling the NavBar component

export default function NavBar() {
    const location = useLocation();  // useLocation hook allows access to the current URL's pathname

    // Function to determine the icon source based on the current page
    const getIconSrc = (page) => {
        return location.pathname === `/${page === 'explore' ? '' : page}`
            ? `/${page}-Icon-filled.png`  // If the current page matches the passed page, use the filled icon
            : `/${page}-Icon.png`;  // Otherwise, use the default icon
    };
    
    return (
        <div className="nav-bar">
            {/* Navigation buttons for each page with dynamic icon source */}
            <Link to="/" className="nav-btn">
                <img src={getIconSrc('explore')} alt="explore icon" />  {/* Icon for Explore page */}
            </Link>
            <Link to="/search" className="nav-btn">
                <img src={getIconSrc('search')} alt="search icon" />  {/* Icon for Search page */}
            </Link>
            <Link to="/add" className="nav-btn">
                <img src={getIconSrc('add')} alt="add icon" />  {/* Icon for Add page */}
            </Link>
            <Link to="/inbox" className="nav-btn">
                <img src={getIconSrc('inbox')} alt="inbox icon" />  {/* Icon for Inbox page */}
            </Link>
            <Link to="/profile" className="nav-btn">
                <img src={getIconSrc('profile')} alt="user icon" />  {/* Icon for Profile page */}
            </Link>
        </div>
    );
}
