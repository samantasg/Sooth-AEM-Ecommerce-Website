import React from "react";
import Banner1 from "../Banner1/Banner1";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function Layout({children, showBanner}) {
	return (
		<>
			{showBanner && <Banner1/>}
			<Navigation/>
			{children}
			<Footer/>
		</>
	);
}

export default Layout;