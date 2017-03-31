# Sarah Basinger - Full-stack Web Developer  
### Portfolio  
React website for showcasing my work as a web developer.

### Technologies 
- HTML 
- CSS 
- JavaScript 
- Bootstrap 
- React 
- Sass

### Dependencies
```
npm install react-collapsible
npm install bootstrap@3
npm install react-bootstrap
```

### Code snippet
React component example
```
class Portfolio extends Component {
	render() {
		return (
			<div className="container-fluid portfolio">
				<div className="row">

					<div className="col-sm-6 col-xs-12">
						<div className="port-wrapper col-xs-12">
							<div className="col-md-6 col-sm-12">
								<h3 className="port-header">CaniGo.co</h3>
								<p className="port-section">Vacation destination app made for the spontaneous traveler.</p>
								<Button linkTo={"/canigo"} buttonText={"Learn more"} />
							</div>
							<div className="col-md-6 col-sm-12">
								<img src="/images/screenshot1.png" role="presentation" />
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-xs-12">
						<div className="port-wrapper col-xs-12">
							<div className="col-md-6 col-sm-12">
								<h3 className="port-header">Email Marketing</h3>
								<p className="port-section">Marketing and service email templates and builds.</p>
								<Button linkTo={"/emailmarketing"} buttonText={"Learn more"} />&nbsp;
							</div>
							<div className="col-md-6 col-sm-12">
								<img src="/images/screenshot2.png" role="presentation" />
							</div>
						</div>
					</div>
```