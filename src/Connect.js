import React, { Component } from 'react';


class Connect extends Component {
	render() {
		return (
			<div className="container-fluid connect">
				<div className="row">
					<div className="col-xs-12 col-sm-10 col-sm-offset-1">
						
						<form>
							<label className="form-label">Name:</label><input className="input" type="text" name="name" /><br />
							<label className="form-label">E-mail:</label><input className="input" type="test" name="mail" /><br />
							<label className="form-label">Comment:</label><textarea className="input" type="text" name="comment"></textarea><br />
							<input className="custom-button pull-right" type="submit" value="Send" />
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Connect;