import React from "react";
import Product from "../Product/Product";
import Section from "../Section/Section";

function Products ({listName,productList, isPopular, isRecommended, isTopRated}) {

    return(
        <Section bgColor="#EEF3F4">
        <section className="products">
            <div className="products-section">
                <div className="products-section-text">
                    <p>{listName}</p>
                    <p>Shop all products</p>
                </div>
                <div className="products-section-box">

                {productList.map((product) => {
                    if (isPopular){
                        if (product.isPopular){
                            return <Product name={product.name} info={product.info} price={product.price}/>;
                        }
                    }else if(isRecommended){
                        if (product.isRecommended){
                            return <Product name={product.name} info={product.info} price={product.price}/>;
                        }
                    }else if (isTopRated){
                        if (product.isTopRated){
                            return <Product name={product.name} info={product.info} price={product.price}/>;
                        }
                    }
				})}
                </div>
            </div>
        </section>
        </Section>
    );
}

export default Products;