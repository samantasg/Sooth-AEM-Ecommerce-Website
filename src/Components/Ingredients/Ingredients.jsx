import React from "react";
import {Heading4} from "../Heading/Heading";
import {BodyText2} from "../BodyText/BodyText";
import Ingredient from "../Ingredient/Ingredient";

function Ingredients({ingredientsList}) {
	return (
		<section className="ingredients">
            <div className="ingredients-wrapper">
                <div className="ingredients-text-box">
                    <Heading4>We use the best</Heading4>
                    <BodyText2>Explore our innovative skincare products</BodyText2>
                </div>
                <div className="ingredients-grid">
                    {ingredientsList.map((ingredient) => {
                        return <Ingredient name={ingredient.name} info={ingredient.info}></Ingredient> 
                    }
                    )
                    }
                </div>
            </div>
        </section>
	);
}

export default Ingredients;