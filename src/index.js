import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Portfolio_canigo from './Portfolio_canigo';
import Portfolio_quidditch from './Portfolio_quidditch';
import Portfolio_emailmarketing from './Portfolio_emailmarketing';
import Portfolio_portfolio from './Portfolio_portfolio';
import Connect from './Connect';

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path='/' component={App} >
			<IndexRoute component={Home} />
			<Route path='/about' component={About} />
			<Route path='/experience' component={Experience} />
			<Route path='/portfolio' component={Portfolio} />
			<Route path='/canigo' component={Portfolio_canigo} />
			<Route path='/quidditch' component={Portfolio_quidditch} />
			<Route path='/emailmarketing' component={Portfolio_emailmarketing} />
			<Route path='/portfoliowebsite' component={Portfolio_portfolio} />
			<Route path='/connect' component={Connect} />
		</Route>
	</Router>,
	document.getElementById('root')
);
