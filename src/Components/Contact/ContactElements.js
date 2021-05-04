import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactSection = styled.section`
    padding: 40px 0;
`
export const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    background-color: #e0e0e0;
    position: relative;
    ::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        background-color: #0099ff;
        content: '';
    }
    @media screen and (max-width: 768px){
        display: block;
        align-items: center;
        text-align: center;
    }
`
export const Left = styled.div`
    h1{
        font-size: 40px;
        line-height: 60px;
        @media screen and (max-width: 768px){
            font-size: 30px;
            line-height: 35px;
            margin-bottom: 10px;
        }
    }
    p{
        font-size: 20px;
        @media screen and (max-width: 768px){
            font-size: 18px;
        }
    }
    @media screen and (max-width: 768px){
            margin-bottom: 20px;
        }
`
export const Right = styled.div`

`
export const Links = styled(Link)`
    display: inline-block;
    button{
        font-size: 30px;
        padding: 20px 15px;
        background-color: #0099ff;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        font-family: Georgia, 'Times New Roman', Times, serif;
        border-radius: 10px;
        @media screen and (max-width: 768px){
            font-size: 25px;
        }
    }
`