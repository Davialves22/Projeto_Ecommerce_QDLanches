import React, { useEffect } from "react";
import Category from '../../assets/categorias-Photoroom.png'
import { Container, CategoryImg } from "./styles";
import api from '../../services/api'

function CategoryCarousel() {
    useEffect(() => {

        async function loadCategories() {
            const response = api.get('categories')

            console.log(response)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImg src={Category} alt="Carrossel de categorias" />
        </Container>
    )

};

export default CategoryCarousel