import { olaSources } from "images"
import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
    padding-bottom: 60px;
`

const TextWrap = styled.div`
    font-family: "AppleSDGothicNeoB";
    padding: 0 40px;
    display: flex;
    margin-top: 18px;
`
const Title = styled.h2`
    font-size: 30px;
    margin-right: 30px;
`

const TechList = styled.ul``
const Tech = styled.li`
    font-size: 22px;
    margin-bottom: 24px;
`

const ImgWrap = styled.div`
    max-width: 1112px;
`
const Img = styled.img`
    width: 100%;
`

const ServiceArchitecture = ({ data }) => {
    return (
        <Wrap>
            <TextWrap>
                <Title>핵심 기술</Title>
                <TechList>
                    {data.techList.map((item) => (
                        <Tech>{item}</Tech>
                    ))}
                </TechList>
            </TextWrap>
            <ImgWrap>
                <Img src={data.img} />
            </ImgWrap>
        </Wrap>
    )
}

export default ServiceArchitecture
