import React from 'react'
import styled from 'styled-components'
import { glupAppSources } from "./../../images"

const MainVisualWrap = styled.section`
    width: 100%;
    height: 497px;
    background: ${({img}) => `url("${img}") no-repeat`};
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 90px;
    @media ${({theme})=> theme.size568}{
        height: 373px;
        margin-bottom: 40px;
        display: block;
    }
`

const ContentWrap = styled.article`
    padding-left: 50px;
    @media ${({theme})=> theme.size568}{
        padding-left: 20px;
        padding-top: 40px;
    }
`

const TextWrap = styled.div`
    margin-bottom: 43px;
`
const Text = styled.p`
    font-family: "BLUDHAVEN";
    font-size: 52px;
    color: ${({theme}) => theme.detailWhiteText};
    display: flex;
    align-items: center;
    @media ${({theme})=> theme.size568}{
        font-size: 28px;
    }
`
const CharacterImageWrap = styled.div`
    width: 50px;
    height: 22px;
    margin-right: 6px;
    position: relative;
    @media ${({theme})=> theme.size568}{
        width: 28px;
        height: 12px;
    }
`
const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
`
const LogoWrap = styled.div`
    width: 82px;
    height: 22px;
    position: relative;
    @media ${({theme})=> theme.size568}{
        width: 45px;
        height: 12px;
    }
`

const MainVisual = () => {
    return (
        <MainVisualWrap img={glupAppSources.mainVisual} >
            <ContentWrap>
                <TextWrap>
                    <Text>
                        <CharacterImageWrap>
                            <StyledImage src={glupAppSources.character01} />  
                        </CharacterImageWrap>
                        HEY HEY!
                    </Text>
                    <Text>DID YOU TAKE</Text>
                    <Text>YOUR MEDICINE?</Text>
                </TextWrap>
                <LogoWrap>
                    <StyledImage src={glupAppSources.logo} />
                </LogoWrap>
            </ContentWrap>
        </MainVisualWrap>
    )
}

export default MainVisual;