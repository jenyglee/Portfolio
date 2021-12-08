import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { infoSources } from "../../../images";

const MainWrap = styled.main`
    width: 100%;
    margin-bottom: 66px;
`;

const IconWrap = styled.div`
    width: 90px;
    height: 90px;
    margin-bottom: 62px;
`;

const IconImage = styled.img`
    width: 100%;
    height: 100%;
`;

const SubTitle = styled.h2`
    font-family: "BLUDHAVEN";
    font-size: 16px;
    margin-bottom: 56px;
`;

const TitleWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 100px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleObj = styled.h1`
    line-height: 120px;
    /* transform: translateX(-200px); */
    transform: ${({ animationTransform }) =>
        `translateX(${animationTransform}px)`};
    opacity: ${({ animationOpacity }) => animationOpacity};
    transition: 1s;
`;

const data = [
    ["시작했으면", "끝장을 봐야", "직성이 풀려요"],
    ["사소한 것도", "빈틈 없이", "똑부러져요"],
    ["모든 건", "계획대로", "쉬는것마저!"],
    ["결국 중요한건", "팩트랑", "인정하기"],
    ["평생 잊지마", "배우는 자세", "그리고 열정"],
    ["잠시만요", "조금만 더하면", "나올 것 같아요"],
    ["혼자서", "할 수 있는건", "아무것도 없어"],
    ["도와줄게요", "도와줄 수", "있는거면^^;"],
    ["항상 고마워요", "이 은혜", "꼭 갚을게요"],
];

const MainTitle = () => {
    const [animationTransform, setAnimationTransform] = useState([
        -50, -50, -50,
    ]);
    const [animationOpacity, setAnimationOpacity] = useState([0, 0, 0]);
    const [title, setTitle] = useState([]);
    const changeTitle = () => {
        setTimeout(() => {
            setTitle(data[0]);
        }, 0);
        setTimeout(() => {
            setTitle(data[1]);
        }, 3500);
        setTimeout(() => {
            setTitle(data[2]);
        }, 7000);
        setTimeout(() => {
            setTitle(data[3]);
        }, 10500);
        setTimeout(() => {
            setTitle(data[4]);
        }, 14000);
        setTimeout(() => {
            setTitle(data[5]);
        }, 17500);
        setTimeout(() => {
            setTitle(data[6]);
        }, 21000);
        setTimeout(() => {
            setTitle(data[7]);
        }, 24500);
        setTimeout(() => {
            setTitle(data[8]);
        }, 28000);
    };

    const loopAnimation = () => {
        setTimeout(() => {
            setAnimationTransform([0, -50, -50]);
            setAnimationOpacity([1, 0, 0]);
        }, 0);
        setTimeout(() => {
            setAnimationTransform([0, 0, -50]);
            setAnimationOpacity([1, 1, 0]);
        }, 200);
        setTimeout(() => {
            setAnimationTransform([0, 0, 0]);
            setAnimationOpacity([1, 1, 1]);
        }, 400);
        setTimeout(() => {
            setAnimationTransform([50, 0, 0]);
            setAnimationOpacity([0, 1, 1]);
        }, 1600);
        setTimeout(() => {
            setAnimationTransform([50, 50, 0]);
            setAnimationOpacity([0, 0, 1]);
        }, 1800);
        setTimeout(() => {
            setAnimationTransform([50, 50, 50]);
            setAnimationOpacity([0, 0, 0]);
        }, 2000);
        setTimeout(() => {
            setAnimationTransform([-50, -50, -50]);
        }, 3000);
    };

    useEffect(() => {
        loopAnimation();
        changeTitle();
        setInterval(() => {
            loopAnimation();
        }, 3500);
        setInterval(() => {
            changeTitle();
        }, 31500);
    }, []);
    return (
        <MainWrap>
            <TitleWrap>
                <IconWrap>
                    <IconImage src={infoSources.illust} />
                </IconWrap>
                <SubTitle>A SENTENCE INTRODUCING ME</SubTitle>
                <Title>
                    <TitleObj
                        animationTransform={animationTransform[0]}
                        animationOpacity={animationOpacity[0]}
                    >
                        {title[0]}
                    </TitleObj>
                    <TitleObj
                        animationTransform={animationTransform[1]}
                        animationOpacity={animationOpacity[1]}
                    >
                        {title[1]}
                    </TitleObj>
                    <TitleObj
                        animationTransform={animationTransform[2]}
                        animationOpacity={animationOpacity[2]}
                    >
                        {title[2]}
                    </TitleObj>
                </Title>
            </TitleWrap>
        </MainWrap>
    );
};

export default MainTitle;
