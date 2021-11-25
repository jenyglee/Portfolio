import React from 'react'
import styled from 'styled-components'
import { consultKitSources } from "../../../images"

const MainVisualWrap = styled.section`
    width: 100%;
    height: 497px;
    background: ${({img}) => `url("${img}") no-repeat`};
    background-size : 140%;
    background-position: 50% 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 90px;

    @media ${({theme})=> theme.size1200}{
        background-size : 150%;
        background-position: 50% 50%;
    }
    @media ${({theme})=> theme.size960}{
        height: 381px;
        margin-bottom: 65px;
    }
    @media ${({theme})=> theme.size768}{
        background-size : 190%;
        display: block;
    }
    @media ${({theme})=> theme.size568}{
        background-size : 260%;
        height: 373px;
        margin-bottom: 40px;
    }
`

const MainVisualConsultKit = () => {
    return (
        <MainVisualWrap img={consultKitSources.mainVisual} />
    )
}

export default MainVisualConsultKit;