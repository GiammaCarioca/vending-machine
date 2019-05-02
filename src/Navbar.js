import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="App-nav">
					<NavLink exact activeClassName="active-link" to="/">
						Home
					</NavLink>

					<NavLink exact activeClassName="active-link" to="/soda">
						Soda
					</NavLink>

					<NavLink exact activeClassName="active-link" to="/chips">
						Chips
					</NavLink>

					<NavLink exact activeClassName="active-link" to="/sardines">
						Sardines
					</NavLink>
				</nav>
			</div>
		);
	}
}
