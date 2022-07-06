import AllItems from "../components/AllItems";
import ShopHeader from "../components/ShopHeader";
import ShoppingBasket from "../components/ShoppingBasket";
import Item from "../components/Item";
import React, { useState, useEffect } from 'react';


const ShopContainer = () => {

    const [availableItems, setAvailableItems] = useState([
        {
            "name": "Apple",
            "price": 1,
            "id": 1
        },
        {
            "name": "Banana",
            "price": 2,
            "id": 2
        },
        {
            "name": "Orange",
            "price": 3,
            "id": 3
        },
        {
            "name": "Watermelon",
            "price": 4,
            "id": 4
        }
    ])
    const [basketItems, setBasketItems] = useState([])

    const onItemClick = (item) => {
        const updatedItems = [...basketItems, item]
        setBasketItems(updatedItems)
    }



    return (
        <>
            <h1>Fruit Shop</h1>
            <ShopHeader />
            <AllItems availableItems={availableItems} onItemClick={onItemClick} />
            <ShoppingBasket basketItems={basketItems} onItemClick={onItemClick} />
        </>
    );
}

export default ShopContainer;