import React, { Component } from 'react';
import BtnExternal from './BtnExternal';
import Button from './Button';


class Portfolio_portfolio extends Component {
	render() {
		return (
			<div className="container-fluid portfolio">
				<div className="row">
					<div className="col-xs-12">
						<div className="port-wrapper col-xs-12">
						<h3 className="port-header">SarahBasinger.com Portfolio</h3>
						<div className="row">
							
							<div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
								
								<p className="port-section">This is my personal portfolio website for showing my work as a developer.</p>
									<BtnExternal linkTo={"https://github.com/sarahbasinger/portfolio"} buttonText={"GitHub"} />
							</div>
							
						</div>
						<div className="row">
							
							<div className="col-md-4 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"><br />
								<h4 className="port-header">Technologies used</h4>
								<p className="port-section">
									<ul>
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
										<li>Bootstrap</li>
										<li>React</li>
										<li>Sass</li>
									</ul>
								</p>
							</div>
							<div className="col-md-5 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
								<img src="/images/portfolio_screenshot.png" role="presentation" />
							</div>
						</div>
							<div className="row">
								{/* ======== BUTTON ======== */}
								<div className="col-xs-12 text-left">
									<div className="text-left">
										<br /><Button linkTo={"/portfolio"} buttonText={"Back to portfolio"} />
									</div>
								</div>
							</div>
						</div>
					</div>				
				</div>
				
			</div>
		)
	}
}

export default Portfolio_portfolio;
