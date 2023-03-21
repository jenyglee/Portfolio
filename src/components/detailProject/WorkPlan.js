import React from "react"
import styled from "styled-components"

const ContentWrap = styled.div`
    width: 80%;
    margin: 35px 0 50px 0;
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
    font-family: "AppleSDGothicNeoL";
    font-size: 18px;
    display: block;
`
const Description = styled.p`
    font-family: "AppleSDGothicNeoB";
    font-size: 20px;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 5px;
`

const TagBox = styled.div`
    border: ${({ theme }) => `2px solid ${theme.detailTagBorder}`};
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 5px;
`
const TagName = styled.p`
    font-family: "AppleSDGothicNeoB";
    font-size: 18px;
    transform: translateY(-2px);
    padding: 6px 10px;
`

const WorkPlan = ({ data }) => {
    return (
        <ContentWrap>
            <TextWrap>
                <TitleWrap>
                    <Title>제작 목표</Title>
                </TitleWrap>
                <Description>{data.goal}</Description>
            </TextWrap>
            <TextWrap>
                <TitleWrap>
                    <Title>팀 구성</Title>
                </TitleWrap>
                <Description>{data.team}</Description>
            </TextWrap>
            <TextWrap>
                <TitleWrap style={{ paddingTop: 10 }}>
                    <Title>기술&라이브러리</Title>
                </TitleWrap>
                <Tags>
                    {data.stackList.map((item) => (
                        <TagBox>
                            <TagName>{item}</TagName>
                        </TagBox>
                    ))}
                </Tags>
            </TextWrap>
        </ContentWrap>
    )
}

export default WorkPlan
