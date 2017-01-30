import React, { Component } from 'react';
import Button from './Button';

class Home extends Component {
	render() {
		return (
			<div className="container-fluid home">
				<div className="row">
					<div className="home-bg col-xs-8 col-xs-offset-2">
						<div className="col-xs-12 text-center hello">
							Hello! 
						</div>
						<div className="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center intro">
							My name is Sarah and I am a full-stack web developer seeking new opportunities in the Greater Denver area.
						</div>
						<div className="col-xs-12 text-center">
							<Button linkTo={"/about"} buttonText={"About"} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;