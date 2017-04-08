import React, { Component } from 'react';
import BlogBody from './modules/BlogBody/BlogBody'
import BlogTopBar from './modules/BlogTopBar/BlogTopBar'
// import SidebarExt from './modules/BlogBody/BlogSideBar/BlogSideBar.jsx'
import Sidebar from 'react-sidebar'

// import logo from './img/logo.svg';
import './css/App.css';

// console.log(jsons);

// class App extends Component {
//   render() {
//     return (
//       <div className="app-container">
//         <BlogTopBar/>
//         <BlogBody/>
//       </div>
//     );
//   }
// }

var App = React.createClass({
  getInitialState: function() {
    return {sidebarOpen: true};
  },

  onSetSidebarToggle: function() {
    console.log("onSetSidebarToggle");
    if (this.state.sidebarOpen===false)
      this.setState({sidebarOpen: true});
    else {
      this.setState({sidebarOpen: false});
    }
  },

  render: function() {
    var sidebarContent = <b>Sidebar content</b>;

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarToggle}>
        <BlogTopBar/>
        <BlogBody sideToggle={this.onSetSidebarToggle}/>
      </Sidebar>
    );
  }
});


export default App;
