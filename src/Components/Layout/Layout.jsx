import React from "react";
import Banner1 from "../Banner1/Banner1";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Dropdown from "../Dropdown/Dropdown";

function Layout({children}) {
	return (
		<>
			<Banner1/>
			
			<Navigation/>
			{children}
			<Footer/>
		</>
	);
}

export default Layout;