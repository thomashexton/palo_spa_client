import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import './users.css';

const Users = props => {
	const {
		users,
		usersWithMostConsecutiveZeroes,
		loading,
		_handleDelete,
	} = props;

	// filter the usersWithMostConsecutiveZeroes array to see if user.id exists in it
	function userExistsInMostConsecutiveZeroes(userId) {
		const userExists = usersWithMostConsecutiveZeroes.filter(
			user => user.id === userId
		);
		return userExists.length > 0 ? true : false;
	}

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="mt-5 users-grid">
				{users.map(user => {
					if (userExistsInMostConsecutiveZeroes(user.id)) {
						return (
							<UserItem
								key={user.id}
								user={user}
								_handleDelete={_handleDelete}
								userWithMostConsecutiveZeroes={true}
							/>
						);
					} else {
						return (
							<UserItem
								key={user.id}
								user={user}
								_handleDelete={_handleDelete}
							/>
						);
					}
				})}
			</div>
		);
	}
};

export default Users;
