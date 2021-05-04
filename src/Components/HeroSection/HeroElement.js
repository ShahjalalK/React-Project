import { Link } from "react-router-dom";
import styled from "styled-components";

export const Heros = styled.section`
    background-color: #f1f1f1;
`
export const HeroWrapper = styled.div`
    display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 30px;
    align-items: center;
    padding-top: 10px; 
    @media screen and (max-width: 576px){
        grid-template-columns: 1fr;
    } 
`
export const Left = styled.div`
    h1{
        color: #333333;
        font-size: 50px;
        margin-bottom: 20px;
        @media screen and (max-width: 576px){
            font-size: 40px
        } 
    }
    p{
        font-size: 25px;
        margin-bottom: 20px;
        @media screen and (max-width: 576px){
            font-size: 20px;
        } 
    }
`
export const Links = styled(Link)`
    display: inline-block;
    button{
        font-size: 20px;
        padding: 7px 20px;
        cursor: pointer;
        outline: none;
        border: none;
        background-color: #0099ff;
        color: #fff;
    }
`

export const Right = styled.div`
    overflow: hidden;
    text-align: right;
    .owl-theme .owl-nav.disabled + .owl-dots{
        position: absolute;
        bottom: 0;
    }
    .owl-theme .owl-dots .owl-dot{
        outline: none;
    }
`
export const Img = styled.img`
    width: 550px;
    height: 440px;
`
