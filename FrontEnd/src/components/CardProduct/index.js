import React from "react";
import PropTypes from "prop-types";
import { Container, Image, ProductName, ProductPrice } from './style'
import { Button } from "../Button";
import { useCart } from "../../hooks/CartContext";

export function CardProducts({ product }) {
    const { putProductsInCart } = useCart()

    const updateImageUrl = (url) => {
        return url.replace('http://localhost:3000', 'http://localhost:3001');
    };

    return (
        <Container>
            <Image src={updateImageUrl(product.url)} alt={`Imagem do produto ${product.name}`} />
            <div>
                <ProductName> {product.name} </ProductName>
                <ProductPrice> {product.formatedPrice} </ProductPrice>
                <Button onClick={() => putProductsInCart(product)}> Adicionar </Button>
            </div>

        </Container>
    )
}


CardProducts.propTypes = {
    product: PropTypes.object
}