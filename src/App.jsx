import { useState } from 'react';
import Explore from '../pages/Explore';
import Search from '../pages/Search';
import Add from '../pages/Add';
import NavBar from '../components/NavBar';
import Inbox from '../pages/Inbox';
import Profile from '../pages/Profile';

export default function App() {
  const [content, setContent] = useState(<Explore />); // Default to explore
  const [activePage, setActivePage] = useState('explore'); // Track active page

  const changeContent = (page) => {
    setActivePage(page); // Update active page state
    switch (page) {
      case 'search':
        setContent(<Search />);
        break;
      case 'add':
        setContent(<Add />);
        break;
      case 'inbox':
        setContent(<Inbox />);
        break;
      case 'profile':
        setContent(<Profile />);
        break;
      default:
        setContent(<Explore />);
    }
  };

  return (
    <div className='main'>
      <div className="content-area">
        {content}
      </div>
      <NavBar changeContent={changeContent} activePage={activePage} />
    </div>
  );
}