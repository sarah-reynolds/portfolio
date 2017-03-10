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
								<p className="port-section">Travel app designed for the spontaneous who want to see more of the world on their budget.</p>
									<Button linkTo={"/canigo"} buttonText={"Learn more"} />
							</div>
							<div className="col-md-6 col-sm-12">
								<img src="http://i.imgur.com/JMlufg4.png" role="presentation" />
							</div>


						</div>
					</div>
					<div className="col-sm-6 col-xs-12">
						<div className="port-wrapper col-xs-12">
							
							<div className="col-md-6 col-sm-12">
								<h3 className="port-header">Email marketing</h3>
								<p className="port-section">Marketing and service email templates and builds.</p>
									<Button linkTo={"/emailmarketing"} buttonText={"Learn more"} />&nbsp;

							</div>
							<div className="col-md-6 col-sm-12">
								<img src="http://i.imgur.com/12HPwNW.png" role="presentation" />
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
								<img src="http://i.imgur.com/IirSSso.png" role="presentation" />
							</div>


						</div>
					</div>				
				</div>
			</div>
		)
	}
}

export default Portfolio;