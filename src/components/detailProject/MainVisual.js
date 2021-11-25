import React from 'react'
import styled from 'styled-components'
import { glupAppSources } from "./../../images"

const MainVisualWrap = styled.section`
    width: 100%;
    height: 497px;
    background: ${({img}) => `url("${img}") no-repeat`};
    background-position: 48% 47%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 90px;

    @media ${({theme})=> theme.size1200}{
        background-size : 150%;
        background-position: 55% 47%;
    }
    @media ${({theme})=> theme.size960}{
        height: 381px;
        margin-bottom: 65px;
    }
    @media ${({theme})=> theme.size768}{
        background-size : 190%;
        background-position: 67% 35%;
        display: block;
    }
    @media ${({theme})=> theme.size568}{
        background-size : 260%;
        background-position: 75% 20%;
        height: 373px;
        margin-bottom: 40px;
    }
`

const ContentWrap = styled.article`
    padding-left: 50px;
    @media ${({theme})=> theme.size768}{
        padding-left: 40px;
        padding-top: 40px;
    }
    @media ${({theme})=> theme.size568}{
        padding-left: 20px;
    }
`

const TextWrap = styled.div`
    margin-bottom: 43px;
    @media ${({theme})=> theme.size768}{
        margin-bottom: 34px;
    }
    @media ${({theme})=> theme.size568}{
        margin-bottom: 24px;
    }
`
const Text = styled.p`
    font-family: "BLUDHAVEN";
    font-size: 52px;
    color: ${({theme}) => theme.detailWhiteText};
    display: flex;
    align-items: center;
    letter-spacing: -1px;
    @media ${({theme})=> theme.size960}{
        font-size: 40px;
    }
    @media ${({theme})=> theme.size568}{
        font-size: 28px;
    }
`
const CharacterImageWrap = styled.div`
    width: 50px;
    height: 22px;
    margin-right: 6px;
    position: relative;
    @media ${({theme})=> theme.size960}{
        width: 39px;
        height: 17px;
    }
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
    @media ${({theme})=> theme.size960}{
        width: 64px;
        height: 17px;
    }
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