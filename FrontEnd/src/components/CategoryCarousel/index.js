import React, { useEffect, useState } from "react";
import Category from '../../assets/categorias-Photoroom.png'
import { Container, CategoryImg, ContainerItems, Image, Button } from "./styles";
import Carousel from 'react-elastic-carousel'
import api from '../../services/api'

export function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            setCategories(data)
        }

        loadCategories()
    }, [])

    const updateImageUrl = (url) => {
        return url.replace('http://localhost:3000', 'http://localhost:3001');
    };

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoryImg src={Category} alt="Carrossel de categorias" />
            <Carousel
                itemsToShow={3}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >
                {
                    categories && categories.map(category => (
                        <ContainerItems key={category.id}>
                            <Image src={updateImageUrl(category.url)} alt={`Imagem da categoria ${category.name}`} />
                            <Button>{category.name}</Button>
                        </ContainerItems>
                    ))}
            </Carousel>
        </Container>
    )

};