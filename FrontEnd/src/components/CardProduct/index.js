import React from "react";
import PropTypes from "prop-types";
import {Container, Image, ProductName, ProductPrice, Button} from './style'

function CardProducts({ product }) {
    return (
        <Container>
            <Image />
            <ProductName></ProductName>
            <ProductPrice></ProductPrice>
            <Button> </Button>

        </Container>
    )
}

export default CardProducts

CardProducts.propTypes = {
    product: PropTypes.object
}