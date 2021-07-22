import React from "react";
import { WhiteButton } from "../Button/Button";

function ShopMore() {
	return (
		<section className="shop-more">
            <div className="shop-more-info">
                <div>
                    <h2>Clean products that <span>deliver better solutions</span></h2>
                    <p>A healthier you from the inside out. We’ve sourced the 
                       <span>cleanest ingredients to create a line of clean skin care</span>treatments that leave you feeling your best</p>
                    <WhiteButton>Shop more</WhiteButton>
                </div>
            </div>
            <div className="shop-more-img"></div>
        </section>
	);
}

export default ShopMore;