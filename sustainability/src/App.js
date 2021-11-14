import React, { useState } from 'react';
import MainList from './components/MainList/MainList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Popup from './components/Popup/Popup'
import AboutUs from './components/AboutUs/AboutUs'
import Demo from './components/Demo/Demo'
import ShoppingList from './components/ShoppingList/ShoppingList'
import Add from './components/AddButton/Add'

const App = () => {
	const [isPopup, togglePopup] = useState(() => {
		if (document.cookie === "popup=false") {
			return false;
		} else {
			return true;
		}
	});

	const removePopup = async () => {
		togglePopup(false)
		document.cookie = "popup=false"
		console.log(document.cookie);
	}

	return (
		<div>
			<Navbar />
			<div>
				{isPopup && <Popup
					content={<>
						<b>Welcome to SusFoods!</b>
						<p>We strive to help you eliminate your food waste by keeping track of the expiration dates on your food.<br></br>
							Simply click the plus sign in the top right corner of your screen to create a new list and use SusFoods as your grocery list. Once you’re finished shopping, add in the expiration date of each item and we’ll keep track of the rest.
						</p>
					</>}
					handleClose={removePopup}
				/>}
			</div>
			
			<div id="addButton">
				<Router>
					<Switch>
						<Route exact path="/" component={MainList} />
						<Route exact path="/AboutUs" component={AboutUs} />
						<Route exact path="/Demo" component={Demo} />
						<Route exact path="/Add" component={Add} />
						<Route exact path="/ShoppingList" component={ShoppingList} />
					</Switch>
				</Router>
			</div>
			
		</div>
	);
}

export default App;
