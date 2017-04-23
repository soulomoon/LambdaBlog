import React, { Component } from 'react';
import img1 from '../../../img/blog1.jpg'
import img2 from '../../../img/blog2.jpg'
import img3 from '../../../img/blog3.jpg'
import './css/BlogArticalsTopBar.css'

const photoSource = [img1, img2, img3];

const BlogArticalsTopBar = () => {
  return (
    <div className="BlogArticalsTopBar">
      <ArticalsTopBarGallery />
    </div>
  );
};

const photoitems = photoSource.map((source, index) => (
  <div className="ImgContainer" key={source}>
    <img src={source} alt={source}/>
  </div>
));

const BlogArticalGalleryRow = () => {
  return (
    <div className="BlogArticalGalleryRow">
      {photoitems}
    </div>
  );
};

const ArticalsTopBarGallery = () => {
  return (
    <div className="ArticalsTopBarGallery">
      <BlogArticalGalleryRow />
    </div>
  );
};

export default BlogArticalsTopBar;
