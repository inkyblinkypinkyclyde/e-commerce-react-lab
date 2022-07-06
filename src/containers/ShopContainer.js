import AllItems from "../components/AllItems";
import ShopHeader from "../components/ShopHeader";
import ShoppingBasket from "../components/ShoppingBasket";
import Item from "../components/Item";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const ShopDiv = styled.div`
display: grid;
grid-template-columns: minmax(50px, 75%) 1fr;
background-color: darkgrey;
color: white;
/* gap: 10px; */
`


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
        },
        {
            "name": "Tomato",
            "price": 4,
            "id": 5
        },
        {
            "name": "Lemon",
            "price": 4,
            "id": 5
        },
        {
            "name": "Pineapple",
            "price": 4,
            "id": 6
        },
        {
            "name": "Tomato",
            "price": 4,
            "id": 7
        },
        {
            "name": "Kiwis",
            "price": 6,
            "id": 8
        },
        {
            "name": "Blueberries",
            "price": 5,
            "id": 9
        }
    ])
    const [basketItems, setBasketItems] = useState([])
    const [runningTotal, setRunningTotal] = useState(0)

    const onItemClick = (item) => {
        const updatedItems = [...basketItems, item]
        setBasketItems(updatedItems)
        const newTotal = runningTotal + item.price
        setRunningTotal(newTotal)
    }



    return (
        <>
            <ShopHeader runningTotal={runningTotal} />
            <ShopDiv>
                <AllItems availableItems={availableItems} onItemClick={onItemClick} />
                <ShoppingBasket basketItems={basketItems} onItemClick={onItemClick} />
            </ShopDiv>
        </>
    );
}

export default ShopContainer;