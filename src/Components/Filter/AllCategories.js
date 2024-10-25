import Filter from "./Filter";
import React from 'react';

const AllCategories = () => {
    return(
        <div className="categories">
            {[ "Bestsellers", "Dresses", "Tops", "Shoes", "Weddings", "Bottoms", "All Categories"]
            .map((category, index) => <Filter key={index} category={category}/>
             )}
        </div>
    )
}

export default AllCategories;