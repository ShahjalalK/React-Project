import React from 'react'
import { Container } from '../../GlobalStyle'
import {
    CopyRights,
    CopyWrapper,
} from './CopyRightElements'

export const CopyRight = () => {
    return (
        <>
            <CopyRights>
               <Container>
                   <CopyWrapper>
                       <p>Copyright © 2013 Domain Name - All Rights Reserved</p>
                       <p>Template by Sk Templates</p>
                   </CopyWrapper>
               </Container>
            </CopyRights>
        </>
    )
}
