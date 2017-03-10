import React, { Component } from 'react';
import BtnExternal from './BtnExternal';
import Button from './Button';


class Portfolio_canigo extends Component {
	render() {
		return (
			<div className="container-fluid portfolio">
				<div className="row">
					<div className="col-xs-12">
						<div className="port-wrapper col-xs-12">
							<h3 className="port-header">&nbsp;CaniGo.co</h3>
							<div className="col-md-7 col-md-offset-1 col-sm-12"><br />
								<p className="port-section">CaniGo.co is an app designed for spontaneous travelers who want to see more of the world. Users enter their place of origin, travel dates, and budget, then CaniGo.co will display destination options within their specified budget. The UI is simple and clean, while scripts are running behind the scene, making api calls and filtering the results to match the user's input. The app was built by <a href="https://github.com/sarahbasinger" target="_none">@sarahbasinger</a>, <a href="https://github.com/bullutk" target="_none">@bullutk</a>, <a href="https://github.com/AndyTuttle12" target="_none">@AndyTuttle12</a>, and <a href="https://github.com/rramdehol" target="_none">@rramdehol</a>.</p>
									<BtnExternal linkTo={"https://vimeo.com/207800621"} buttonText={"Demo"} />
							</div>
							<div className="col-md-4 col-sm-12">
								<img src="http://i.imgur.com/JMlufg4.png" role="presentation" />
							</div>
							<div className="row">
								
								<div className="col-md-3 col-md-offset-1">
									<h4 className="port-header">Technologies used</h4>
									<p className="port-section">
										<ul>
											<li>HTML</li>
											<li>CSS</li>
											<li>Bootstrap</li>
											<li>JavaScript</li>
											<li>React</li>
											<li>jQuery</li>
											<li>SkyScanner API</li>
										</ul>
									</p>
								</div>
								<div className="col-sm-7">
									<h4 className="port-header">Status</h4>
									<p className="port-section">
										<ul>
											<li>Demo above is Phase 1, front-end only, MVP built in 1 week</li>
											<li>The GitHub is currently set to private, as the CaniGo.co team works to launch the app to the public. I am happy to show the extensive GitHub and ReadMe in person.</li>
											<li>Phase 2 (full-stack) is in progress with an expected launch date of March 24, 2017</li>
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

export default Portfolio_canigo;