import React from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { Link } from "react-router-dom";

import api from "../../services/api"

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import RegisterImg from "../../assets/Hamburguer_artesanal_SP_Duo_Gourmet.jpg";
import Logo from '../../assets/logo.png'

import {
    Container,
    RegisterImage,
    ContainerItens,
    IMG,
    Label,
    Input,
    ErrorMessage,
    SingInLink
} from "./styles";

import Button from "../../components/Button";

const onSubmit = async userData => {
    try {
        const { status } = await api.post('users', {
            name: userData.name,
            email: userData.email,
            password: userData.password
        },
            { validadeStatus: () => true }
        )
        if (status === 201 || status === 200) {
            toast.success('Usuário criado com sucesso!')
        } else if (status === 409) {
            toast.error('E-mail já cadastrado, faça login para continuar')
        } else {
            throw new Error()
        }

    } catch (err) {
        toast.error('Falha no sistema! Tente novamente')
    }

}

function Register() {

    const schema = Yup.object().shape({
        name: Yup.string("Nome é obrigatório").required("Nome é obrigatório"),
        email: Yup.string().email("Digite um e-mail válido")
            .required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória")
            .min(6, "A senha deve conter pelo menos 6 dígitos"),
        ConfirmPassword: Yup.string().required("A senha é obrigatória")
            .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
    })


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })


    return (
        <Container>
            <RegisterImage src={RegisterImg} alt="RegisterImg" />
            <ContainerItens>
                <IMG src={Logo} alt="logo-burger" />
                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label
                        error={errors.name?.message} >Nome
                    </Label>
                    <Input type="text"
                        {...register("name")}
                        error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label
                        error={errors.email?.message}>Email
                    </Label>
                    <Input type="email"
                        {...register("email")}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label
                        error={errors.password?.message}>Senha
                    </Label>
                    <Input type="password"
                        {...register("password")}
                        error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label
                        error={errors.ConfirmPassword?.message}>Confirme sua Senha
                    </Label>
                    <Input type="password"
                        {...register("ConfirmPassword")}
                        error={errors.ConfirmPassword?.message} />
                    <ErrorMessage>{errors.ConfirmPassword?.message}</ErrorMessage>


                    <Button type="submit" style={{
                        marginTop: 15,
                        marginBottom: 15
                    }}>Cadastrar</Button>
                </form>

                <SingInLink>Já possui conta? {" "}
                    <Link style={{color: 'white'}} to="/login">
                        Fazer Login
                    </Link>
                </SingInLink>

            </ContainerItens>
        </Container>
    );
}

export default Register