import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Search from './pages/Search';
import Add from './pages/Add';
import NavBar from './components/NavBar';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';
import PostDetail from './pages/PostDetail'; // Import the PostDetail component

export default function App() {
    return (
        <Router>
            <div className='main'>
                <div className="content-area">
                    <Routes>
                        <Route path="/" element={<Explore />} /> {/* Default route */}
                        <Route path="/search" element={<Search />} />
                        <Route path="/add" element={<Add />} />
                        <Route path="/inbox" element={<Inbox />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/post/:postId" element={<PostDetail />} /> {/* Detail page for individual posts */}
                    </Routes>
                </div>
                <NavBar />
            </div>
        </Router>
    );
}
