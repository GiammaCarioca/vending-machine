import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

export default class VendingMachine extends Component {
	render() {
		return (
			<div>
				<h1>Hello! I am a vending machine. What would you like to eat?</h1>
				<ul>
					<li>
						<Link exact to="/soda">
							Soda
						</Link>
					</li>
					<li>
						<Link exact to="/chips">
							Chips
						</Link>
					</li>
					<li>
						<Link exact to="sardines">
							Fresh Sardines
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
