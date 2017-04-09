import React, { Component } from 'react';
import img1 from '~/front-end/public/img/blog1.jpg'
import img2 from '~/front-end/public/img/blog2.jpg'
import img3 from '~/front-end/public/img/blog3.jpg'
import './css/BlogTopBarGallery.css'

const photoSource = [img1, img2, img3];
class BlogContentTopBar extends Component {
  render() {
    return (
      <div className="BlogContentTopBar">
        <BlogTopBarGallery/>
      </div>
    );
  }
}

const BlogTopBarGalleryRow = () => {
  const photoitems = photoSource.map((source, index) => (
    <div className="ImgContainer" key={source}>
      <img src={source} alt={source}/>
    </div>
  ));
  console.log(photoSource);

  return (
    <div className="BlogTopBarGalleryRow">
      {photoitems}
    </div>
  );
};

class BlogTopBarGallery extends Component {
  render() {
    console.log(photoSource);
    return (
      <div className="BlogTopBarGallery">
        <BlogTopBarGalleryRow/>
      </div>
    );
  }
}

export default BlogContentTopBar;
