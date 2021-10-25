import React from 'react'
import styled from 'styled-components'
import {accessoires} from "../data"
import { Product } from './Product'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const Accessoires = () => {
    return (
        <Container>
            {accessoires.map((item)=>(
                <Product item={item} key={item.id} />

            ))}
        </Container>
    )
}
