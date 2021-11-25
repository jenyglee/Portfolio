import React from 'react'
import styled from 'styled-components'
import { avnSources } from "../../../images"

const MainVisualWrap = styled.section`
    width: 100%;
    height: 497px;
    background: ${({img}) => `url("${img}") no-repeat`};
    background-size: 145%;
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
        display: block;
    }
    @media ${({theme})=> theme.size568}{
        background-position: 54% 47%;
        height: 373px;
        margin-bottom: 40px;
    }
`

const MainVisualAvn = () => {
    return (
        <MainVisualWrap img={avnSources.mainVisual} />
    )
}


export default MainVisualAvn;