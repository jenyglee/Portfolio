import React from "react"
import styled from "styled-components"

const ContentWrap = styled.div`
    padding: 50px 20px;
    @media ${({ theme }) => theme.size768} {
        padding: 35px 20px 50px;
    }
`
const Description = styled.p`
    font-family: "AppleSDGothicNeoB";
    font-size: 24px;
    line-height: 40px;
    white-space: pre-wrap;
    letter-spacing: -1px;
    margin-bottom: 56px;
    word-break: keep-all;
    @media ${({ theme }) => theme.size960} {
        font-size: 20px;
        line-height: 34px;
        margin-bottom: 42px;
    }
    @media ${({ theme }) => theme.size768} {
        font-size: 16px;
        line-height: 29px;
        margin-bottom: 30px;
    }
`

const Review = ({ content }) => {
    return (
        <ContentWrap>
            {content.map((item) => (
                <Description>{item}</Description>
            ))}
        </ContentWrap>
    )
}

export default Review
