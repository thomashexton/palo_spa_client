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

// let SERVER_URL = "http://localhost:3000";
const SERVER_URL = 'https://palo-spa-server.herokuapp.com';

class App extends Component {
	state = {
		loading: false,
		users: [],
		firstName: '',
		lastName: '',
	};

	componentDidMount() {
		this.getUsers();
	}

	// current users for page index load
	getUsers = async () => {
		this.setState({ loading: true });

		const response = await axios.get(`${SERVER_URL}/users`);
		console.log(response.data);

		const { users } = response.data;
		this.setState({ users, loading: false });
	};

	// handle onChange for SPA
	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	// handle form submit
	_handleSubmit = event => {
		event.preventDefault();

		// removing any spaces at the end of the strings
		const first_name = this.state.firstName.trim();
		const last_name = this.state.lastName.trim();

		axios
			.post(`${SERVER_URL}/users`, {
				first_name,
				last_name,
			})
			.then(response => {
				this.setState({
					users: [response.data.user, ...this.state.users],
				});
			})
			.catch(error => console.log(error));
		this.setState({ firstName: '', lastName: '' });
	};

	// handle deletion of user
	_handleDelete = async event => {
		const id = event.target.id;

		const response = await axios.delete(`${SERVER_URL}/users/${id}`);
		const { users } = response.data;
		this.setState({ users });
	};

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Fragment>
					<Navbar />
					<div className="container m-auto py-5">
						<Switch>
							<Route
								exact
								path="/"
								render={props => {
									return (
										<div className="row no-gutters d-flex flex-column justify-content-center">
											<div className="col-12 col-md-5 m-auto no-gutters">
												<Header />
												<NameForm
													onChange={this.onChange}
													onSubmit={this._handleSubmit}
													firstName={this.state.firstName}
													lastName={this.state.lastName}
												/>
											</div>
											<Users
												users={this.state.users}
												loading={this.state.loading}
												_handleDelete={this._handleDelete}
											/>
										</div>
									);
								}}
							/>

							<Route exact path="/features" component={Features} />

							<Route exact path="/about" component={About} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		);
	}
}

export default App;
