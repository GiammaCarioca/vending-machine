import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import sodaImg from './Soda.png';
import './Soda.css';

export default class Soda extends Component {
	render() {
		return (
			<div className="Soda">
				<img src={sodaImg} alt="coca cola can" />
				<Message>
					<h1>SODAAAAA IS MY FAVORITE</h1>
					<h3>But now I drink sparkling water instead</h3>
					<p>(I still miss Soda)</p>
					<Link to="/">Go Back</Link>
				</Message>

				<img src={sodaImg} alt="coca cola can" />
			</div>
		);
	}
}
