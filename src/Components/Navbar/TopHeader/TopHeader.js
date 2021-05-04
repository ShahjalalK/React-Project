import React from 'react'
import { Container } from '../../../GlobalStyle'
import {
    TopHeaders,
    HeaderWrapper,
    LeftHeader,
    RightHeader,
    HeaderItem,
    HeaderLink,
    SocialItem,
    SocialLink
} from './HeaderElement'

export const TopHeader = ({ data, icon }) => {
    return (
        <TopHeaders>
            <Container>
                <HeaderWrapper>
                    <LeftHeader>
                        {data.map((data, index) => {
                            return (
                                <HeaderItem>
                                    <HeaderLink to={data.path}>
                                        {data.title}
                                    </HeaderLink>
                                </HeaderItem>
                            )
                        })}
                    </LeftHeader>     
                    <RightHeader>
                        {icon.map((icon, index) => {
                            return (
                                <SocialItem>
                                    <SocialLink to={icon.path}>
                                        {icon.icon}
                                    </SocialLink>
                                </SocialItem>
                            )
                        })}
                    </RightHeader>
                </HeaderWrapper>
            </Container>
        </TopHeaders>
    )
}
