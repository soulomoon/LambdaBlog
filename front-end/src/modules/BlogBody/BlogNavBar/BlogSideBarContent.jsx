import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { NavItem, Nav } from 'react-bootstrap';
import './css/BlogSideBarContent.css';

class BlogSideBarContent extends Component {
  render() {
    return (
      <div className="BlogSideBarContent">
        <CloseSign sideToggle={this.props.sideToggle}/>
        <WelcomeWords />
        <div className="SideBarlogo"></div>
      </div>
    );
  }
}

class CloseSign extends Component {
  constructor(props) {
    super(props);
    this.handleSideToggle = this.handleSideToggle.bind(this);
  }
  handleSideToggle() {
    this.props.sideToggle();
  }
  render() {
    return (
      <div className="CloseSign">
        <Nav>
          <NavItem
            onClick={this.handleSideToggle}>
            <span>
              <Glyphicon glyph="chevron-left" />
              {/* Going Back */}
            </span>
        </NavItem>
        </Nav>
      </div>
    );
  }
}

const WelcomeWordsList = ["Welcome", "to", "Lambda"];

class WelcomeWords extends Component {
  render() {
    const WelcomeWords = WelcomeWordsList.map((word, index) => (
      <p key={word}>{word}</p>
    ));
    return (
      <p className="WelcomeWords">
        {WelcomeWords}
      </p>
    );
  }
}

export default BlogSideBarContent;
