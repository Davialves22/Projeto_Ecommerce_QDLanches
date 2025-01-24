import React from "react";
import HomeLogo from '../../assets/BannerCopia.jpg'
import { Container, HomeImg } from "./styles";
import CategoryCarousel from "../../components/CategoryCarousel";

function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="HomeLogo" />
            <CategoryCarousel />
        </Container>
    )

};

export default Home