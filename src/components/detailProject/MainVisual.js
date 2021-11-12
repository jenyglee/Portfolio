import React from 'react'
import styled from 'styled-components'

const MainVisualWrap = styled.section`
    width: 100%;
    height: 497px;
    background-color: lightslategrey;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ContentWrap = styled.article`
    padding-left: 50px;
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
`
const CharacterImageWrap = styled.div`
    width: 50px;
    height: 22px;
    background-color: mediumblue;
`
const CharacterImage = styled.img``
const LogoWrap = styled.div`
    width: 82px;
    height: 22px;
    background-color: mediumpurple;
`
const LogoImage = styled.img``

const MainVisual = () => {
    return (
        <MainVisualWrap>
            <ContentWrap>
                <TextWrap>
                    <Text>
                        <CharacterImageWrap>
                            <CharacterImage />  
                        </CharacterImageWrap>
                        HEY HEY!
                    </Text>
                    <Text>DID YOU TAKE</Text>
                    <Text>YOUR MEDICINE?</Text>
                </TextWrap>
                <LogoWrap>
                    <LogoImage />
                </LogoWrap>
            </ContentWrap>
        </MainVisualWrap>
    )
}

export default MainVisual;