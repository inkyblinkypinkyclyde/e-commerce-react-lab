import React from "react";
import Item from "./Item";

const ShoppingBasket = ({ basketItems, onItemClick }) => {
    const listBasketItems = basketItems.map((item) => {
        return <Item item={item} key={item.id} onItemClick={onItemClick} />
    })
    return (
        <>
            <h2>ShoppingBasket</h2>
            <ul>
                {listBasketItems}
            </ul>
        </>
    )
}

export default ShoppingBasket;