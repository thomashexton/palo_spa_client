import React, { Fragment } from 'react';

export const SERVER_URL = 'http://localhost:3000';

const NameForm = props => {
	return (
		<Fragment>
			<form onSubmit={props.onSubmit}>
				<div className='form-group'>
					<input
						name='firstName'
						type='text'
						placeholder='Enter first name.'
						value={props.firstName}
						onChange={props.onChange}
						required
						className='form-control'
					/>
				</div>
				<div className='form-group'>
					<input
						name='lastName'
						type='text'
						placeholder='Enter last name.'
						value={props.lastName}
						onChange={props.onChange}
						required
						className='form-control'
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</Fragment>
	);
};

export default NameForm;
