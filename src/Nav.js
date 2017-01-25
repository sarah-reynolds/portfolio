import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
	render() {
		return (
			<div className="container-fluid app-header">
				<div className="row">
					<div className="col-xs-3 nav-name">
						SARAH BASINGER
					</div>
					<div className="col-xs-9">
						<ul className="navbar">
							<li><Link to='/'>HOME</Link></li>
							<li><Link to='/about'>ABOUT</Link></li>
							<li><Link to='/experience'>EXPERIENCE</Link></li>
							<li><Link to='/portfolio'>PORTFOLIO</Link></li>
							<li><Link to='/connect'>CONNECT</Link></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Nav;