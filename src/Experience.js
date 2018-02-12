import React, { Component } from 'react';
import Button from './Button';
import BtnExternal from './BtnExternal';
import Collapsible from 'react-collapsible';
import { Document, Page } from 'react-pdf';

class Experience extends Component {

	render() {
		return (
			<div className="container-fluid experience">
				<div className="row">
					<div className="resume-button"><BtnExternal linkTo={"/sbasinger_resume.pdf"} buttonText={"Download resume"} /></div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<h4 className="exp-header">SUMMARY</h4>
						<p className="exp-summary">Junior Software Engineer with email marketing/development background. Naturally inquisitive, eager to learn new technologies, excellent sense of design and user experience. Seeking front-end, back-end, or full-stack opportunities.</p>
						<h4 className="exp-header">EXPERIENCE</h4>
						<div className="exp-date-range">MAY 2017 - PRESENT</div>
							<div className="exp-title"><strong>Software Engineer</strong>
							<span className="exp-company">&nbsp;|&nbsp;&nbsp;The Home Depot - Atlanta, GA</span></div>
							<Collapsible className="collapsible-trigger" trigger="details >">
								<div className="exp-tech-used">Ruby on Rails, HTML, SCSS, Javascript, React, Angular, MySQL, TDD, RSpec, APIs, git, Pivotal Cloud Foundry</div>
								<div className="exp-job-desc">Transitioned from 3 month Software Engineer Apprentice to full-time. Pair program with team of 10 engineers on cloud-based Tool Rental application used by store associates in 1,100+ retail stores.</div>
							</Collapsible>

						<div className="exp-date-range">NOV 2016 - MAY 2017</div>
							<div className="exp-title"><strong>Full-stack Web Development Student, Teacher’s Aid</strong>
							<span className="exp-company">&nbsp;|&nbsp;&nbsp;DigitalCrafts - Atlanta, GA</span></div>
							<Collapsible className="collapsible-trigger" trigger="details >">
							<div className="exp-tech-used">HTML, CSS, SCSS, Javascript, jQuery, Bootstrap, React, Redux, MySQL, Node.js, Python, git</div>
							<div className="exp-job-desc">Attended DigitalCrafts’ 16 week immersive bootcamp, covering full-stack web development. Brought on as teacher’s aid while interviewing for web development opportunities.</div>
							</Collapsible>

						<div className="exp-date-range">OCT 2015 - MAY 2016</div>
							<div className="exp-title"><strong>Team Lead, Production</strong>
							<span className="exp-company">&nbsp;|&nbsp;&nbsp;Yes Lifecycle Marketing - Louisville, CO</span></div>
							<Collapsible className="collapsible-trigger" trigger="details >">
							<div className="exp-tech-used">HTML, CSS, Javascript, proprietary email platform, Litmus, Email on Acid</div>
							<div className="exp-job-desc">Perform QA, modify email code, resolve cross-browser rendering issues, manage lists, setup multivariate tests, compile and analyze data, create and update documentation.</div>
							</Collapsible>

						<div className="exp-date-range">AUG 2015 - PRESENT</div>
							<div className="exp-title"><strong>Freelancer</strong></div>
							<Collapsible className="collapsible-trigger" trigger="details >">
							<div className="exp-tech-used">HTML, CSS, Wordpress, Basecamp, Trello, Photoshop</div>
							<div className="exp-job-desc">Email, web, marketing, photography, and copy editing services.</div>
							</Collapsible>

						<div className="exp-date-range">OCT 2008 - JUL 2015</div>
							<div className="exp-title"><strong> Manager, Marketing Channel Solutions</strong>
							<span className="exp-company">&nbsp;|&nbsp;&nbsp;Cartera Commerce - Atlanta, GA / Remote</span></div>
							<Collapsible className="collapsible-trigger" trigger="details >">
							<div className="exp-tech-used">HTML, CSS, AMPscript, SQL, MS Office, Dreamweaver, Photoshop, JIRA, QuickBase, ExactTarget / Salesforce Marketing Cloud</div>
							<div className="exp-job-desc">Build dynamic/targeted email templates, collaborate with back-end team for data needs, manage transactional and service emails, CAN-SPAM compliance, analytics, and documentation.</div>
							</Collapsible>

						<div className="exp-date-range">DEC 2006 - OCT 2008</div>
							<div className="exp-title"><strong>Marketing Assistant</strong>
							<span className="exp-company">&nbsp;|&nbsp;&nbsp;Morris Visitor Publications - Atlanta, GA</span></div>
							<Collapsible className="collapsible-trigger" trigger="details >">
							<div className="exp-tech-used">Photoshop, Illustrator, InDesign, MS Office</div>
							<div className="exp-job-desc">Graphic, marketing, sales, and administrative support for two fast-paced divisions.</div>
							</Collapsible>

						<div className="exp-date-range">JUN 2004 - DEC 2006</div>
							<div className="exp-title"><strong>Marketing Assistant</strong>
							<span className="exp-company">&nbsp;|&nbsp;&nbsp;IBC Worldwide - Alpharetta, GA</span></div>
							<Collapsible className="collapsible-trigger" trigger="details >">
							<div className="exp-tech-used">Photoshop, MS Office</div>
							<div className="exp-job-desc">Administrative, production, creative, and marketing support for Marketing Promotions Team.</div>
							</Collapsible>

					<h4 className="exp-header">EDUCATION</h4>
						<div className="exp-date-range">AUG 2006 - JUN 2008</div>
							<div className="exp-title"><strong>Associate of Arts in Business Studies</strong></div>
							<div className="exp-job-desc">Chattahoochee Technical College - Marietta, GA</div>

						<div className="exp-date-range">NOV 2016 - MAR 2017</div>
							<div className="exp-title"><strong>Full-stack Web Development Program</strong></div>
							<div className="exp-job-desc">DigitalCrafts - Atlanta, GA</div>

	        </div>
				</div>
				<div className="row">
					<div className="resume-button"><Button className="btnOnHome" linkTo={"/portfolio"} buttonText={"Projects"} /></div>
				</div>
			</div>
		)
	}
}

export default Experience;