import React, { useEffect, useState } from "react";
import Offers from '../../assets/oferta-Photoroom.png'
import { Container, OffersImg, ContainerItems, Image, Button } from "./styles";
import Carousel from 'react-elastic-carousel'
import api from '../../services/api'
import formatCurrency from "../../utils/formatCurrency";


export function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer).map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })
            setOffers(onlyOffers)
        }

        loadOffers()
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
            <OffersImg src={Offers} alt="Logo de ofertas" />
            <Carousel
                itemsToShow={3}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >
                {
                    offers && offers.map(product => (
                        <ContainerItems key={product.id}>
                            <Image src={updateImageUrl(product.url)} alt={`Imagem do produto ${product.name}`} />
                            <p>{product.name}</p>
                            <p>{product.formatedPrice} </p>
                            <Button>Pedir agora</Button>
                        </ContainerItems>
                    ))}
            </Carousel>
        </Container>
    )

};
