import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import NameForm from './components/user/NameForm';

import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

class App extends Component {
	componentDidMount() {
		this.getUsers();
	}

	state = {
		firstName: '',
		lastName: '',
		loading: false,
		alert: null,
		users: []
	};

	// current users
	getUsers = async () => {
		this.setState({ loading: true });

		const response = await axios.get(`${SERVER_URL}/users`);
		const { users } = response.data;
		this.setState({ users: users });

		this.setState({ loading: false });
	};

	render() {
		return (
			<Fragment>
				<Navbar />
				<div className='container'>
					<NameForm />
				</div>
			</Fragment>
		);
	}
}

export default App;
