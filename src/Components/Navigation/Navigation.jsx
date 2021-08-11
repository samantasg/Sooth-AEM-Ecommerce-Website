import React from "react";
import Section from "../Section/Section";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { allCategories } from "../Mockups/allCategories";

function Navigation() {
	return (
		<Section bgColor="#e0e4e7">
		  <nav className="navigation-bar">
			<div className="nav-1">
			  <div>
				<ul>
				  <Link to="/about">
					<li><a href="/">About</a></li>
				  </Link><li><a href="/">Consultation</a></li>
				</ul>
				<Link to="/"><p>sooth</p></Link>
				<ul>
				  <li><a href=""><FontAwesomeIcon color='#2E2E22' icon={faSearch} style={{marginRight: 40}} ></FontAwesomeIcon>Cart</a></li>
				  <Link to="/login"><li><a href="">Login</a></li></Link>
				</ul>
			  </div>
			</div>
			<div className="nav-2">
			  <div>
				<ul>
				  {allCategories.map(cat => (
					<li>
					  <a>
						{' '}
						<Link to={`/category/${cat.categoryName}`}>{cat.categoryName}</Link>
					  </a>
					</li>
				  ))}
				</ul>
			  </div>
			</div>
		  </nav>
		</Section>
	  );
}

export default Navigation;