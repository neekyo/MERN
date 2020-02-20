import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a className="btn" href="/auth/google">
							Login with Google
						</a>
					</li>
				);
			default:
				return (
					<React.Fragment>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<a href="/api/logout">Logout</a>
						</li>
					</React.Fragment>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo brand">
						Intela Care
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
