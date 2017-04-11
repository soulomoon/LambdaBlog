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
          <NavLink className="BlogSideBarItem" to={name}>
            <span>{name.replace("/", "")}</span>
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
        <NavLink className="SidebarExtButton" to="#" onClick={this.handleSideToggle}>
            <Glyphicon alt="align-justify" glyph="align-justify" />
        </NavLink>
      </li>
    );
  }
}

export {
  BlogSideBar as default,
  SidebarExtButton,
};
