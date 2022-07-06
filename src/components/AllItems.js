import React from "react";
import Item from "./Item";

const AllItems = ({ availableItems, onItemClick }) => {
    const listItems = availableItems.map((item) => {
        return <Item item={item} key={item.id} onItemClick={onItemClick} />
    })
    return (
        <>
            <h2>AllItems</h2>
            <ul>
                {listItems}
            </ul>
        </>
    )
}

export default AllItems;