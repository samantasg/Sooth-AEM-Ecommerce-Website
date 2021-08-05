import React from "react";

function StoreInfo() {
	return (
		<div className="store-info">
            <div className="store-info-wrapper">
            <div className="store-info-box">
                <div className="store-info-icon shop"></div>
                <p>We're offering new ways to shop.</p>
                <p><a href=''>Store locator</a></p>
            </div>
            <div className="store-info-box">
            <div className="store-info-icon shopping-cart"></div>
                <p>Buy online, pickup in store</p>
                <p><a href=''>Learn more</a></p>
            </div>
            <div className="store-info-box">
            <div className="store-info-icon telephone"></div>
                <p>Curbside pickup</p>
                <p><a href=''>Learn more</a></p>
            </div>
            </div>
        </div>
	);
}

export default StoreInfo;