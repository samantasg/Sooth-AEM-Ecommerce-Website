import React from 'react';
import Heading from "../Heading/Heading";
import {BodyText4} from "../BodyText/BodyText";

function RecentNews() {
    return (
        <div className="recent-news">
            <Heading>Recent News</Heading>
            <BodyText4>Explore our innovative skincare products</BodyText4>
            <div className="instagram-posts">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default RecentNews;
