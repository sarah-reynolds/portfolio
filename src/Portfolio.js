import React, { Component } from 'react';
import BtnExternal from './BtnExternal';
import Button from './Button';


class Portfolio extends Component {
	render() {
		return (
			<div className="container-fluid portfolio">
				<div className="row">

					<div className="col-sm-6 col-xs-12">
						<div className="port-wrapper col-xs-12">
							<div className="col-md-6 col-sm-12">
								<h3 className="port-header">CaniGo.co</h3>
								<p className="port-section">Vacation destination site made for the spontaneous traveler.</p>
								<Button linkTo={"/canigo"} buttonText={"Learn more"} />
							</div>
							<div className="col-md-6 col-sm-12">
								<img src="/images/canigo_screenshot2.png" role="presentation" />
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-xs-12">
						<div className="port-wrapper col-xs-12">
							<div className="col-md-6 col-sm-12">
								<h3 className="port-header">Email Marketing</h3>
								<p className="port-section">Marketing and service email templates and builds.</p>
								<Button linkTo={"/emailmarketing"} buttonText={"Learn more"} />&nbsp;
							</div>
							<div className="col-md-6 col-sm-12">
								<img src="/images/screenshot2.png" role="presentation" />
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-xs-12">
						<div className="port-wrapper col-xs-12">
							<div className="col-md-6 col-sm-12">
								<h3 className="port-header">SarahBasinger.com Portfolio Site</h3>
								<p className="port-section">React site for showcasing my work.</p>
								<Button linkTo={"/portfoliowebsite"} buttonText={"Learn more"} />
							</div>
							<div className="col-md-6 col-sm-12">
								<img src="/images/portfolio_screenshot.png" role="presentation" />
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-xs-12">
						<div className="port-wrapper col-xs-12">
							<div className="col-md-6 col-sm-12">
								<h3 className="port-header">Quidditch Practice</h3>
								<p className="port-section">Just for fun. A Harry Potter themed game built using canvas.</p>
								<Button linkTo={"/quidditch"} buttonText={"Learn more"} />&nbsp;
							</div>
							<div className="col-md-6 col-sm-12">
								<img src="/images/quidditch_screenshot.png" role="presentation" />
							</div>
						</div>
					</div>	

				</div>
			</div>
		)
	}
}

export default Portfolio;