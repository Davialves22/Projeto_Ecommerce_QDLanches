import React from "react";
import HomeLogo from '../../assets/BannerCopia.jpg'
import { Container, HomeImg } from "./styles";
import CategoryCarousel from "../../components/CategoryCarousel";
import OffersCarousel from "../../components/OffersCarousel";

function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="HomeLogo" />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )

};

export default Home