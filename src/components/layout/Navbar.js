import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
	constructor() {
		super();
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}
	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		const collapsed = this.state.collapsed;
		const classOne = collapsed
			? 'collapse navbar-collapse'
			: 'collapse navbar-collapse show';
		const classTwo = collapsed
			? 'navbar-toggler navbar-toggler-right collapsed'
			: 'navbar-toggler navbar-toggler-right';

		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<Link className='navbar-brand' to='/'>
					PALO IT Technical Test
				</Link>
				<button
					onClick={this.toggleNavbar}
					className={`${classTwo}`}
					type='button'
					data-toggle='collapse'
					data-target='#navbarResponsive'
					aria-controls='navbarResponsive'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>

				<div className={`${classOne}`} id='navbarResponsive'>
					<div className='navbar-nav ml-auto'>
						<NavLink
							exact
							to='/'
							className='nav-item nav-link'
							activeClassName='active'
						>
							Home
						</NavLink>
						<NavLink
							exact
							to='/features'
							className='nav-item nav-link'
							activeClassName='active'
						>
							Features
						</NavLink>
						<NavLink
							exact
							to='/about'
							className='nav-item nav-link'
							activeClassName='active'
						>
							About
						</NavLink>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
