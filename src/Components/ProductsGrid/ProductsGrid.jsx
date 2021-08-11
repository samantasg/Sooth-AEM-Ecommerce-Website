import React from 'react';
import Product from "../Product/Product";

function ProductsGrid({productList}) {
    return (
        <div className="products-component-grid">
            {productList.map((product, index) => {
                if (index === 0){
                    return <div className="one"><Product height={858} name={product.name} info={product.info} price={product.price}></Product></div>
                }else{
                    return <Product name={product.name} info={product.info} price={product.price}/>;
                }
            }
            )
            };
        </div>
    )
}

export default ProductsGrid;
