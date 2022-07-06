import React from "react";
import styled from 'styled-components'

const Li = styled.li`
list-style: none;
border: 2px;
padding: .5em;
background-color: lightgrey;
width: 7em;
color: black;
`

const Item = ({ item, onItemClick }) => {

    const handleClick = function () {
        onItemClick(item)
    }

    return <Li onClick={handleClick}>{item.name} £{item.price}</Li>

}

export default Item;