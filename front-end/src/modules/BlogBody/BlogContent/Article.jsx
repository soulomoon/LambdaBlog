import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'; 
class Artical extends Component {
	render(){
		console.log("test");
		return (
			<div className="Artical" key={this.props.post.path}>
				<ReactMarkdown source={this.props.post.body}/>
			</div>
		);
	}
}

export default Artical;

