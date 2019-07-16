import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import NameForm from './components/user/NameForm';
import Users from './components/user/Users';

import Features from './components/pages/Features';
import About from './components/pages/About';

import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';
// const SERVER_URL = 'https://palo-spa-server.herokuapp.com';

class App extends Component {
	componentDidMount() {
		this.getUsers();
	}

	state = {
		loading: false,
		// alert: null,
		users: [],
		firstName: '',
		lastName: '',
		userID: null,
		consecutiveZeroes: null
	};

	// current users for page index load
	getUsers = async () => {
		this.setState({ loading: true });

		const response = await axios.get(`${SERVER_URL}/users`);
		const { users } = response.data;
		this.setState({ users: users });

		this.setState({ loading: false });
	};

	// handle onChange for SPA
	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	// handle submit request for form
	onSubmit = event => {
		event.preventDefault();

		axios
			.post(`${SERVER_URL}/users`, {
				first_name: this.state.firstName,
				last_name: this.state.lastName
			})
			.then(response => {
				const { user_id, consecutive_zeroes } = response.data;
				// console.log(response.data);
				this.setState({
					userID: user_id,
					consecutiveZeroes: consecutive_zeroes
				});
				this.getUsers();
			})
			.catch(error => console.log(error));

		this.setState({ firstName: '', lastName: '' });
	};

	render() {
		return (
			<Router>
				<Fragment>
					<Navbar />
					<div className='container d-flex flex-column justify-content-center py-5'>
						<Switch>
							<Route
								exact
								path='/'
								render={props => {
									return (
										<Fragment>
											<div className='col-12 col-md-6 m-auto'>
												<Header />
												<NameForm
													onChange={this.onChange}
													onSubmit={this.onSubmit}
													firstName={this.state.firstName}
													lastName={this.state.lastName}
												/>
											</div>
											<Users
												users={this.state.users}
												loading={this.state.loading}
											/>
										</Fragment>
									);
								}}
							/>

							<Route exact path='/features' component={Features} />

							<Route exact path='/about' component={About} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		);
	}
}

export default App;
