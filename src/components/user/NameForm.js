import React, { Component, Fragment } from 'react';
import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

class NameForm extends Component {
	state = {
		firstName: '',
		lastName: ''
	};

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();

		axios
			.post(`${SERVER_URL}/users`, {
				first_name: this.state.firstName,
				last_name: this.state.lastName
			})
			.then(response => console.log(response))
			.catch(error => console.log(error));

		this.setState({ firstName: '', lastName: '' });
	};

	render() {
		return (
			<Fragment>
				<form onSubmit={this.onSubmit}>
					<input
						name='firstName'
						type='text'
						placeholder='First name.'
						value={this.state.firstName}
						onChange={this.onChange}
						required
					/>
					<input
						name='lastName'
						type='text'
						placeholder='Last name?'
						value={this.state.lastName}
						onChange={this.onChange}
						required
					/>
					<button>Submit</button>
				</form>
			</Fragment>
		);
	}
}

export default NameForm;
