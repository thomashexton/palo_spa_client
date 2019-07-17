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
		users: [],
		firstName: '',
		lastName: ''
	};

	// current users for page index load
	getUsers = async () => {
		this.setState({ loading: true });

		const response = await axios.get(`${SERVER_URL}/users`);
		const { users } = response.data;
		this.setState({ users });

		this.setState({ loading: false });
	};

	// handle onChange for SPA
	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	// handle form submit
	onSubmit = event => {
		event.preventDefault();

		// removing any spaces at the end of the strings
		const first_name = this.state.firstName.trim();
		const last_name = this.state.lastName.trim();

		axios
			.post(`${SERVER_URL}/users`, {
				first_name,
				last_name
			})
			.then(response => {
				console.log(response.data);
				this.setState(prevState => {
					return {
						users: [response.data, ...prevState.users]
					};
				});
			})
			.catch(error => console.log(error));

		this.setState({ firstName: '', lastName: '' });
	};

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Fragment>
					<Navbar />
					<div className='container m-auto py-5'>
						<Switch>
							<Route
								exact
								path='/'
								render={props => {
									return (
										<div className='row no-gutters d-flex flex-column justify-content-center'>
											<div className='col-12 col-md-5 m-auto no-gutters'>
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
										</div>
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
