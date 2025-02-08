import styled from "styled-components";

export const Container = styled.div`
background-color:rgb(185, 185, 185);
min-height: 100vh;
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
color: ${props => (props.isActiveCategory ? '#D93D04' : '#591708')};
background: none;
border: none;
border-bottom: ${props => (props.isActiveCategory && '2px solid #D93D04')};
padding-bottom: 5px;
font-size: 17px;
line-height: 20px;
`
export const ProductsContainer = styled.div`
display:grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 40px;
justify-items: center;
margin-top: 20px;

`