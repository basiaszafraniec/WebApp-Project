export default function NavBar({ children }) {
    return (
        <div>
            <nav>
                <button className="nav-btn" onClick={() => children.changeContent('explore')}>explore</button>
                <button className="nav-btn" onClick={() => children.changeContent('search')}>search</button>
                <button className="nav-btn" onClick={() => children.changeContent('add')}>add</button>
            </nav>
            {children.content}
        </div>
    );
};