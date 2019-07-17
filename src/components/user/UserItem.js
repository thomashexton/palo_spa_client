import React from 'react';
import CountUp from 'react-countup';

const UserItem = props => {
	const {
		user: {
			first_name,
			last_name,
			ascii_total,
			binary_conversion,
			consecutive_zeroes
		}
	} = props;

	return (
		<div className='card text-center'>
			<div className='card-header'>
				{first_name} {last_name}
			</div>
			<div className='card-body'>
				<p className='text-muted'>
					<strong>ASCII Total: </strong>
					<br />
					<CountUp start={0} end={ascii_total} duration={0.5} />
				</p>
				<p className='text-muted'>
					<strong>Binary Conversion: </strong>
					<CountUp start={10000000000} end={binary_conversion} duration={1} />
				</p>
				<p className='mb-0'>
					<strong>Most Consecutive Zeroes:</strong>
					<br />
					<CountUp start={100} end={consecutive_zeroes} duration={3} />
				</p>
			</div>
		</div>
	);
};

export default UserItem;
