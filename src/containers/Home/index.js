import React from "react";
import HomeLogo from '../../assets/BannerCopia.jpg'
import { Container, HomeImg } from "./styles";
import { CategoryCarousel, Header, OffersCarousel } from '../../components'

export function Home() {
    return (
        <Container>
            <Header />
            <HomeImg src={HomeLogo} alt="HomeLogo" />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )

}