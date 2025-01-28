import styled from "styled-components";

export const Container = styled.div`

`

export const ProductsImg = styled.img`
max-height: 100vh;
width: 100%;
height: 370px;
overflow: hidden;
`

export const CategoriesMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 20px;
`

export const CategoryButton = styled.button`
cursor: pointer;
color: ${props => (props.isActiveCategory ? '#D93D04' : '#9a9a9d')};
background: none;
border: none;
border-bottom: ${props => (props.isActiveCategory && '2px solid #D93D04')};
padding-bottom: 5px;
font-size: 17px;
line-height: 20px;
`
export const ProductsContainer = styled.div``