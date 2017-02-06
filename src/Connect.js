import React, { Component } from 'react';


class Connect extends Component {
	render() {
		return (
			<div className="container-fluid connect">
				<div className="row">
					<div className="col-xs-12 col-sm-10 col-sm-offset-1">
						<div className="connect-spacing">
							<a href="https://github.com/sarahbasinger" target="_blank"><img src="http://i.imgur.com/Zx9xtoW.png" width="50px" role="presentation" />
							<br />github.com/sarahbasinger</a>
						</div> <br />
						<div className="connect-spacing">
							<a href="https://www.linkedin.com/in/sarahreynoldsbasinger" target="_blank"><img src="http://i.imgur.com/EdTD31u.png" width="50px" role="presentation" />
							<br />linkedin.com/in/sarahreynoldsbasinger</a>
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