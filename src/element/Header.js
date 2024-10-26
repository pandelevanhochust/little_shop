import React, { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaAngleDown, FaLock } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import '../App.css';
import './Header.css';

const Menu = [
  { name: 'Home', link: '#' },
  { name: 'About us', link: '#' },
  { name: 'Our Projects', link: '#' },
  { name: 'Contact us', link: '#' }
];

const Our_products = [
  { name: 'Leather Handbags', link: '#' },
  { name: '3D-printing Handbags', link: '#' },
  { name: 'Backpacks', link: '#' },
  { name: 'Accessories', link: '#' },
  { name: 'HOAKAO Collection', link: '#' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="upperheader">
        <div className="logo">
          <a href="http://localhost:3000/" id="logo">
            <img src="./logo.jpg" alt="logo" />
            <div id="logo_text">HOAKAO</div>
          </a>
        </div>
        <div className="searchbar">
          <input type="text" name="searchbar" id="searchbar" placeholder='Find your item' />
          <IoIosSearch className="searchbar_icon" />
        </div>
        <div className="login_bar">
          <div className="login" id="log_up">
            <button className="login_button">
              <span>Sign up</span> <CgProfile className="login_icon" />
            </button>
          </div>
          <div className="login" id="sign_in">
            <button className="login_button">
              <span>Sign in</span> <FaLock className="login_icon" />
            </button>
          </div>
        </div>
      </div>
      <div className={`lowerheader ${isScrolled ? 'hide' : ''}`}>
        <ul className="Menu_list">
          <li className="Menu_name" id="Our_products">
            <div id="toggle">Our Products <FaAngleDown id="Our_products_icon" /></div>
            <div className="Our_products_toggle">
              <ul>
                {Our_products.map(item => (
                  <li key={item.name}>
                    <a href={item.link} className="Our_products_link">
                      <span className="Our_products_name">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {Menu.map(item => (
            <li key={item.name}>
              <a href={item.link} className="Menu_link">
                <span className="Menu_name">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
