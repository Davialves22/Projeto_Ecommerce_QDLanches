import React from "react";
import CartLogo from '../../assets/Carrinhobanner.jpg'
import { Container, CartImg } from "./styles";
import { CartItems } from '../../components'

export function Cart() {
    return (
        <Container>
            <CartImg src={CartLogo} alt="CartLogo" />
            <CartItems />
        </Container>
    )

};