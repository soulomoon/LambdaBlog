import React, { Component } from 'react';
import Sidebar from 'react-sidebar'
import {
  NavLink,
} from 'react-router-dom'

class BlogSideBar extends Component {
  render() {
    const BlogSideBarItems = []
    BlogSideBarItems.push(
      <SidebarExtButton
        key={"BlogSideBarItem"+"SidebarExtButton"}
        sideToggle={this.props.sideToggle}/>
    )
    this.props.names.map((name) => {
        BlogSideBarItems.push(
          <li key={"BlogSideBarItem"+name}>
          <NavLink to={name}>
              {name.replace("/", "")}
          </NavLink>
          </li>
        )
    })

    return (
      <div className="BlogSideBar">
        <ul>
          {BlogSideBarItems}
        </ul>
      </div>
    );
  }
}

class SidebarExtButton extends Component {
  constructor() {
    super();
    this.handleSideToggle.bind(this);
  }
  handleSideToggle() {
    console.log(this.props);
    this.props.sideToggle();
  }

  render() {
    return (
          <li key={"BlogSideBarItem"+name}>
            <NavLink to="#" onClick={this.handleSideToggle}>
                test
            </NavLink>
          </li>
    );
  }
}

export {
  BlogSideBar as default,
  SidebarExtButton,
};
