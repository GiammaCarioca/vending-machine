import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<Fragment>
				<nav className="Navbar">
					<NavLink exact activeClassName="Navbar-active" to="/">
						Home
					</NavLink>

					<NavLink exact activeClassName="Navbar-active" to="/soda">
						Soda
					</NavLink>

					<NavLink exact activeClassName="Navbar-active" to="/chips">
						Chips
					</NavLink>

					<NavLink exact activeClassName="Navbar-active" to="/sardines">
						Sardines
					</NavLink>
				</nav>
			</Fragment>
		);
	}
}

export default Navbar;
