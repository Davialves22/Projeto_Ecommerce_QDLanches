import styled from "styled-components";

export const Container = styled.div`
background: #ffffff;
box-shadow: 0px 10px 40px rgba(0,0,0,0.03);
border-radius: 20px;
padding: 10px;
width: max-content;
margin-top: 30px;
margin-bottom: 50px;
`
export const Header = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
padding: 10px;
border-bottom: 1px solid #b5b5b5;
p{
    font-size: 16px;
    color: #000000;
}
`
export const Body = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
padding: 10px;
width: max-content;
grid-gap: 10px 15px;

img{
border-radius: 10px;
width: 135px;
height: 130px;
}

p{
    font-size: 16px;
    color: #000000;
    margin-top: 50px;
}
.quantityContainer{
    display: flex;
    gap: 20px;
    
    button {
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-top: 45px;
    }
    
    p{
        margin-top: 50px;
    }
}
`
export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
font-weight: bold;
`
