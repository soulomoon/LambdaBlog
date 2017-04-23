import React, { Component } from 'react';
import About from './BlogContent/About'
import Articals from './BlogContent/Articals'
import Contact from './BlogContent/Contact'
import Github from './BlogContent/Github'
import BlogContent from './BlogContent/BlogContent'
import BlogNavBar from './BlogNavBar/BlogNavBar'
// import RouteRender from '../HelperFunctions/RouteRender'
import './css/BlogBody.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
const routes = [
  {
    path: '/ABOUT',
    component: About
  },
  {
    path: '/ARTICLES',
    component: Articals
  },
  {
    path: '/CONTACT',
    component: Contact
  },
  {
    path: '/GITHUB',
    component: Github
  }
]

class BlogBody extends Component {
  render() {
    const sideToggle = this.props.sideToggle;
    const names = [];
    routes.forEach((route, i) => (
      names.push(route.path)
    ));
    return (
      <Router>
        <div className="BlogBody center">
          <Route exact path="/" render={() => (
            <Redirect to="/ARTICALS" />
          )} />
          <BlogNavBar names={names} sideToggle={sideToggle} />
          <BlogContent routes={routes} />
        </div>
      </Router>
    );
  }
}


export default BlogBody;
