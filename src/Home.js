import React, { Component } from 'react';
import Button from './Button';

class Home extends Component {
	render() {
		return (
			<div className="container-fluid home">
				<div className="row">
					<div className="home-bg col-xs-8 col-xs-offset-2">
						<div className="col-xs-12 text-center hello">
							Welcome!
						</div>
						<div className="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center intro">
							<p>Sarah Basinger is a full-stack web developer based in Atlanta, GA. Her strengths include: a keen eye for design, acute attention to detail, and exceptional organizational skills.</p>
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