import React, { Component } from 'react';
import BtnExternal from './BtnExternal';
import Button from './Button';


class Portfolio_quidditch extends Component {
	render() {
		return (
			<div className="container-fluid portfolio">
				<div className="row">
					<div className="col-xs-12">
						<div className="port-wrapper col-xs-12">
						<h3 className="port-header-center">Air&trade; Hardwoods</h3>
						<div className="row">
							
							<div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
								
								<p className="port-section">Air Hardwoods hired me to build out a WordPress website for their new line of hardwood flooring. I used XTheme for the template, then customized the CSS according to their branding.</p>
									<BtnExternal linkTo={"http://www.airhardwoods.com"} buttonText={"Demo"} />
							</div>
							
						</div>
						<div className="row">
							
							<div className="col-md-4 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"><br />
								<h4 className="port-header">Technologies used</h4>
								<p className="port-section">
									<ul>
										<li>WordPress</li>
										<li>XTheme</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>Photoshop</li>
										<li>Illustrator</li>
									</ul>
								</p>
							</div>
							<div className="col-md-5 col-sm-10 col-sm-offset-1 col-xs-12">
								<img src="/images/air_hardwoods_screenshot.jpg" role="presentation" />
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

export default Portfolio_quidditch;