import React from 'react';

function Features() {
	return (
		<div className='row'>
			<div className='col col-md-5 m-auto'>
				<div class='card'>
					<h4 class='card-header'>List of features to implement.</h4>
					<ul class='list-group list-group-flush'>
						<li class='list-group-item'>
							<strike>CSRF tokens?</strike> Turns our Rails supports this out of
							the box.
						</li>
						<li class='list-group-item'>
							<strike>Current list of users on page load.</strike>
						</li>
						<li class='list-group-item'>
							<strike>React Router for pagination.</strike>
						</li>
						<li class='list-group-item'>
							<strike>Correct/setup active link on Navbar.</strike> NavLink from
							React-Router to the rescue!
						</li>
						<li class='list-group-item'>Apply PropTypes.</li>
						<li class='list-group-item'>
							DB checker, to see if name already exists. If yes, returns
							consecutive zeroes.
						</li>
						<li className='list-group-item'>
							Investigate and implement server side rendering, have to convert
							CLI made 'create-react-app'.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Features;
