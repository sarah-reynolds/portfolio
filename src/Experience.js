import React, { Component } from 'react';
import Collapsible from 'react-collapsible';


class Experience extends Component {
	render() {
		return (
			<div className="container-fluid experience">
				<div className="row">
					<div className="col-sm-7 col-xs-12">
						<Collapsible trigger="Web Development &#10095;" >
      						<br /><p className="exp-header">Full-Stack Web Development Student at DigitalCrafts (Nov 2016 - Mar 2017)</p>
      						<p>DigitalCrafts' 16 Week Immersive Bootcamp covers full-stack web development by teaching basic and advanced front-end web development (including React), JavaScript and the MEAN stack, as well as Python and MySQL.</p>
      						<img src="http://i.imgur.com/eGM8AHg.jpg" width="200"/>
      					</Collapsible>
      					<Collapsible trigger="Other Professional Experience &#10095;">
      						<br /><p className="exp-header">Email Marketing Manager (2009 - 2016)</p>
      						<p>All aspects of email marketing including: gather assets and requisites; advise on best practices; code responsive emails; perform extensive QA, including correcting rendering issues across multiple ESPs; perform data and list work; work with back end teams to manage and improve data flow; code dynamic content for personalization and targeting; verify opt-out process complies with CAN-SPAM; schedule deployments; manage transactional / service emails; manage special projects (launch new clients, implement new features, minify and clean up code, develop new automations and drip campaigns, integrate segmentation.</p>
      						<br /><p className="exp-header">Marketing, Administrative, and Production Support (2004 - 2009)</p>
      						<p>Provided administrative, production, creative, and marketing support.</p>
      					</Collapsible>

					</div>
					<div className="col-sm-5 col-xs-12 skills-bg">
						<p className="skills-header">Skills I have</p>
						<p>HTML, CSS, Sass, JavaScript, jQuery, Bootstrap, React, Git, GitHub</p>
						<p className="skills-header">Skills I'm learning</p>
						<p>AWS, Babble, Linux, Webkit, Node, Express, Socket.io, Mongo, MySQL</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Experience;