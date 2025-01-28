import React from "react";
import PropTypes from "prop-types";
import { Container, Image, ProductName, ProductPrice } from './style'
import Button from "../Button/index";

function CardProducts({ product }) {
    const updateImageUrl = (url) => {
        return url.replace('http://localhost:3000', 'http://localhost:3001');
    };

    return (
        <Container>
            <Image src={updateImageUrl(product.url)} alt={`Imagem do produto ${product.name}`} />
            <div>
                <ProductName> {product.name} </ProductName>
                <ProductPrice> {product.formatedPrice} </ProductPrice>
                <Button> Adicionar </Button>
            </div>

        </Container>
    )
}

export default CardProducts

CardProducts.propTypes = {
    product: PropTypes.object
}