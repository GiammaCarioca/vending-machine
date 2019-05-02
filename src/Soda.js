import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Soda extends Component {
	render() {
		return (
			<div>
				<h2>Soda</h2>
				<Link exact to="/">
					Go Back
				</Link>
			</div>
		);
	}
}
