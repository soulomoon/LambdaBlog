import React, { Component } from 'react';
import RouteRender from '../../HelperFunctions/RouteRender'

class BlogContent extends Component {
  render() {
    return (
      <div className="BlogContent">
        <RouteRender routes={this.props.routes}/>
      </div>
    );
  }
}

export default BlogContent
