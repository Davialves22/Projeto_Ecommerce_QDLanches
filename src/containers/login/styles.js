import styled from "styled-components";
import Background from '../../assets/padrao-com-hamburgueres-cinza-e-vermelhos-em-fundo-preto_124800-1611.avif';
import { Button } from "../../components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');
    background-size: auto;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 100vh;
        padding: 20px;
    }
`;

export const LoginImage = styled.img`
    max-height: 100%;
    max-width: 100%;
    height: 500px;
    width: 400px;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ContainerItens = styled.div`
    background: #591708;
    border-radius: 0 10px 10px 0;
    max-width: 400px;
    width: 100%;
    max-height: 100%;
    height: 500px;
    padding: 5px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        max-width: 90%;
        height: auto;
        border-radius: 10px;
        padding: 20px;
        padding: 10px 20px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #ffffff;
    }
    
`;

export const StyledButton = styled(Button)`
    @media (max-width: 768px) {
        margin: 20px auto; 
        width: 80%;
        max-width: 150px;
        box-sizing: border-box;
    }
`

export const IMG = styled.img`
    max-height: 130px;
    object-fit: cover;
    align-self: center;
    margin-top: 25px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        max-height: 100px;
        margin-top: 15px;
        margin-bottom: 20px;
    }
`;

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 250px;
    height: 100%;
    max-height: 30px;
    padding: 10px;
    background: #ffffff;
    box-shadow: 3px 3px 10px rgba(24, 144, 226, 0.19);
    border-radius: 5px;
    border: ${(props) => (props.error ? '2px solid #CC1717' : 'none')};
    padding-left: 10px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: white;
    margin-top: 2px;
    padding: 2px 5px;
    border-radius: 5px;
`;

export const SingInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 50px;

    a {
        cursor: pointer;
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 20px;
    }
`;
