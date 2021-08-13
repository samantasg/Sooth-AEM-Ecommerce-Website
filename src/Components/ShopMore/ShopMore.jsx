import React from "react";
import { Button, WhiteButton } from "../Button/Button";
import {Heading2} from "../Heading/Heading"
import {BodyText2} from "../BodyText/BodyText";

function ShopMore(props) {
	return (
		<section className="shop-more" style={{flexDirection: (props.flexDirection)}}>
            <div className="shop-more-info">
                <div style={{marginLeft: (props.margin)}}>
                    <Heading2 style={{marginBottom: 15}}>{props.title}</Heading2>
                    <BodyText2 style={{marginBottom: 40}}>{props.info}</BodyText2>
                    <Button>Shop more</Button>
                </div>
            </div>
            <div className="shop-more-img" style={{backgroundImage: `url(${props.background})`}}></div>
        </section>
	);
}

export default ShopMore;