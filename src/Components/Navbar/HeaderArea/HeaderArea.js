import React from 'react'
import { Container } from '../../../GlobalStyle'
import {
    HeadersArea,
    HeaderAreaWrapper,
    LeftHeader,
    RightHeader,
    HeaderTitle,
    HeaderText,
    Links,
} from './HeaderAreaElements'

export const HeaderArea = ({ data }) => {
    return (
        <>
            <HeadersArea>
                <Container>
                    <HeaderAreaWrapper>
                        {data.map((data) => {
                            return (
                                <LeftHeader>
                                    <HeaderTitle>{data.title}</HeaderTitle>
                                    <HeaderText>{data.text}</HeaderText>
                                </LeftHeader>
                            )
                        })}
                        <RightHeader>
                            <form action="">
                                <input type="search" placeholder="Search Our Website..."/>
                                <Links><button>Search</button></Links>
                            </form>
                        </RightHeader>
                    </HeaderAreaWrapper>
                </Container>
            </HeadersArea>
        </>
    )
}
