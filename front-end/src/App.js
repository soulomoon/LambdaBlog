import React, { Component } from 'react';
import BlogBody from './modules/BlogBody/BlogBody'
// import BlogTopBar from './modules/BlogTopBar/BlogTopBar'
// import SidebarExt from './modules/BlogBody/BlogNavBar/BlogNavBar.jsx'
import Sidebar from 'react-sidebar'
import BlogSideBarContent from './modules/BlogBody/BlogNavBar/BlogSideBarContent.jsx'
// import logo from './img/logo.svg';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSetSidebarToggle = this.onSetSidebarToggle.bind(this);
    this.state = { sidebarOpen: false };
  }
  onSetSidebarToggle() {
    console.log("onSetSidebarToggle");
    if (this.state.sidebarOpen === false)
      this.setState({ sidebarOpen: true });
    else {
      this.setState({ sidebarOpen: false });
    }
  }
  render() {
    var MyBlogSideBarContent = <BlogSideBarContent sideToggle={this.onSetSidebarToggle}/>;
    return (
      <Sidebar
        sidebar={MyBlogSideBarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarToggle}>
        <BlogBody sideToggle={this.onSetSidebarToggle} />
      </Sidebar>
    );
  }
}



export default App;
