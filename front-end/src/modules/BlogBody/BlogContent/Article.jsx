import React, { Component } from 'react';

class Artical extends Component {
	render(){
		console.log("test");
		return (
			<div className="Artical" key={this.props.path}>
				<h1>{this.props.title}</h1>
				<p>{this.props.body}</p>
			</div>
		);
	}
}

export default Artical;

