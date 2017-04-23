import React from 'react';
import logo from '../../../img/logo.svg';
import './css/BlogNavBarLogo.css';


const BlogNavBarLogo = () => {
  return (
        <div className="BlogNavBarLogo">
          <img src={logo} alt="logo" width="150" height="150"/>
          {/* <div className="item-overlay top"></div> */}
        </div>
  );
};

export default BlogNavBarLogo
