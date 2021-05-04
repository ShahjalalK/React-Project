import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Imbg from '../../images/products-1.jpg'
import Imbg1 from '../../images/products-2.webp'
import Imbg2 from '../../images/products-3.jpg'
import { Container } from '../../GlobalStyle'
import {
    Heros,
    HeroWrapper,
    Left,
    Links,
    Right,
    Img
} from './HeroElement'

export const Hero = () => {
    return (
        <>
            <Heros>
                <Container>
                    <HeroWrapper>
                        <Left>
                            <h1>Your title can be long and descriptive</h1>
                            <p>Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur.</p>
                            <Links><button>READ MORE »</button></Links>
                        </Left>
                        <Right>
                            <OwlCarousel 
                                className='owl-theme' 
                                loop={true}
                                autoplay={true}
                                margin={1}
                                items={1} 
                                nav={false}>
                                <div class='item'>
                                    <Img src={Imbg} />
                                </div>
                                <div class='item'>
                                    <Img src={Imbg1} />
                                </div>
                                <div class='item'>
                                <Img src={Imbg2} />
                                </div>                               
                            </OwlCarousel>;
                    </Right>
                    </HeroWrapper>
                </Container>
            </Heros>
        </>
    )
}
