import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sardines extends Component {
	render() {
		return (
			<div>
				<h2>Fresh Sardines</h2>
				<Link exact to="/">
					Go Back
				</Link>
			</div>
		);
	}
}
