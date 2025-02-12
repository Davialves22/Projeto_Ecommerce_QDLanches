import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;

.rec.rec-arrow{
    background-color:#d93d04;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba( 0 , 0 , 0 , 0.25));
    border: none;
}

.rec.rec-arrow:hover{
    border: 2px solid #591708;
    background-color: #d27116;
    color: #efefef;
}

.rec.rec-arrow:disabled{
    border: none;
    background: #bebebf;
    color: #efefef;
}

.rec.rec-dot{
    background-color: #d93d04;
    border: none;
    border-radius: 50%;
}


`

export const OffersImg = styled.img`
width: 300px;
height: 60px;
margin-top: 20px;
margin-bottom: 40px;
`

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;
p{
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 120%;
    color: #591708;
}
`

export const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 10px;
box-shadow: 3px 3px 10px rgba(24, 144, 226, 0.19);
margin-bottom: 16px;
`

export const Button = styled.button`
margin-top: 16px;
background: #d93d04;
border-radius: 8px;
border: none;
height: 50px;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 100%;
text-align: center;
color: #ffffff;
cursor: pointer;

&:hover{
    opacity: 0.7;
}

&:active{
    opacity: 0.5;
}
`