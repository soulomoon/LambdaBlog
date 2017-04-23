import React, { Component } from 'react';
import BlogArticlesTopBar from './BlogArticlesTopBar'
import Article from './Article.jsx'
import {
	Link,
	BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

const pages = 
[
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new",
		createTime: "2017/3/15",
		path: "/ARTICLES/ARTICLE/1"
	},
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new",
		createTime: "2017/3/15",
		path: "/ARTICLES/ARTICLE/2"

	},
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new",
		createTime: "2017/3/15",
		path: "/ARTICLES/ARTICLE/3"
	},
	{
		title: "this is the title",
		body: "planning a trip to Tokyo Got a question about living in Japan On the prowl for a new ning a trip to Tokyo Got a question about living in Japan On the prowl for a new",
		createTime: "2017/3/15",
		path: "/ARTICLES/ARTICLE/4"
	}
];

class ArticlesNav extends Component {
	render() {
		return (
				<div className="ArticlesNav">
					<BlogArticlesTopBar />
					<ArticlesContent/>
				</div>
		);
	}
}

class Articles extends Component {
	render() {
		const ArticleNavRoute = () => (
			<Route path="/ARTICLES/all" component={ArticlesNav} key="ArticlesNav"/>
		);
		const ArticleRoutes = pages.map((page) => 
			(
			<Route path={page.path} 
				render={
				() => <Article title={page.title} body={page.body} createTime={page.createTime} path={page.path} key={page.path}/>
				}
				key={page.path}/>
		));
		ArticleRoutes.push(<ArticleNavRoute key="ArticleNavRoute"/>);
		console.log(ArticleRoutes);
		return (
					<div className="BlogContentMain" key="articals">
						<Route exact path="/ARTICLES" render={() => (
							<Redirect to="/ARTICLES/all" />
						)} />
						{ArticleRoutes}
					</div>
    );
  }
}

class ArticlesContent extends Component {
	render() {
		const ArticleRows = pages.map((page) => (
			<div className="ArticleItem">
				<h1>
					<Link to={page.path}>
						{page.title}
					</Link>
					</h1>
				<p>{page.body}</p>
			</div>
		)); 
		return (
			<div className="ArticlesContent">
				{ArticleRows}
			</div>	
		)
	}
} 

export default Articles;
