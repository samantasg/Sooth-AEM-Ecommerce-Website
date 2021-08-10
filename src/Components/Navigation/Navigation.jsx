import React from "react";
import Section from "../Section/Section";
import {Link} from "react-router-dom";

function Navigation() {
	return (
		<Section bgColor="#e0e4e7">
		<nav className='navigation-bar'>
			<div className="nav-1">
				<div>
				<ul>
					<Link to="/about"><li><a href=''>About</a></li></Link>
					<li><a href=''>Consultation</a></li>
				</ul>
				<Link to="/"><p>sooth</p></Link>
				<ul>
					<li><a href=''>Cart</a></li>
				<Link to="/login"><li><a href=''>Login</a></li></Link>
				</ul>
				</div>
			</div>
			<div className="nav-2">
				<div>
					<ul>
					<Link to="/acne"><li><a href=''>Acne</a></li></Link>
						<li><a href=''>Sun</a></li>
						<li><a href=''>Eczema</a></li>
						<li><a href=''>Psoriasis</a></li>
						<li><a href=''>Vitiligio</a></li>
					</ul>
				</div>
			</div>
		</nav>
		</Section>
	);
}

export default Navigation;