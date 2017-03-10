import React, { Component } from 'react';
import BtnExternal from './BtnExternal';
import Button from './Button';


class Portfolio_emailmarketing extends Component {
	render() {
		return (
			<div className="container-fluid portfolio">
				<div className="row">
					<div className="col-xs-12">
						<div className="port-wrapper col-xs-12">
							<h3 className="port-header">&nbsp;Email Marketing</h3>
								<div className="row">
									<div className="col-md-6 col-md-offset-1 col-sm-12"><br />
										<h4 className="port-header">Loyalty program marketing emails</h4>
										<ul>
											<li>Build new templates from PSDs</li>
											<li>Template updates based on style guides</li>
											<li>Personalized, including dynamic content based on user's behavior</li>
											<li>Responsive</li>

										</ul>
											<BtnExternal linkTo={"http://view.aadvantageeshopping.com/?j=fe5713757162057a771c&m=fe641570776002757512&ls=fdf7177073600d7c7614767d&l=fe5a1775766c0c7f7017&s=fe3013737663067f761070&jb=ff5e12727c&ju=fe221376756502787c1275&r=0"} buttonText={"View example"} />
									</div>
									<div className="col-md-5 col-sm-12">
										<a href="http://view.aadvantageeshopping.com/?j=fe5713757162057a771c&m=fe641570776002757512&ls=fdf7177073600d7c7614767d&l=fe5a1775766c0c7f7017&s=fe3013737663067f761070&jb=ff5e12727c&ju=fe221376756502787c1275&r=0" target="_blank"><img src="http://i.imgur.com/12HPwNW.png" role="presentation" /></a>
									</div>
								</div>
							<div className="row">
								<div className="col-md-6 col-md-offset-1 col-sm-12">
									<h4 className="port-header">Service confirmation emails</h4>
									<ul>
										<li>Build new responsive templates</li>
										<li>Code clean up / minify, comment code, and create documentation on the code and data flow</li>
										<li>Manage data with back-end team</li>
										<li>Redesign and code corporate Cartera confirmation email</li>
									</ul>
										<BtnExternal linkTo={"http://i.imgur.com/coNfXdm.png"} buttonText={"View redesign"} /><br />
								</div>
								<div className="col-md-4 col-xs-12"><br />
									<a href="http://i.imgur.com/coNfXdm.png" target="_blank"><img src="http://i.imgur.com/coNfXdm.png" role="presentation" /></a>
								</div>
							</div>


							<div className="row">
								
								<div className="col-md-6 col-md-offset-1 col-sm-12"><br />
									<h4 className="port-header">Technologies used</h4>
									<p className="port-section">
										<ul>
											<li>HTML</li>
											<li>CSS, media queries</li>
											<li>AMPscript (similar to JavaScript)</li>
											<li>MS SQL Server</li>
											<li>ExactTarget / Salesforce Marketing Cloud</li>
										</ul>
									</p>
								</div>

							</div>
							<div className="row">
								<div className="col-xs-12">
									<p><br /><Button linkTo={"/portfolio"} buttonText={"Back to portfolio"} /></p>
								</div>
							</div>
						</div>
					</div>				
				</div>
				
			</div>
		)
	}
}

export default Portfolio_emailmarketing;