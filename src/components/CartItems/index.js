import React from "react";
import { Container, Header, Body, EmptyCart } from "./styles";
import { useCart } from "../../hooks/CartContext";
import formatCurrency from "../../utils/formatCurrency";

export function CartItems() {
    const { cartProducts, increaseProducts, decreaseProducts } = useCart()
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
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ?
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={updateImageUrl(product.url)} alt={`Imagem do produto ${product.name}`} />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className="quantityContainer">
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>

                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
                ))
                : (
                    <EmptyCart>Ops! Carrinho Vazio</EmptyCart>
                )
            }
        </Container>
    )

}