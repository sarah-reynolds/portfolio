import React, { Component } from 'react';
// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Nav from './Nav';
import BottomNav from './BottomNav';
import $ from "jquery";


class App extends Component {
	componentDidMount() {
		$(document).ready(function() {
		  $("a").on("click touchend", function(e) {
		    var el = $(this);
		    var link = el.attr("href");
		    window.location = link;
		  });
		});
	}
	
	render() {
		return (
			<div className="app">
				<Nav />
				{this.props.children}
				<BottomNav />
			</div>
		);
	}
}

export default App;
