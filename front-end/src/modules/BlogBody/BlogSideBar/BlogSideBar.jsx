import React, { Component } from 'react';
import BlogTopBarLogo from './BlogTopBarLogo'
import {
  NavLink,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Glyphicon } from 'react-bootstrap';
import './css/BlogSideBar.css';

class BlogSideBar extends Component {
  render() {
    const BlogSideBarItems = []

    BlogSideBarItems.push(
      <SidebarExtButton
        key="SidebarExtButton"
        sideToggle={this.props.sideToggle} />
    )
    this.props.names.forEach((name) => {
      BlogSideBarItems.push(
        <li key={"BlogSideBarItem" + name}>
          <NavLink to={name}>
            {name.replace("/", "")}
          </NavLink>
        </li>
      )
    })
    return (
      <div className="BlogSideBar">
        <div className="BlogTopBarLogo">
          <BlogTopBarLogo />
        </div>
        <div className="BlogSideBarItems">
          <ul>
            {BlogSideBarItems}
          </ul>
        </div>
      </div>
    );
  }
}

class SidebarExtButton extends Component {
  constructor(props) {
    super(props);
    this.handleSideToggle = this.handleSideToggle.bind(this);
  }
  handleSideToggle() {
    this.props.sideToggle();
  }
  render() {
    return (
      <li key={"BlogSideBarItem" + name}>
        <NavLink to="#" onClick={this.handleSideToggle}>
            <h4><Glyphicon alt="align-justify" glyph="align-justify" /></h4>
        </NavLink>
      </li>
    );
  }
}

export {
  BlogSideBar as default,
  SidebarExtButton,
};
