import React from "react";

function Navigation() {
	return (
		<nav className='navigation-bar'>
			<div className="nav-1">
				<div>
				<ul>
					<li><a href=''>About</a></li>
					<li><a href=''>Consultation</a></li>
				</ul>
				<p>sooth</p>
				<ul>
					<li><a href=''>Cart</a></li>
					<li><a href=''>Login</a></li>
				</ul>
				</div>
			</div>
			<div className="nav-2">
				<div>
					<ul>
						<li><a href=''>Acne</a></li>
						<li><a href=''>Sun</a></li>
						<li><a href=''>Eczema</a></li>
						<li><a href=''>Psoriasis</a></li>
						<li><a href=''>Vitiligio</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;