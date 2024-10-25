import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className="header">
      <div className = "upperheader" >
        <div className="logo">
          <a href="http://localhost:3000/">
            <img src= "little_shop\src\assets\logo.jpg" alt="logo" />
          </a>
        </div>
        <div className= "searchbar">
          <input type="text" name="searchbar" id="searchbar" placeholder='Find your item ' />
        </div>
        <div className = "login_bar"></div>
      </div>

      <div className = "lowerheader">

      </div>
    </div>
  );
};

export default Header;
