import React from "react";
import { Container, Header, Body } from "./styles";
import { useCart } from "../../hooks/CartContext";
import formatCurrency from "../../utils/formatCurrency";

export function CartItems() {
    const { cartProducts } = useCart()
    console.log(cartProducts)

    const updateImageUrl = (url) => {
        return url.replace('http://localhost:3000', 'http://localhost:3001');
    };

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.map(product => (
                <Body key={product.id}>
                    <img src={updateImageUrl(product.url)} alt={`Imagem do produto ${product.name}`} />
                    <p>{product.name}</p>
                    <p>{formatCurrency(product.price)}</p>
                    <p>{product.quantity}</p>
                    <p>{formatCurrency(product.quantity * product.price)}</p>
                </Body>
            ))}
        </Container>
    )

}