import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button  className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;