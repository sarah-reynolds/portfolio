import React, { Component } from 'react';
// import Button from './Button';
import BtnExternal from './BtnExternal';
import Collapsible from 'react-collapsible';
import { Document, Page } from 'react-pdf';

class Experience extends Component {
	state = {
		numPages: null,
		pageNumber: 1,
	}

	onDocumentLoad = ({ numPages }) => {
		this.setState({ numPages });
	}

	render() {
		const { pageNumber, numPages } = this.state;
		return (
			<div className="container-fluid experience">
				<div className="row">
					<div className="col-xs-2 resume-button text-left"><BtnExternal linkTo={"/sbasinger_resume.pdf"} buttonText={"Download resume"} /></div>
				</div>
				<div className="row">
					<div className="col-xs-10">
					<Document
	          file="/sbasinger_resume.pdf"
	          onLoadSuccess={this.onDocumentLoad}
	        >
	          <Page 
	          	pageNumber={pageNumber} 
	          	scale={1.5}
	          />
	        </Document>
	        </div>
				</div>
			</div>
		)
	}
}

export default Experience;