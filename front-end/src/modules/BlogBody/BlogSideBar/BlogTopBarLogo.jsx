import React from 'react';
import logo from '../../../img/logo.svg';
import './css/BlogTopBarLogo.css';


const BlogTopBarLogo = () => {
  return (
        <div className="BlogTopBarLogoContainer">
          <img src={logo} alt="logo"/>
          <div className="item-overlay top"></div>
        </div>
  );
};

export default BlogTopBarLogo
