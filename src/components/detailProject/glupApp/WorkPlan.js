import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
    width: 80%;
    padding: 35px 0 50px 0;
`

const TextWrap = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    @media ${({ theme }) => theme.size960} {
        flex-flow: column wrap;
        margin-bottom: 36px;
    }
`
const TitleWrap = styled.div`
    min-width: 125px;
    margin-right: 20px;
    @media ${({ theme }) => theme.size960} {
        margin-bottom: 14px;
    }
`
const Title = styled.p`
    font-size: 18px;
    display: block;
`
const Description = styled.p`
    font-size: 20px;
    font-weight: bold;
`

const Tags = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 5px;
`

const TagBox = styled.div`
    border: ${({theme})=> `2px solid ${theme.detailTagBorder}`};
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 5px;
`
const TagName = styled.p`
    font-size: 18px;
    font-weight: bold;
    padding: 6px 10px;
`

const ViewFlow = ({}) => {
    return (
        <ContentWrap>
            <TextWrap>
                <TitleWrap>
                    <Title>제작 목표</Title>
                </TitleWrap>
                <Description>약 복용알람 서비스 구현</Description>
            </TextWrap>
            <TextWrap>
                <TitleWrap>
                    <Title>팀 구성</Title>
                </TitleWrap>
                <Description>프론트앤드 1명, 백엔드 1명</Description>
            </TextWrap>
            <TextWrap>
                <TitleWrap style={{ paddingTop:10 }}>
                    <Title>기술&라이브러리</Title>
                </TitleWrap>
                <Tags>
                    <TagBox>
                        <TagName>async storage</TagName>
                    </TagBox>
                    <TagBox>
                        <TagName>bottom tabs</TagName>
                    </TagBox>
                    <TagBox>
                        <TagName>stack</TagName>
                    </TagBox>
                    <TagBox>
                        <TagName>date time picker</TagName>
                    </TagBox>
                    <TagBox>
                        <TagName>image picker</TagName>
                    </TagBox>
                    <TagBox>
                        <TagName>calendar</TagName>
                    </TagBox>
                    <TagBox>
                        <TagName>floating action</TagName>
                    </TagBox>
                    <TagBox>
                        <TagName>swiper</TagName>
                    </TagBox>
                </Tags>
                    {/* <Tags>
                        <TagBox>
                            <TagName>calendar</TagName>
                        </TagBox>
                        <TagBox>
                            <TagName>floating action</TagName>
                        </TagBox>
                        <TagBox>
                            <TagName>swiper</TagName>
                        </TagBox>
                    </Tags> */}
            </TextWrap>
        </ContentWrap>
    )
}

export default ViewFlow;