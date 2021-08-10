import React, { useEffect, useState } from 'react';
import Section from '../../Section/Section';
import MenuNavigation from '../../MenuNavigation/MenuNavigation';
import { menuNavigation } from '../../Mockups/navigation';
import { items } from '../../Mockups/items';
import ProductsGrid from '../../ProductsGrid/ProductsGrid';
import { useParams } from 'react-router';
import allCategories from '../../Mockups/allCategories';

function ProductsDisplay() {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const activeCategory =
      params.slug && allCategories.filter(cat => cat.categoryName === params.slug);
    setData(activeCategory);
  }, [params]);

  return (
    <Section bgColor="#EEF3F4">
      <div className="products-display">
        <aside>
          <ul className="menu-navigation">
            {allCategories.map(cat => (
              <li>
                <span>{cat.categoryName}</span>
                <ul>
                  {cat.subcategories?.map(subcat => (
                    <li>{subcat}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </aside>
        {/* <div className="products-component-grid">
                <div className="one"><Product height={581}></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
            </div> */}
        {data && data.items && <ProductsGrid productList={data.items}></ProductsGrid>}
      </div>
    </Section>
  );
}

export default ProductsDisplay;
