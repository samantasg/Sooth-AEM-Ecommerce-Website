import React from "react";
import Banner1 from "../Banner1/Banner1";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ProductDisplay from "../Pages/ProductDisplay/ProductDisplay";

function Layout({children, showBanner}) {
	return (
		<>
			{showBanner && <Banner1/>}
			<Navigation/>
			{/* <ProductDisplay></ProductDisplay> */}
			{children}
			<Footer/>
		</>
	);
}

export default Layout;