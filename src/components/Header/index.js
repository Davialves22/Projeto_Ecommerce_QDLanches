import React from "react";
import Cart from '../../assets/cart.svg'
import User from '../../assets/user.svg'
import {
    Container,
    ContainerLeft,
    PageLink,
    ContainerRight,
    ContainerText,
} from "./styles";

export function Header() {
    return (
        <Container>
            <ContainerLeft>
                <PageLink>
                    Home
                </PageLink>
                <PageLink>
                    Produtos
                </PageLink>

            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img className="CartImg" src={Cart} alt="imagem do Cart" />
                </PageLink>
                <div></div>
                <PageLink>
                    <img className="CartImg" src={User} alt="Usuário" />
                </PageLink>

                <ContainerText>
                    <p>
                        Olá, Usuário
                    </p>

                    <PageLink>Sair</PageLink>

                </ContainerText>

            </ContainerRight>

        </Container>
    )

};