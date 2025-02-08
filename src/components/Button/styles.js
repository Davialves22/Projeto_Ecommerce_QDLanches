import styled from "styled-components"

export const ContainerButton = styled.button`
width: 100px;
height: 36px;
background: #F27D16;
border-radius: 20px;
border: none;
color: #ffffff;
cursor: pointer;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}
`