import React from "react";

function Navigation() {
	return (
		<nav className='navigation-bar'>
			<div className="nav-1">
				<div>
				<ul>
					<li>About</li>
					<li>Consultation</li>
				</ul>
				<p>sooth</p>
				<ul>
					<li>Cart</li>
					<li>Login</li>
				</ul>
				</div>
			</div>
			<div className="nav-2">
				<div>
					<ul>
						<li>Acne</li>
						<li>Sun</li>
						<li>Eczema</li>
						<li>Psoriasis</li>
						<li>Vitiligio</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;