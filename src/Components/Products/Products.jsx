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

                {
                    productList.map((productItem)=>{
                            return <Product name={productItem.name} info={productItem.info} price={productItem.price}/>
                        }
                        )
                }

                </div>
            </div>
        </section>
        </Section>
    );
}

export default Products;