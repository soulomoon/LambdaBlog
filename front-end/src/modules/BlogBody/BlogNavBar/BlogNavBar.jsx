import React, { Component } from 'react';
import BlogNavBarLogo from './BlogNavBarLogo'
import {
  NavLink,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Glyphicon } from 'react-bootstrap';
import './css/BlogNavBar.css';

class BlogNavBar extends Component {
  render() {
    const BlogNavBarItems = []

    BlogNavBarItems.push(
      <SidebarExtButton
        key="SidebarExtButton"
        sideToggle={this.props.sideToggle} />
    )
    this.props.names.forEach((name) => {
      BlogNavBarItems.push(
        <li key={"BlogNavBarItem" + name}>
          <NavLink className="BlogNavBarItem" to={name}>
            <span>{name.replace("/", "")}</span>
          </NavLink>
        </li>
      )
    })
    return (
      <div className="BlogNavBar">
        {/* <div className="BlogNavBarLogo"> */}
        <BlogNavBarLogo />
        {/* </div> */}
        <nav className="BlogNavBarItems">
          <ul>
            {BlogNavBarItems}
          </ul>
        </nav>
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
      <li key={"BlogNavBarItem" + name}>
        <NavLink className="SidebarExtButton" to="#" onClick={this.handleSideToggle}>
            <Glyphicon alt="align-justify" glyph="align-justify" />
        </NavLink>
      </li>
    );
  }
}

export {
  BlogNavBar as default,
  SidebarExtButton,
};
