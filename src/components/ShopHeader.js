import React from "react";
import styled from 'styled-components'
import Checkout from "./checkout";

const Title = styled.h1`
font-size: 2em;
text-align: center;
color: white;
background-color: dodgerblue;
margin: 0;
padding: 1em;
display:grid;
grid-template-columns: minmax(50px, 75%) 1fr;
`
const ShopHeader = ({ runningTotal }) => {

    return (
        <>
            <Title>
                Fruit Shop
                <Checkout runningTotal={runningTotal} />
            </Title>
        </>
    )
}

export default ShopHeader;