import React, { Component } from 'react';
import { Link } from 'react-router';

class TopNav extends Component {
	navHamburger(){
		// console.log("navHamburger")
		var nav = document.getElementById("myTopnav");
		if (nav.className === "topnav") {
			nav.className += " responsive";
		} else {
			nav.className = "topnav";
		}
	}

	render() {
		
		return (
			<div className="container-fluid app-header">

					<div className="col-xs-6 col-sm-5 nav-name">
						<Link to='/'>SARAH&nbsp;BASINGER</Link><span id="arrow-glyph" className="seafoam-green glyphicon glyphicon-menu-right"></span>
					</div>
					<div className="col-sm-7 col-xs-1 navbar">
						<ul className="topnav" id="myTopnav">
							<li id="first-list-item" className="list-item"><Link to='/'>Home</Link></li>
							<li className="list-item"><Link to='/about'>About</Link></li>
							<li className="list-item"><Link to='/connect'>Connect</Link></li>
							<li className="icon">
								<a id="hamburger" href="javascript:void(0)" onClick={this.navHamburger}>&#8801;</a>
							</li>
						</ul>
					</div>

			</div>
		)
	}
}

export default TopNav;