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
						<div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"><br />
							<p className="port-section">CaniGo.co is a website designed for spontaneous travelers who want to see more of the world. Users enter their place of origin, travel dates, and budget, then CaniGo.co will display destination options within their budget. The UI is simple, while scripts are running behind the scene, making api calls and filtering the results to match the user{"'"}s input. CaniGo.co was built by Sarah Basinger (<a href="https://github.com/sarahbasinger" target="_blank">github.com/sarahbasinger</a>), Daniel Crowder (<a href="https://github.com/bullutk" target="_blank">github.com/bullutk</a>), Andy Tuttle (<a href="https://github.com/AndyTuttle12" target="_blank">github.com/AndyTuttle12</a>), and Ryan Ramdehol (<a href="https://github.com/rramdehol" target="_blank">github.com/rramdehol</a>).</p>
							<BtnExternal linkTo={"http://www.canigo.co"} buttonText={"Live Demo*"} /><br />
							* Please choose ATL or NYC for origin, and travel dates of 4/22/17 - 4/29/17. This is due to API restrictions while we are in the prototyping phase. 
						</div>

						<div className="row">
							
							<div className="col-md-6 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
								<video width="450" height="350" controls>
									<source src="/images/canigo_demo_video3.mp4" type="video/mp4" />
									Your browser does not support video.
								</video>
							</div>

							<div className="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
								<h4 className="port-header">Technologies used</h4>
								<div className="port-section">
									<ul>
										<li>HTML</li>
										<li>CSS</li>
										<li>Sass</li>
										<li>JavaScript</li>
										<li>jQuery</li>
										<li>JSX</li>
										<li>React</li>
										<li>Redux</li>
										<li>Express</li>
										<li>MySQL</li>
										<li>Node.js</li>
										<li><a href="https://sandbox.amadeus.com/api-catalog" target="_blank">Amadeus API</a></li>
									</ul>
								</div>
							</div>
						</div>
						

						<div className="row">	
							<div className="col-sm-10 col-sm-offset-1 col-xs-12">
								<h4 className="port-header">How it works</h4>
								<div className="port-section">
									<p>Users enter their preferences on the search page - how many travelers, whether they need flights / car rental / hotel, their origin airport code, departure date, return date, and budget.</p>

									<p>These inputs are sent to the back-end via React Redux. On the back end, the Amadeus API is called multiple times to pull results for destination locations, then flight/car/hotel details for each destination. Many of these calls are made using Promises for the cases when any calls are dependent on data from previous calls. If the total cost for a vacation package is within the budget, the destination objects are sent to the front end.</p>

									<p>Next, the front end maps through the objects and displays each destination in a card on a carousel. The columns are split up by region for easy browsing.</p>

									<p>The user then clicks into the individual cards to view more information about that specific destination, including flight, hotel, and car rental details. The user can go back and view more locations, or book the trip.</p>
								</div>
							</div>
						</div>

						<div className="row">	
							<div className="col-sm-10 col-sm-offset-1 col-xs-12">
								<h4 className="port-header">Code snippet</h4>
								<div className="port-section">
									<p>Back end architecture of promises:<br />
									- Create promises within a function for each necessary API call<br />
									- Start with the Flight Inspiration Search. This API call will pull back trip destination options.</p>
									
									<code className="code-snippet">
										{"function flightInspiration(url){ "} <br />
											&nbsp;{" return new Promise(function(resolve, reject){ "} <br />
												&nbsp;&nbsp;&nbsp;&nbsp;{" var inspirationSearch = request(url,function(error, response, body){ "} <br />
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" // the api response comes back as a string, so we need to parse it into an object "} <br />
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" var parsedBody = JSON.parse(body); "} <br />
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" var destinationsArray = []; "} <br />
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" // map through the results and push each destination iata to an array "} <br />
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" parsedBody.results.map((currentValue, currentIndex)=>{ "} <br />
														&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" destinationsArray.push({iata: currentValue.destination}) "} <br />
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" }) "} <br />
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" // resolve the promise "} <br />
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" resolve(destinationsArray) "} <br />
												&nbsp;&nbsp;&nbsp;&nbsp;{" }) "} <br />
											&nbsp;{" }) "} <br />
										{" } "} <br />
									</code>
									
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