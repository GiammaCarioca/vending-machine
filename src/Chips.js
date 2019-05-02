import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Chips extends Component {
	render() {
		return (
			<div>
				<h2>Chips</h2>
				<Link exact to="/">
					Go Back
				</Link>
			</div>
		);
	}
}
