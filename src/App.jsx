import { useState } from 'react';
import Explore from '../pages/Explore';
import Search from '../pages/Search';
import Add from '../pages/Add';
import NavBar from '../components/NavBar';

export default function App() {
  const [content, setContent] = useState(<Explore />); // Default to explore

  const changeContent = (page) => {
    switch (page) {
      case 'search':
        setContent(<Search/>);
        break;
      case 'add':
        setContent(<Add/>);
        break;
      default:
        setContent(<Explore/>);
    }
  };

  return (
    <div>
      <NavBar>
        {{ content, changeContent }}
      </NavBar>
    </div>
  );
}