import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Link className='navbar-brand' to='/'>
				PALO IT Technical Test
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<NavLink exact to='/' className='nav-link' activeClassName='active'>
							Home
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							exact
							to='/features'
							className='nav-link'
							activeClassName='active'
						>
							Features
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							exact
							to='/about'
							className='nav-link'
							activeClassName='active'
						>
							About
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
