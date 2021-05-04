import styled, { createGlobalStyle } from "styled-components";
import './Google Fonts/Roboto.css'
import './Google Fonts/cursive.css'


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html{
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body{
        background-color: #ffffff;
        font-size: 16px;
        color: #222; 
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
`
export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;
`