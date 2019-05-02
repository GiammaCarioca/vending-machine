import React from 'react';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" render={() => <VendingMachine />} />
				<Route exact path="/soda" render={() => <Soda />} />
				<Route exact path="/chips" render={() => <Chips />} />
				<Route exact path="/sardines" render={() => <Sardines />} />
			</Switch>
		</div>
	);
}

export default App;
