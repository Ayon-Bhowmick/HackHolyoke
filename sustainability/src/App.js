import React, { useState } from 'react';
import MainList from './components/MainList/MainList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Popup from './components/Popup/Popup'



//const [isOpen, setIsOpen] = useState(false);
const togglePopup = false;

const App = () => {
	const [ispopup, togglePopup] = useState(true);

	const removePopup = async () => {
		togglePopup(false)
	}

	return (
		<div>
			<Navbar />
			<div>
				{ispopup && <Popup
					content={<>
						<b>Welcome to susfoods!</b>
						<p>We strive to help you eliminate your food waste by keeping track of the expiration dates on your food.
							Simply click the plus sign in the top right corner of your screen to create a new list and use susfoods as your grocery list. Once you’re finished shopping, add in the expiration date of each item and we’ll keep track of the rest.
						</p>
					</>}
					handleClose={removePopup}
				/>}
			</div>
			<Router>
				<Switch>
					<Route exact path="/" component={MainList} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
