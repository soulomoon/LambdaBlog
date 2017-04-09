import React, { Component } from 'react';
import './css/BlogTopBar.css'
import logo from '../../img/logo.svg';
import BlogTopBarGallery from './BlogTopBarGallery'

class BlogTopBar extends Component {
  render() {
    return (
      <div className="BlogTopBar">
        <BlogTopBarLogo/>  
        <BlogTopBarright/>
      </div>
    );
  }
}

const BlogTopBarLogo = () => {
  return (
      <div className="BlogTopBarLogo">
        <div className="BlogTopBarLogoContainer">  
          <img src={logo} alt="logo"/>
          <div className="item-overlay top"></div>
        </div>
      </div>
  );
};
const BlogTopBarright = () => {
  return (
    <div className="BlogTopBarright">
      <BlogTopBarrighttop />
      <BlogTopBarrightbottom />  
    </div>  
  )
};
const BlogTopBarrighttop = () => {
  return (
    <div className="BlogTopBarrighttop">
    </div>  
  )
};
const BlogTopBarrightbottom = () => {
  return (
    <div className="BlogTopBarrightbottom">
      <BlogTopBarGallery/>  
    </div>  
  )
};


export default BlogTopBar;
