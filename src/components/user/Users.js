import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import './users.css';

const Users = props => {
	const { users, loading } = props;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="mt-5 users-grid">
				{users.map(user => {
					return (
						<UserItem
							key={user.id}
							user={user}
							_handleDelete={props._handleDelete}
						/>
					);
				})}
			</div>
		);
	}
};

export default Users;
