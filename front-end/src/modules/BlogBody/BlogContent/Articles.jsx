import React, { Component } from 'react';
import BlogArticlesTopBar from './BlogArticlesTopBar'
import Article from './Article.jsx'
import ReactMarkdown from 'react-markdown'; 
import {
  Link,
  Route,
} from 'react-router-dom'

const posts = 
[
	{
		title: "this is the title",
		body: "# planning \n \n a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new",
		createTime: "2017/3/15",
		path: "/ARTICLE/1"
	},
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new",
		createTime: "2017/3/15",
		path: "/ARTICLE/2"

	},
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new",
		createTime: "2017/3/15",
		path: "/ARTICLE/3"
	},
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new",
		createTime: "2017/3/15",
		path: "/ARTICLE/4"
	}
];

class ArticlesNav extends Component {
	render() {
		return (
				<div className="ArticlesNav">
					<BlogArticlesTopBar />
					<ArticalList/>
				</div>
		);
	}
}

class Articles extends Component {
	render() {
		const ArticleNavRoute = () => (
			<Route path="/ARTICLE" component={ArticlesNav} key="ArticlesNav"/>
		);
		const ArticleRoutes = posts.map((post) => 
			(
				<Route path={post.path} 
					render={() => <Article post={post}/>}
					key={post.path}/>
		));
		ArticleRoutes.push(<ArticleNavRoute key="ArticleNavRoute"/>);
		return (
					<div className="BlogContentMain" key="articals">
						{ArticleRoutes}
					</div>
    );
  }
}

class ArticalList extends Component {
	render() {
		const ArticleRows = posts.map((post) => (
			<li className="ArticleItem">
					<Link to={post.path}>
						<ReactMarkdown source={post.body} />
					</Link>
			</li>
		)); 
		return (
			<ul className="ArticalList">
				{ArticleRows}
			</ul>	
		)
	}
} 

export default Articles;
