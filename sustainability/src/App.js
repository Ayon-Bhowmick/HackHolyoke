import React from 'react';
import MainList from './components/MainList/MainList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

const App = () => {
	return (
		<div>
    		<h1>Food Stack</h1>
	    	<Router>
				<Switch>
					<Route exact path="/" component={MainList} />
				</Switch>
    		</Router>
		</div>
  	);
}

export default App;
