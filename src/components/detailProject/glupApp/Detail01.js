import React, { useState } from 'react'
import styled from 'styled-components'

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentWrap = styled.div`
`

const TextWrap = styled.div`
    display: flex;
    margin-bottom: 15px;
`
const TitleWrap = styled.div`
    width: 125px;
    margin-right: 20px;
`
const Title = styled.p`
    font-size: 18px;
`
const Description = styled.p`
    font-size: 24px;
    font-weight: bold;
`

const TagsWrap = styled.div`
    display: flex;
    flex-direction: column;
`
const Tags = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`

const TagBox = styled.div`
    border: ${({theme})=> `2px solid ${theme.detailTagBorder}`};
    border-radius: 5px;
    margin-right: 10px;
`
const TagName = styled.p`
    font-size: 18px;
    font-weight: bold;
    padding: 6px 10px;
`

const Detail01 = ({}) => {
    return (
    <DetailContainer>
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
                <TagsWrap>
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
                    </Tags>
                    <Tags>
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
                </TagsWrap>
            </TextWrap>
        </ContentWrap>
    </DetailContainer>
    )
}

export default Detail01;