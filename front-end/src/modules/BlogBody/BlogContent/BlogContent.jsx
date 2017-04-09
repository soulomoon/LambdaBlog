import React, { Component } from 'react';
import RouteRender from '../../HelperFunctions/RouteRender'
import BlogContentTopBar from './BlogContentTopBar'
import './css/BlogContent.css'
class BlogContent extends Component {
  render() {
    return (
      <div className="BlogContent">
        <BlogContentTopBar />
        <div className="BlogContentMain">
          <RouteRender routes={this.props.routes} />
        </div>
      </div>
    );
  }
}

export default BlogContent
