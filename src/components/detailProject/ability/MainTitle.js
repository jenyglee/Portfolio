import React, { useEffect, useState, useContext } from "react";
import { ContentsContext } from "../../../store/contents";
import styled from "styled-components";

const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    font-size: 100px;
    font-family: "BLUDHAVEN";
    transform: ${({ animationTransform }) =>
        `translateY(${animationTransform}px)`};
    opacity: ${({ animationOpacity }) => animationOpacity};
    transition: 1s;
    margin-bottom: 24px;
    @media ${({ theme }) => theme.size1200} {
        font-size: 80px;
        margin-bottom: 16px;
    }
    @media ${({ theme }) => theme.size960} {
        font-size: 60px;
        margin-bottom: 12px;
    }
    @media ${({ theme }) => theme.size768} {
        font-size: 40px;
        margin-bottom: 8px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 26px;
        margin-bottom: 6px;
    }
`;

const MainTitle = () => {
    const contents = useContext(ContentsContext);
    const [animationTransform, setAnimationTransform] = useState([
        50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    ]);
    const [animationOpacity, setAnimationOpacity] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    useEffect(() => {
        setTimeout(() => {
            setAnimationTransform([
                0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
            ]);
            setAnimationOpacity([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }, 200);
        setTimeout(() => {
            setAnimationTransform([
                0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
            ]);
            setAnimationOpacity([1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }, 400);
        setTimeout(() => {
            setAnimationTransform([
                0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
            ]);
            setAnimationOpacity([1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }, 600);
        setTimeout(() => {
            setAnimationTransform([
                0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50,
            ]);
            setAnimationOpacity([1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }, 800);
        setTimeout(() => {
            setAnimationTransform([
                0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50,
            ]);
            setAnimationOpacity([1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        }, 1000);
        setTimeout(() => {
            setAnimationTransform([
                0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50,
            ]);
            setAnimationOpacity([1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
        }, 1200);
        setTimeout(() => {
            setAnimationTransform([
                0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50,
            ]);
            setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        }, 1400);
        setTimeout(() => {
            setAnimationTransform([0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50]);
            setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
        }, 1600);
        setTimeout(() => {
            setAnimationTransform([0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50]);
            setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]);
        }, 1800);
        setTimeout(() => {
            setAnimationTransform([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50]);
            setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]);
        }, 2000);
        setTimeout(() => {
            setAnimationTransform([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50]);
            setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]);
        }, 2200);
        setTimeout(() => {
            setAnimationTransform([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50]);
            setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]);
        }, 2400);
        setTimeout(() => {
            setAnimationTransform([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        }, 2600);
    }, []);
    return (
        <TitleWrap>
            {contents.titleData.map((ability, index) => {
                return (
                    <Title
                        animationTransform={animationTransform[index]}
                        animationOpacity={animationOpacity[index]}
                    >
                        {ability}
                    </Title>
                );
            })}
        </TitleWrap>
    );
};

export default MainTitle;
