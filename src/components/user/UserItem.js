import React from 'react';

const UserItem = props => {
	const {
		user: { first_name, last_name, consecutive_zeroes }
	} = props;

	return (
		<div className='card text-center mt-5'>
			<div className='card-body'>
				<h4 className='card-title'>
					{first_name} {last_name}
				</h4>
				<p className='card-subtitle text-muted'>
					Equates to {consecutive_zeroes} consecutive zeroes.
				</p>
			</div>
		</div>
	);
};

export default UserItem;
