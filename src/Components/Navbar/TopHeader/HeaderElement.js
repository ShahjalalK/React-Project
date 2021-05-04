import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const TopHeaders = styled.header`
    background-color: #2e2e2e;
    color: #fff;
    padding: 15px 0;
   
`
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 576px ){
        display: block;
        justify-content: center;
        align-items: center;   
    } 
`
export const LeftHeader = styled.ul`
    display: flex;
    @media screen and (max-width: 575.98px ){
        align-items: center;
        margin-bottom: 20px;
        text-align: center; 
        justify-content: center;
        :first-child{
            margin-left: 0;
        }  
    } 
  
`
export const RightHeader = styled.ul`
    display: flex; 
    @media screen and (max-width: 575.98px ){
        align-items: center;
        text-align: center;
        justify-content: center;  
    }
`

export const HeaderItem = styled.li`
    margin-left: 15px;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    ::before{
        position: absolute;
        content: '';
        top: 2px;
        right: -8px;
        width: 2px;
        height: 15px;
        background-color: #ffffff;                
    }
 :last-child::before{
       display: none;
   }
   
`
export const HeaderLink = styled(Link)`
    font-size: 14px;
    color: #ffffff;
    @media screen and (max-width: 370.98px ){
       font-size: 12px;       
     }
`
export const SocialItem = styled.li`
    margin-left: 10px;
    transition: all 1s ease;
    && :hover{
        background-color: #db4a39; 
     }
`
export const SocialLink = styled(Link)`
     color: #ffffff;
     background-color: #787878;
     padding: 10px;
     border-radius: 50%;
     align-items: center;
     display: flex;    
     :only-child{                 
         font-size: 16px;         
     } 

     @media screen and (max-width: 370.98px ){
        :only-child{                 
         font-size: 14px;         
     }
     }
       
`
