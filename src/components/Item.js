import React from "react";

const Item = ({ item, onItemClick }) => {

    const handleClick = function () {
        onItemClick(item)
    }

    return <li onClick={handleClick}>{item.name} £{item.price}</li>

}

export default Item;