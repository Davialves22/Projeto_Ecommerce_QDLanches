import React from "react";
import CartLogo from '../../assets/Carrinhobanner.jpg'
import { Container, CartImg, Wrapper } from "./styles";
import { CartItems, CartResume } from '../../components'

export function Cart() {
    return (
        <Container>
            <CartImg src={CartLogo} alt="CartLogo" />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    )

};