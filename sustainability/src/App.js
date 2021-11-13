import React from 'react';
import MainList from './components/MainList/MainList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Header/Navbar';
//import Logo from './components/Header/Logo';

const App = () => {
	return (
		<div>
    		<Navbar />
			
	    	<Router>		
				<Switch>
					<Route exact path="/" component={MainList} />
				</Switch>
    		</Router>
		</div>
  	);
}

export default App;
