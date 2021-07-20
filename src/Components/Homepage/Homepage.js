import React from "react";
import Navigation from "../Navigation/Navigation";

function Homepage(){
    return (
        <section className="homepage">
            <div className="popup">
                <p>Free Standard Shipping on orders over $99.99</p>
            </div>
            <Navigation></Navigation>
        </section>
    );
}

export default Homepage;