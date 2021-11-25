import React, { useState } from 'react'
import styled from 'styled-components'
import { avnSources } from '../../../images'

const ContentWrap = styled.div`
    width: 100%;
    margin-top: 35px;
    margin-bottom: 90px;
    padding: 0 20px;
    @media ${({ theme }) => theme.size768} {
        margin-bottom: 70px;
    }
    @media ${({ theme }) => theme.size568} {
        margin-bottom: 50px;
    }
`
const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Section = styled.section`

`

const TextWrap = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    background-color: honeydew;
`

const Title = styled.h2`
    font-size: 30px;
    margin-bottom: 20px;
    @media ${({ theme }) => theme.size960} {
        font-size: 26px;
    }
    @media ${({ theme }) => theme.size768} {
        font-size: 22px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 18px;
    }
`

const Point = styled.span`
    font-weight: bold;
`

const Description = styled.p`
    font-size: 18px;
    line-height: 30px;
    word-break: keep-all;
    @media ${({ theme }) => theme.size960} {
        width: 100%;
    }
    @media ${({ theme }) => theme.size768} {
        font-size: 16px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 13px;
        line-height: 27px;
    }
`


const ImageWrap = styled.div`
    max-width: 1021px;
`
const StyledImage = styled.img`
    width: 100%;
`

const GuiDesign = () => {
    return (
        <ContentWrap>
            <Container>
                <section>
                    <ImageWrap>
                        <StyledImage src={avnSources.GuiDesign01} />
                    </ImageWrap>
                    <TextWrap>
                        <Title><Point>Cluster MAIN</Point> GUI</Title>
                        <Description>
                            네온 라이트의 입체적인 계단식 디자인으로<br />
                            운전자와의 감성 상호작용을 더욱 깊이있게 해줍니다.
                        </Description>
                    </TextWrap>
                </section>
            </Container>
        </ContentWrap>
    )
}

export default GuiDesign;