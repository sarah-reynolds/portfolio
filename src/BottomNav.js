import React, { Component } from 'react';

class BottomNav extends Component {

	render() {
		
		return (
			<div className="container-fluid" id="bottom-nav">
					<div className="bottomnavbar">
						<ul className="btmnav">
							<li className="btm-list-item"><a href="http://www.github.com/sarahbasinger" target="_blank"><img alt="GitHub" src="/images/github.png" width="20px"/></a></li>
							<li className="btm-list-item"><a href="http://www.linkedin.com/in/sarahreynoldsbasinger" target="_blank"><img alt="LinkedIn" src="/images/linkedin.png" width="20px"/></a></li>
							<li className="btm-list-item"><a href="mailto:sarrey@gmail.com"><img alt="email" src="/images/email.png" width="20px"/></a></li>
							<li className="btm-list-item"><a href="/sbasinger_resume.pdf" target="_blank"><img alt="Resume" src="/images/resume.png" width="20px"/></a></li>
						</ul>
					</div>
			</div>
		)
	}
}

export default BottomNav;