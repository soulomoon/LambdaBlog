import React, { Component } from 'react';
import img1 from '../../../img/blog1.jpg'
import img2 from '../../../img/blog2.jpg'
import img3 from '../../../img/blog3.jpg'
import './css/BlogArticlesTopBar.css'

const photoSource = [img1, img2, img3];

const BlogArticlesTopBar = () => {
  return (
    <div className="BlogArticlesTopBar">
      <ArticlesTopBarGallery />
    </div>
  );
};

const photoitems = photoSource.map((source, index) => (
  <div className="ImgContainer" key={source}>
    <img src={source} alt={source} height="150" width="150"/>
  </div>
));

const BlogArticleGalleryRow = () => {
  return (
    <div className="BlogArticleGalleryRow">
      {photoitems}
    </div>
  );
};

const ArticlesTopBarGallery = () => {
  return (
    <div className="ArticlesTopBarGallery">
      <BlogArticleGalleryRow />
    </div>
  );
};

export default BlogArticlesTopBar;
