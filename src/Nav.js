import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
	render() {
		return (
			<div className="container-fluid app-header">
				<div className="row">
					<div className="col-xs-12 col-sm-5 nav-name">
						SARAH BASINGER<span className="seafoam-green glyphicon glyphicon-menu-right"></span>
					</div>
					<div className="col-sm-6 navbar">
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/about'>About</Link></li>
							<li><Link to='/experience'>Experience</Link></li>
							<li><Link to='/portfolio'>Portfolio</Link></li>
							<li><Link to='/connect'>Connect</Link></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Nav;