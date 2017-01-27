import React, { Component } from 'react';
import { Link } from 'react-router';

class Button extends Component {

	render() {
		var linkTo = this.props.linkTo;
		var buttonText = this.props.buttonText;
		return (
			<Link to={linkTo} >
				<div className="custom-button text-center">
					{buttonText}&nbsp;&#10095;
				</div>
			</Link>
		)
	}

}

export default Button;