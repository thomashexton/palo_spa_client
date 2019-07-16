import React from 'react';

const NameForm = props => {
	return (
		<div className='row mb-2'>
			<div className='col'>
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
					<button className='btn btn-primary btn-block'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default NameForm;
