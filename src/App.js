import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import NameForm from './components/user/NameForm';
import Users from './components/user/Users';

import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

class App extends Component {
	componentDidMount() {
		this.getUsers();
	}

	state = {
		loading: false,
		// alert: null,
		users: [],
		user: {
			firstName: '',
			lastName: '',
			userID: null,
			consecutiveZeroes: null
		}
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
			})
			.catch(error => console.log(error));

		this.setState({ firstName: '', lastName: '' });
	};

	render() {
		return (
			<Fragment>
				<Navbar />
				<div className='container d-flex flex-row justify-content-center'>
					<div className='col-12 col-md-6 pt-5'>
						<div className='row'>
							<div className='col text-center'>
								<h4>
									Enter your name to discover how many consecutive 0s it has,
									once converted to binary.
								</h4>
							</div>
						</div>
						<div className='row'>
							<div className='col'>
								<NameForm
									onChange={this.onChange}
									onSubmit={this.onSubmit}
									firstName={this.state.firstName}
									lastName={this.state.lastName}
								/>
							</div>
						</div>
						{/* <UserZeroes user={this.state.user} /> */}
						<Users users={this.state.users} loading={this.state.loading} />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
