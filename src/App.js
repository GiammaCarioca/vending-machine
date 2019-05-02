import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={VendingMachine} />
				<Route exact path="/soda" component={Soda} />
				<Route exact path="/chips" component={Chips} />
				<Route exact path="/sardines" component={Sardines} />
			</Switch>
		</div>
	);
}

export default App;
