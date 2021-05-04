import styled from "styled-components";

export const CopyRights = styled.section`
    padding: 25px 0;
    background-color: #222222;
`
export const CopyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        color: #666666;
        font-size: 16px; 
    @media screen and (max-width: 768px){
        line-height: 25px;
        
    } 
    }
    @media screen and (max-width: 768px){
        display: block;
        align-items: center;
        text-align: center;
        
    }
`
