import React from "react";
import Banner1 from "../Banner1/Banner1";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import MenuNavigation from "../MenuNavigation/MenuNavigation";
import {menuNavigation} from "../Mockups/navigation";

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