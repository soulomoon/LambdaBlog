import React, { Component } from 'react';
import BlogBody from './modules/BlogBody/BlogBody'
// import BlogTopBar from './modules/BlogTopBar/BlogTopBar'
// import SidebarExt from './modules/BlogBody/BlogSideBar/BlogSideBar.jsx'
import Sidebar from 'react-sidebar'
import SidebarContent from './modules/BlogBody/BlogSideBar/SideBarContent.jsx'
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
    var sidebarContent = <SidebarContent sideToggle={this.onSetSidebarToggle}/>;
    return (
      <Sidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarToggle}>
        <div className="app-container">
          <BlogBody sideToggle={this.onSetSidebarToggle} />
        </div>>
      </Sidebar>
    );
  }
}



export default App;
