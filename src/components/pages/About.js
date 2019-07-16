import React from 'react';

import reactLogo from './react.png';
import railsLogo from './rails.png';

export default function About() {
	return (
		<div className='row text-center'>
			<div className='col offset-md-2 col-md-4'>
				<div className='card'>
					<img className='card-img-top' src={railsLogo} alt='react logo' />
					<div className='card-body'>
						<h4 className='card-title'>Backend</h4>
						<a
							href='https://github.com/thomashexton/palo_spa_server'
							className='btn btn-outline-dark btn-block'
						>
							Github Link
						</a>
					</div>
				</div>
			</div>
			<div className='col col-md-4'>
				<div className='card'>
					<img className='card-img-top' src={reactLogo} alt='rails logo' />
					<div className='card-body'>
						<h4 className='card-title'>Frontend</h4>
						<a
							href='https://github.com/thomashexton/palo_spa_client'
							className='btn btn-outline-dark btn-block'
						>
							Github Link
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
