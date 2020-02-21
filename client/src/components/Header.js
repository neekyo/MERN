import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

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
							<Link className="home" to="/">
								Home
							</Link>
						</li>
						<li>
							<a className="home" href="/api/logout">
								Logout
							</a>
						</li>
					</React.Fragment>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to={this.props.auth ? '/landing' : '/'} className="left brand-logo home">
						<img src={Logo} className="logo" alt="logo" />
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
