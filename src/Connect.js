import React, { Component } from 'react';


class Connect extends Component {
	render() {
		return (
			<div className="container-fluid connect">
				<div className="row">
					<div className="col-xs-12 col-sm-10 col-sm-offset-1">
						<div><img src="http://i.imgur.com/yWOrVTR.png" width="25px" role="presentation" /><strong>Github:</strong> <a href="https://github.com/sarahbasinger" target="_blank">github.com/sarahbasinger</a></div> <br />
						<div>&nbsp;<img src="http://i.imgur.com/iEohfPG.png" width="15px" role="presentation" />&nbsp;<strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sarahreynoldsbasinger" target="_blank">linkedin.com/in/sarahreynoldsbasinger</a></div>

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