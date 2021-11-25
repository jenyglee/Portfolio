import React from 'react'
import styled from 'styled-components'
import { ktNgSources } from "../../../images"

const MainVisualWrap = styled.section`
    width: 100%;
    height: 497px;
    background: ${({img}) => `url("${img}") no-repeat`};
    background-size : 135%;
    background-position: 78% 40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 90px;

    @media ${({theme})=> theme.size1200}{
        background-size : 142%;
        background-position: 78% 40%;
    }
    @media ${({theme})=> theme.size960}{
        height: 381px;
        margin-bottom: 65px;
    }
    @media ${({theme})=> theme.size768}{
        background-size : 170%;
        background-position: 85% 45%;
        display: block;
    }
    @media ${({theme})=> theme.size568}{
        background-size : 265%;
        background-position: 60% 36%;
        height: 373px;
        margin-bottom: 40px;
    }
`

const MainVisualKtNg = () => {
    return (
        <MainVisualWrap img={ktNgSources.mainVisual} />
    )
}


export default MainVisualKtNg;