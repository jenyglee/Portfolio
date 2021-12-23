import React from "react";
import styled from "styled-components";
import { musinsaSources } from "images";

const MainVisualWrap = styled.section`
    width: 100%;
    height: 497px;
    background: ${({ img }) => `url("${img}") no-repeat`};
    background-position: 42% 35%;
    background-size: 140%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 90px;

    @media ${({ theme }) => theme.size1200} {
        background-size: 150%;
        background-position: 42% 35%;
    }
    @media ${({ theme }) => theme.size960} {
        height: 381px;
        margin-bottom: 65px;
    }
    @media ${({ theme }) => theme.size768} {
        background-size: 190%;
        background-position: 42% 35%;
        display: block;
    }
    @media ${({ theme }) => theme.size568} {
        background-size: 300%;
        background-position: 72% 30%;
        height: 373px;
        margin-bottom: 40px;
    }
`;

const MainVisualMusinsa = () => {
    return <MainVisualWrap img={musinsaSources.mainVisual} />;
};

export default MainVisualMusinsa;
