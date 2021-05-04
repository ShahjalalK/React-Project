import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeadersArea = styled.div`
    padding: 50px 0 ;
    border-bottom: 5px solid #e9e9e9;
    @media screen and (max-width: 576px){
        padding: 20px 0 50px 0 ;
    }
`
export const HeaderAreaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 576px){
        display: block;
        justify-content: center;
    }
`
export const LeftHeader = styled.div`
     @media screen and (max-width: 576px){        
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`
export const HeaderTitle = styled.h1`
    font-size: 40px;
    color: #333333;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-bottom: 10px;
    @media screen and (max-width: 576px){
        font-size: 40px;
    }
`
export const HeaderText = styled.p`
    font-size: 15px;
    color: #999;
  
`
export const RightHeader = styled.div`
@media screen and (max-width: 576px){        
        justify-content: center;
        align-items: center ;
        margin: auto;
        margin-top: 30px;  
        text-align: center;      
    }
  
    input{
        padding: 10px 5px;
        outline: none;
        border: none;
        background-color: #f1f1f1;        
    }
       
       
`
export const Links = styled(Link)`
    button{
        padding: 10px 10px;
        background-color: #0099ff;
        outline: none;
        border:none;
        cursor: pointer;
        color: #ffffff;
    }    
`