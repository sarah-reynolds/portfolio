import React, { Component } from 'react';
// import { Link } from 'react-router';

class BtnExternal extends Component {

	render() {
		var linkTo = this.props.linkTo;
		var buttonText = this.props.buttonText;
		return (
			<a href={linkTo} target="_blank" >
				<div className="custom-button text-center">
					{buttonText}&nbsp;&#10095;
				</div>
			</a>
		)
	}

}

export default BtnExternal;