import React from "react";
import Item from "./Item";
import styled from 'styled-components'

const ItemBoxes = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background-color: lightgrey;
`

const AllItems = ({ availableItems, onItemClick }) => {
    const listItems = availableItems.map((item) => {
        return <Item item={item} key={item.id} onItemClick={onItemClick} />
    })
    return (
        <div>
            <h2>AllItems</h2>
            <ItemBoxes>
                {listItems}
            </ItemBoxes>
        </div>
    )
}

export default AllItems;