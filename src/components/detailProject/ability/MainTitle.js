import React, { useEffect, useState } from "react";
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
    /* transform: translateY(50px); */
    transition: 1s;
`;

const MainTitle = ({ titleData }) => {
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
            {titleData.map((ability, index) => {
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
