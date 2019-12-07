import React, { Component } from 'react';
import Scroll from 'react-scroll';

import NavBar from './NavBar';

var Element = Scroll.Element;

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Element id='home' name='home' style={{ height: '100vh', paddingTop: '100px' }}>
					<h1 style={{ color: 'white' }}>Home</h1>
				</Element>
				<Element id='about' name='about' style={{ height: '100vh', paddingTop: '100px' }}>
					<h1 style={{ color: 'white' }}>about</h1>
				</Element>
				<Element id='experience' name='experience' style={{ height: '100vh', paddingTop: '100px' }}>
					<h1 style={{ color: 'white' }}>experience</h1>
				</Element>
				<Element id='projects' name='projects' style={{ height: '100vh', paddingTop: '100px' }}>
					<h1 style={{ color: 'white' }}>projects</h1>
				</Element>
				<Element id='contact' name='contact' style={{ height: '100vh', paddingTop: '100px' }}>
					<h1 style={{ color: 'white' }}>contact</h1>
				</Element>
			</React.Fragment>
		);
	}
}

export default App;
