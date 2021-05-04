import React from 'react'
import { Container } from '../../GlobalStyle'
import imgb from '../../images/left-1.jpg'
import imgb1 from '../../images/right-1.jpg'
import imgb2 from '../../images/right-2.jpg'
import imgb3 from '../../images/right-3.jpg'
import imgb4 from '../../images/right-4.jpg'

import {
    Products,
    ProductWrapper,
    Left,
    Right,
    Box,

} from './ProductElements'

export const Product = () => {
    return (
        <>
           <Products>
               <Container>
                   <ProductWrapper>
                       <Left>
                            <img src={imgb} alt=""/>
                       </Left>
                       <Right>
                            <Box>
                                <img src={imgb1} alt=""/>
                                <h3>Vivamuslibero Augue</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.</p>
                            </Box>
                            <Box>
                                <img src={imgb2} alt=""/>
                                <h3>Vivamuslibero Augue</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.</p>
                            </Box>
                            <Box>
                                <img src={imgb3} alt=""/>
                                <h3>Vivamuslibero Augue</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.</p>
                            </Box>
                            <Box>
                                <img src={imgb4} alt=""/>
                                <h3>Vivamuslibero Augue</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.</p>
                            </Box>
                       </Right>
                   </ProductWrapper>
               </Container>
           </Products>
        </>
    )
}
