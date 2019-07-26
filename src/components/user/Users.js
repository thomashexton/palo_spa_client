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

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="mt-5 users-grid">
				{users.map(user => {
					if (
						user.id ===
						usersWithMostConsecutiveZeroes.filter(u => u.id === user.id)
					) {
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
