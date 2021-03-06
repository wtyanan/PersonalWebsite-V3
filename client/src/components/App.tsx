import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';
import Admin from './Admin';
import NotFound404 from './NotFound404';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<Switch>
						<Route exact path='/admin' component={Admin} />
						<Route exact path='/' component={Main} />
						<Route component={NotFound404} />
					</Switch>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

export default App;
