import React, { Component } from 'react';
import img1 from '/Users/soulomoon/git/playground/LambdaBlog/front-end/public/img/blog1.jpg'
import img2 from '/Users/soulomoon/git/playground/LambdaBlog/front-end/public/img/blog2.jpg'
import img3 from '/Users/soulomoon/git/playground/LambdaBlog/front-end/public/img/blog3.jpg'
import './css/BlogTopBarGallery.css'
const photoSource = [img1, img2, img3];

const BlogTopBarGalleryRow = () => {
  const photoitems = photoSource.map((source, index) => (
    <td key={source}>
      <img src={source} alt={source}/>  
      </td>
  ));
  console.log(photoSource);

  return (
    <tr>      
      {photoitems}
    </tr> 
  );
};
class BlogTopBarGallery extends Component {
  render() {
    console.log(photoSource);
    return (
      <div className="BlogTopBarGallery">
        <table>
          <BlogTopBarGalleryRow/>
        </table>  
      </div>
    );
  }
}




export default BlogTopBarGallery;