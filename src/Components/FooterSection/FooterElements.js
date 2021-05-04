import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const FooterSection = styled.section`
    padding: 40px 0;
    background-color: #1a1a1a;
    color: #ffffff;
`
export const boxTitle = css`
    font-size: 12px;
    margin-bottom: 20px;
    font-weight: 500;
`
export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 576px){
        grid-template-columns: 1fr;
    }
`
export const Box1 = styled.div`
    h3{
        ${boxTitle}
    }
    img{
        width: 215px;
        height: 90px;
        margin-top: 5px;
        margin-bottom: 15px;
    }
    p{
        font-size: 16px;
        margin-bottom: 14px;
        font-weight: 500;
        color: #666666;
    }
  a{
      
        float: right;         
  }
`
export const Box2 = styled.div`
    h3{
        ${boxTitle}
    }
    a{
       line-height: 30px;
       border-bottom: 1px solid #232323; 
       display: block;
    }
    span{
        color: #989898;
    }
`
export const Box3 = styled.div`
    margin-bottom: 15px;
    h3{
        ${boxTitle}
    }
    h4{
        color: #666666;
    }
    a{
        float: right;
    }
    p{
        color: #666666;
    }
    
   
`
export const style = css`
     padding: 8px 10px;
        background-color: #232323;
        outline: none;
        border: none;
        border-radius: 5px; 
        color: #989898;        
        margin-bottom: 10px;
`
export const Box4 = styled.div`
    h3{
        ${boxTitle}
    }
    form{
        display: block;
        width: 100%;
    }
    input{
        ${style}; 
        width: 100%;       
    }
    textarea{
        ${style};
        max-width: 100%;
        min-width: 100%;
    }
    button{
        background-color: #0099ff;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding: 10px 20px;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;

    }
`
export const Links = styled(Link)`
    display: inline-block;
    font-size: 14px;
    color: #0099ff; 
`

export const Top = styled.div`
    margin-bottom: 15px;
`
export const Bottom = styled.div`

`