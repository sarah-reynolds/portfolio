import React, { Component } from 'react';
import BtnExternal from './BtnExternal';
import Button from './Button';


class Portfolio_canigo extends Component {
	render() {
		return (
			<div className="container-fluid portfolio">
				<div className="row">
					<div className="port-wrapper col-xs-12">
						<h3 className="port-header">&nbsp;CaniGo.co</h3>
						<div className="col-md-6 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"><br />
							<p className="port-section">CaniGo.co is an app designed for spontaneous travelers who want to see more of the world. Users enter their place of origin, travel dates, and budget, then CaniGo.co will display destination options within their specified budget. The UI is simple, while scripts are running behind the scene, making api calls and filtering the results to match the user's input.</p>
							<BtnExternal linkTo={"https://vimeo.com/207800621"} buttonText={"Demo"} />
						</div>
						<div className="col-md-3 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
							<img src="http://i.imgur.com/JMlufg4.png" role="presentation" />
						</div>
						<div className="row">
							
							<div className="col-md-3 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
								<h4 className="port-header">Technologies used</h4>
								<div className="port-section">
									<ul>
										<li>HTML</li>
										<li>CSS</li>
										<li>Bootstrap</li>
										<li>JavaScript</li>
										<li>React</li>
										<li>jQuery</li>
										<li>SkyScanner API</li>
									</ul>
								</div>
							</div>
							<div className="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
								<h4 className="port-header">Status</h4>
								<div className="port-section">
									<ul>
										<li>The demo above is Phase 1, front-end only, MVP built in 1 week</li>
										<li>The GitHub is currently set to private, as the CaniGo.co team works to launch the app to the public. I am happy to show the GitHub and ReadMe in person.</li>
										<li>Phase 2 (full-stack with many improvements) is in progress with an expected launch date of March 24, 2017</li>
									</ul>
								</div>
							</div>
						</div>
						

						<div className="row">	
							<div className="col-sm-10 col-sm-offset-1 col-xs-12">
								<h4 className="port-header">Dev team</h4>
								<div className="port-section">
									<div><strong>Sarah Basinger&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/sarahbasinger" target="_none">@sarahbasinger</a></strong></div>
									<p>Sarah was the scrum master, and focused on design and graphics, as well as general web development.</p>
								</div>
								<div className="port-section">
									<div><strong>Ryan Ramdehol&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/rramdehol" target="_none">@rramdehol</a></strong></div>
									<p>Ryan came up with the app idea, and focused on algorithms, as well as general web development.</p>
								</div>
								<div className="port-section">
									<div><strong>Andy Tuttle&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/AndyTuttle12" target="_none">@AndyTuttle12</a></strong></div>
									<p>Andy focused on CSS styling as well as general web development.</p>
								</div>
								<div className="port-section">
									<div><strong>Daniel Crowder&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/bullutk" target="_none">@bullutk</a></strong></div>
									<p>Daniel focused on the React component structure as well as general web development.</p>
								</div>
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
		)
	}
}

export default Portfolio_canigo;