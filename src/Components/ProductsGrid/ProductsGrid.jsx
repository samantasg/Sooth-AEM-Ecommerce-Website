import React from 'react';
import Product from "../Product/Product";
import { useParams} from "react-router";

function ProductsGrid({productList}) {
    const params = useParams();
    return (
        <div className="products-component-grid">
            {
                productList.map((product) => {
                 if(product.categoryName === params.slug){
                     return (product.items.map((productItem, index) => {
                        if (index === 0){
                            return <div className="one"> <Product height={858} key={index} name={productItem.name} info={productItem.info} price={productItem.price}/></div>
                        }else{
                            return <Product key={index} name={productItem.name} info={productItem.info} price={productItem.price}/>
                        }
                    }
                    ))
                }
            })
            }
        </div>
    )
}

export default ProductsGrid;


