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

					<div className="col-xs-12 col-sm-5 nav-name">
						<Link to='/'>SARAH&nbsp;BASINGER<span className="seafoam-green glyphicon glyphicon-menu-right"></span></Link>
					</div>
					<div className="col-sm-7 navbar">
						<ul className="topnav" id="myTopnav">
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/about'>About</Link></li>
							<li><Link to='/experience'>Experience</Link></li>
							<li><Link to='/portfolio'>Projects</Link></li>
							<li><Link to='/connect'>Connect</Link></li>
							<li className="icon">
								<a href="javascript:void(0)" onClick={this.navHamburger}>&#9776;</a>
							</li>
						</ul>
					</div>

			</div>
		)
	}
}

export default TopNav;