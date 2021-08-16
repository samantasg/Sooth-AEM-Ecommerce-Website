import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import {items} from "../Mockups/items";

function Product(props) {
    return (
        <div className="product">
            {items.map(product => (
            <Link to={`/product/${product.name}`}>
                <div className="product-bg-img" style={{height: (props.height)}}></div>
            {/* <div className="product-stamp">
                <p>New!</p>
            </div> */}
            <div className="product-info">
                <p>{product.name}</p>
                <p>{product.info}</p>
                <p>{product.price}</p>
            </div>
        </Link>
            )
            )
            }
            <Button fullWidth><FontAwesomeIcon color='#2E2E22' icon={faShoppingCart} style={{marginRight: 12}}></FontAwesomeIcon>Add to cart </Button>
        </div>
    );
}

export default Product;