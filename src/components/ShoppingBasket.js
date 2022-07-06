import React from "react";
import Item from "./Item";
import styled from 'styled-components'

const ShoppingBasket = ({ basketItems, onItemClick }) => {
    const listBasketItems = basketItems.map((item) => {
        return <Item item={item} key={item.id} onItemClick={onItemClick} />
    })
    return (
        <div>
            <h2>ShoppingBasket</h2>
            <ul>
                {listBasketItems}
            </ul>
        </div>
    )
}

export default ShoppingBasket;