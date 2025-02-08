import React from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { Link,  useNavigate } from 'react-router-dom'

import api from "../../services/api"

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { useUser } from "../../hooks/UseContext";
import LoginImg from "../../assets/LoginImg.jpg";
import Logo from '../../assets/logo.png'

import {
    Container,
    LoginImage,
    ContainerItens,
    IMG,
    Label,
    Input,
    ErrorMessage,
    SingInLink,
    StyledButton
} from "./styles";

import {Button} from "../../components";


export function Login() {
    const navigate = useNavigate()
    const { putUserData } = useUser()

    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido")
            .required("O e-mail é obrigatório"),

        password: Yup.string().required("A senha é obrigatória")
            .min(6, "A senha deve conter pelo menos 6 dígitos"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })


    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando usuário',
                success: 'Usuário logado com sucesso',
                error: 'Algo deu errado'
            }

        )

        putUserData(data)

        setTimeout(() => {
            navigate('/')
        }, 2000)

    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login-image" />
            <ContainerItens>
                <IMG src={Logo} alt="logo-burger" />
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email"
                        {...register("email")}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password"
                        {...register("password")}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <StyledButton type="submit" style={{
                        marginTop: 20,
                        marginBottom: 25
                    }}>Login</StyledButton>
                </form>

                <SingInLink>Não possui conta? {' '}
                    <Link style={{ color: 'white' }} to="/cadastro">
                        Fazer Cadatsro
                    </Link>
                </SingInLink>

            </ContainerItens>
        </Container>
    );
}