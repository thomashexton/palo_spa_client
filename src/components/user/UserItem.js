import React from 'react';
import CountUp from 'react-countup';

const UserItem = props => {
	const {
		user: {
			id,
			first_name,
			last_name,
			ascii_total,
			binary_conversion,
			consecutive_zeroes,
		},
	} = props;

	return (
		<div className="card text-center">
			<div className="card-header">
				{first_name} {last_name}
				<button
					type="button"
					class="close"
					onClick={props._handleDelete}
					id={id}
					style={{ marginTop: '-1.5%' }}
				>
					<span>&times;</span>
				</button>
			</div>
			<div className="card-body">
				<p className="text-muted">
					<strong>ASCII Total: </strong>
					<br />
					<CountUp end={ascii_total} duration={0.5} />
				</p>
				<p className="text-muted">
					<strong>Binary Conversion: </strong>
					<br />
					<CountUp start={10000000000} end={binary_conversion} duration={1} />
				</p>
				<p className="mb-0">
					<strong>Most Consecutive Zeroes:</strong>
					<br />
					<CountUp start={100} end={consecutive_zeroes} duration={3} />
				</p>
			</div>
		</div>
	);
};

export default UserItem;
