import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(prev => !prev);
  };

  return (
    <div className='header-wrapper'>
      <div className='flexCenter paddings innerWidth header-container'>
        <h1>LOGO</h1>

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div
            className={`flexCenter header-menu ${menuOpened ? 'visible' : ''}`}
            style={{ right: menuOpened ? '0' : '-100%' }}
          >
            <a href=''>Residencies</a>
            <a href=''>Value</a>
            <a href=''>Get Started</a>
            <button className='button'>
              <a href=''>Contact US</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
