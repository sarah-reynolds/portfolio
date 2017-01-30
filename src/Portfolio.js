import React, { Component } from 'react';
import BtnExternal from './BtnExternal';

class Portfolio extends Component {
	render() {
		return (
			<div className="container-fluid portfolio">
				<div className="row">
					<div className="col-sm-6 col-xs-12">
						<div className="port-wrapper col-xs-12">
							
							<div className="col-md-6 col-sm-12">
								<h3 className="port-header">CaniGo.co</h3>
								<p className="port-section">CaniGo.co is an app designed for spontaneous travelers who want to see more of the world. Users enter their place of origin, travel dates, and budget, then CaniGo.co will display destination options within their specified budget. The UI is simple and clean, while scripts are running behind the scene, making api calls and filtering the results based on the user's input.</p>
									<BtnExternal linkTo={"https://github.com/rramdehol/www.CaniGo.co"} buttonText={"GitHub"} />&nbsp;
									<BtnExternal linkTo={"http://www.canigo.co"} buttonText={"Live Demo"} />
							</div>
							<div className="col-md-6 col-sm-12">
								<img src="http://i.imgur.com/3ENpyDz.png" />
							</div>


						</div>
					</div>	
					<div className="col-sm-6 col-xs-12">
						<div className="port-wrapper col-xs-12">
							
							<div className="col-md-6 col-sm-12">
								<h3 className="port-header">Quidditch Practice</h3>
								<p className="port-section">Quidditch Practice is a Harry Potter themed game built using canvas. The user plays as Harry Potter on a broom, and uses the arrow keys on the keyboard to catch as many golden snitches possible in 30 seconds. Being hit by a the bludger will slow you down for 3 seconds. High scores are stored in each browser session.</p>
									<BtnExternal linkTo={"https://github.com/sarahbasinger/canvas-game"} buttonText={"GitHub"} />&nbsp;
									<BtnExternal linkTo={""} buttonText={"Live Demo"} />
							</div>
							<div className="col-md-6 col-sm-12">
								<img src="http://i.imgur.com/IirSSso.png" />
							</div>


						</div>
					</div>				
				</div>
			</div>
		)
	}
}

export default Portfolio;