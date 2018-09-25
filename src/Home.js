import React, { Component } from 'react';
import Button from './Button';

class Home extends Component {
	render() {
		return (
			<div className="container-fluid home">
				<div className="row">
					<div className="home-bg col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
						<div className="col-xs-12 text-center hello">
							Welcome!
						</div>
						<div className="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center intro">
							<p>My name is Sarah and I'm a full-stack software engineer based in Boulder, CO. I have a keen eye for design, acute attention to detail, and exceptional organizational and communication skills.</p>
						</div>
						<div className="col-xs-12 text-center">
							<br /><Button className="btnOnHome" linkTo={"/about"} buttonText={"About"} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;