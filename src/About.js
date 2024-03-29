import React, { Component } from 'react';
import Button from './Button';

class About extends Component {
	render() {
		return (
			<div className="container-fluid about">
				<div className="row">
					<div className="col-sm-12">
						<div className="col-sm-5 col-xs-12">
							<img className="img-circle profile-pic" src="http://i.imgur.com/sIGNFyM.jpg" role="presentation"/>
						</div>
						<div className="col-sm-7 col-xs-12">
							<div className="about-header">
								About Sarah
							</div>
							<div>
								<br /><p>[&nbsp;Email marketing professional turned full-stack web developer&nbsp;]</p>
								<p>On March 24, 2017, I completed a 4-month full-stack web development training program at <a href="http://www.digitalcrafts.com" target="_blank"><strong>DigitalCrafts</strong></a> in Atlanta, GA. Before then, I spent 7 years in the email marketing industry.</p>
								<p>My first role after the coding bootcamp was at The Home Depot as a full-stack software engineer, working with Ruby on Rails and React. Today I am with Nutrien in Loveland, CO as a front-end developer working with React/Redux.</p> 
								<p>When I{"'"}m not coding, you can find me reading fantasy novels, going on hikes with my dogs, traveling, playing video games, baking, taking pictures, and obsessing over anything Harry Potter or Lord of the Rings.</p>
							</div>
							<div className="col-xs-12 text-center">
								<br /><Button linkTo={"/connect"} buttonText={"Connect"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About;