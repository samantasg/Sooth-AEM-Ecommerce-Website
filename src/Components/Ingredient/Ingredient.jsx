import React from "react";
import {BodyText , BodyText3} from "../BodyText/BodyText";

function Ingredient(props) {
    return (
        <div className="ingredient">
            <div className="ingredient-bg-img"></div>
            <div className="ingredient-info">
            <BodyText>{props.ingredientName}</BodyText>
            <BodyText3>Lorem ipsum dolar et al</BodyText3>
            </div>
        </div>
    );
}

export default Ingredient;