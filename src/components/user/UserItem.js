import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { first_name, last_name } }) => {
	return (
		<div className='card text-center'>
			<h3>
				{last_name},{first_name}
			</h3>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
