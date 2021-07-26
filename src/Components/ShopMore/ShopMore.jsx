import React from "react";
import { WhiteButton } from "../Button/Button";
import {Heading2} from "../Heading/Heading"
import {BodyText2} from "../BodyText/BodyText";

function ShopMore() {
	return (
		<section className="shop-more">
            <div className="shop-more-info">
                <div>
                    <Heading2>Clean products that deliver better solutions</Heading2>
                    <BodyText2>A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</BodyText2>
                    <WhiteButton>Shop more</WhiteButton>
                </div>
            </div>
            <div className="shop-more-img"></div>
        </section>
	);
}

export default ShopMore;