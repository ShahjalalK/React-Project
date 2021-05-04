import styled from "styled-components";

export const Products = styled.section`
    padding: 40px 0;
`
export const ProductWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr; 
   align-items: center;
   gap: 25px;
   @media screen and (max-width: 576px){
       grid-template-columns: 1fr;
   }

`
export const Left = styled.div`
    img{
        width: 100%;
    }
`
export const Right = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: right;
    text-align: center;
    @media screen and (max-width: 576px){
       grid-template-columns: 1fr;
       margin-top: 50px;
   }    
`
export const Box = styled.div` 
margin-bottom: 30px;
    img{
        width: 85px;
        height: 80px;
    }
    h3{
        color: #0099ff;
        font-size: 20px;
        margin: 15px 0;
        font-weight: 500;
    }
    p{
        font-size: 15px;
        line-height: 20px;
    }
`