import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
`

const TextWrap = styled.div`
    display: flex;
    margin-bottom: 15px;
    @media ${({ theme }) => theme.size1200} {
        flex-direction: column;
    }
`
const TitleWrap = styled.div`
    width: 125px;
    margin-right: 20px;
    @media ${({ theme }) => theme.size1200} {
        width: 125px;
    }
`
const Title = styled.p`
    font-size: 18px;
    @media ${({ theme }) => theme.size1200} {
        
    }
`
const Description = styled.p`
    font-size: 20px;
    font-weight: bold;
    @media ${({ theme }) => theme.size1200} {
        
    }
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

const ViewFlow = ({}) => {
    const [isSize320, setIsSize320] = useState(false)
    var innerWidth = window.innerWidth;

    
    useEffect(()=>{
        // ✨ 스크롤값 저장(헤더 인터랙션에 적용)
        window.addEventListener("resize", onChangeSize(innerWidth))
        return ()=>{
            window.removeEventListener("resize", onChangeSize(innerWidth))
        }
    }, [])

    // 👀❓ 여기서 받아온 innerWidth는 딱 한번만 찍히기 때문에 DetailGulpApp에서 보내야 할듯?
    const onChangeSize = (innerWidth)=>{
        console.log(innerWidth)
        // if(innerWidth === 320){
        //     // setIsSize320(true);
        // }
    }
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
    )
}

export default ViewFlow;