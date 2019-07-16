onSubmit = async event => {
	event.preventDefault();

	const response = await axios.post(`${SERVER_URL}/users`, {
		first_name: this.state.firstName,
		last_name: this.state.lastName
	});

	const {
		user_id: userID,
		consecutive_zeroes: consecutiveZeroes
	} = response.data;

	this.setState({ userID, consecutiveZeroes });

	this.setState({ firstName: '', lastName: '' });
};
