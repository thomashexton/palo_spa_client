import React from 'react';

const UserItem = props => {
	const {
		user: { first_name, last_name, consecutive_zeroes }
	} = props;

	return (
		<div className='card'>
			<div className='card-header'>
				{first_name} {last_name}
			</div>
			<div className='card-body'>
				<p className='card-subtitle text-muted'>
					When converted, this name has {consecutive_zeroes} consecutive zeroes.
				</p>
			</div>
		</div>
	);
};

export default UserItem;
