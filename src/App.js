import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles.css';
import Nav from './Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
	render() {
		return (
			<div className="app">
				<Nav />
				{this.props.children}
			</div>
		);
	}
}

export default App;
