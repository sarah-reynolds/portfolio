import React, { Component } from 'react';


class Connect extends Component {
	render() {
		return (
			<div className="container-fluid connect">
				<div className="row">
					<div className="col-xs-12 col-sm-10 col-sm-offset-1">
						<div className="connect-spacing ">
							<a href="https://github.com/sarahbasinger" target="_blank"><img src="/images/github.png" width="50px" role="presentation" />
							<br />github.com/sarahbasinger</a>
						</div> <br />
						<div className="connect-spacing">
							<a href="https://www.linkedin.com/in/sarahreynoldsbasinger" target="_blank"><img src="/images/linkedin_circle.png" width="50px" role="presentation" />
							<br />linkedin.com/in/sarahreynoldsbasinger</a>
						</div><br />
						<div className="connect-spacing">
							<a href="mailto:sarrey@gmail.com" target="_blank"><img src="/images/email_circle.png" width="50px" role="presentation" />
							<br />sarrey@gmail.com</a>
						</div>

						{/* <form>
							<label className="form-label">Name:</label><input className="input" type="text" name="name" /><br />
							<label className="form-label">E-mail:</label><input className="input" type="test" name="mail" /><br />
							<label className="form-label">Comment:</label><textarea className="input" type="text" name="comment"></textarea><br />
							<input className="custom-button pull-right" type="submit" value="Send" />
						</form> */}
					</div>
				</div>
			</div>
		)
	}
}

export default Connect;