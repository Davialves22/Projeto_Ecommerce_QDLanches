import React from "react";
import HomeLogo from '../../assets/BannerCopia.jpg'
import { Container, HomeImg } from "./styles";
import {CategoryCarousel, OffersCarousel} from '../../components'

export function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="HomeLogo" />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )

}