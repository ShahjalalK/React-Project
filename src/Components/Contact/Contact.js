import React from 'react'
import { Container } from '../../GlobalStyle'
import {
    ContactSection,
    ContactWrapper,
    Left,
    Right,
    Links,
} from './ContactElements'

export const Contact = () => {
    return (
        <>
        <ContactSection>
            <Container>
                <ContactWrapper>
                    <Left>
                        <h1>Lorem ipsum dolor sit amet elit !</h1>
                        <p>Why not try our services today, you won’t regret your choice !</p>
                    </Left>
                    <Right>
                        <Links><button>CONTACT US TODAY</button></Links>
                    </Right>
                </ContactWrapper>
            </Container>
        </ContactSection>
           
        </>
    )
}
