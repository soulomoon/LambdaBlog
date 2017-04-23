import React, { Component } from 'react';
import BlogArticalsTopBar from './BlogArticalsTopBar'

const pages = 
[
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new"
	},
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new"
	},
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new"
	},
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new"
	}
];

class Articals extends Component {
  render() {
    return (
      <div className="BlogContentMain" key="artical">
        <BlogArticalsTopBar />
				<ArticalsContent/>
      </div>
    );
  }
}

class ArticalsContent extends Component {
	render() {
		const ArticalRows = pages.map((artical) => (
			<div className="ArticalItem">
				<h1>{artical.title}</h1>
				<p>{artical.body}</p>
			</div>
		)); 
		return (
			<div className="ArticalsContent">
				{ArticalRows}
			</div>	
		)
	}
} 

    export default Articals;
