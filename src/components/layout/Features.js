import React from 'react';

function Features() {
	return (
		<div>
			<h4>List of features still to add;</h4>
			<ul>
				<li>CSRF tokens.</li>
				<li>Current list of users on page load.</li>
				<li>React Router for pagination.</li>
				<li>
					DB checker, to see if name already exists. If yes, returns consecutive
					zeroes.
				</li>
			</ul>
		</div>
	);
}

export default Features;
