import React, { Component } from 'react';
import './VendingMachine.css';

export default class VendingMachine extends Component {
	render() {
		return (
			<div>
				<nav>
					<ul>
						<li>
							<a href="#">Soda</a>
						</li>
						<li>
							<a href="#">Chips</a>
						</li>
						<li>
							<a href="#">Sardines</a>
						</li>
					</ul>
				</nav>
				<h1>Hello! I am a vending machine. What would you like to eat?</h1>
				<ul>
					<li>
						<button>Soda</button>
					</li>
					<li>
						<button>Chips</button>
					</li>
					<li>
						<button>Fresh sardines</button>
					</li>
				</ul>
			</div>
		);
	}
}
