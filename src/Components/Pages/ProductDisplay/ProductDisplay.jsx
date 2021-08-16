import React, {useEffect, useState} from 'react';
import Section from '../../Section/Section';
import {Heading, Heading4} from '../../Heading/Heading';
import { BodyText, BodyText3, BodyText4 } from '../../BodyText/BodyText';
import Button from '../../Button/Button';
import Accordion from "../../Accordion/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {items} from "../../Mockups/items";
import { useParams} from "react-router";

function ProductDisplay() {
    const params = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const activeCategory =
        params.slug && items.filter(product => product.name === params.slug);
        setData(activeCategory);
    }, [params]);

    return (
        <Section bgColor="#EEF3F4">
            <div className="product-display-container">
                <div className="product-display-imgs">
                <div className="product-img">
                    <div className="arrow left"></div>
                    <div className="arrow right"></div>
                </div>
                <div className="product-imgs">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                </div>
                {items.map(product => (
                    <div className="product-display-info">
                    <Heading style={{width: 350}}>All Natural {product.name}.</Heading>
                    <div className="review-stars">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <p>54 reviews</p>
                    </div>
                    <BodyText4 style={{marginTop: 20, marginBottom: 20}}>{product.price}</BodyText4>
                    <BodyText style={{fontWeight: "bold"}}>Cleaner, all natural, skin-care solutions</BodyText>
                    <BodyText3 style={{marginBottom: 20}}>Our custom Vitiligio Balm works for all skin types. Clean ingredients keep you confident that you’re using only the best solutions for your skin.</BodyText3>
                    
                    <div className="product-shopping-details">
                        <div className="shipping-details">
                            <Accordion></Accordion>
                        </div>
                            <BodyText>Quantity</BodyText>
                            <Button>-</Button><Button>1</Button><Button>+</Button>
                            <Button style={{marginLeft: 144}}><FontAwesomeIcon color='#2E2E22' icon={faShoppingCart} style={{marginRight: 12}}></FontAwesomeIcon>Add to cart </Button>
                    </div>
                </div>
                )
                )
                }
            </div>
        </Section>
    )
}

export default ProductDisplay
