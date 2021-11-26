import React, { useState } from 'react'
import styled from 'styled-components'
import { musinsaSources } from '../../../images'

const ContentWrap = styled.div`
    width: 100%;
    margin-top: 35px;
    margin-bottom: 90px;
    padding: 0 20px;
    @media ${({ theme }) => theme.size768} {
        margin-bottom: 70px;
        padding: 0;
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

const ImageWrap = styled.div`
    max-width: 1132px;
`

const StyledImage = styled.img`
    width: 100%;
`

const Components = () => {
    return (
        <ContentWrap>
            <Container>
                <ImageWrap>
                    <StyledImage src={musinsaSources.components} />
                </ImageWrap>
            </Container>
        </ContentWrap>
    )
}

export default Components;