import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<div className="container-fluid">
						<Header />
						<Route exact path="/" component={Landing} />
					</div>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
