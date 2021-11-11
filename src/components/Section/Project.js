import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProjectName = styled.a`
    font-family: "BLUDHAVEN";
    transition: 0.3;
    z-index: 1;
    display: flex;
    position: relative;
    opacity: 1;
    margin-bottom: 30px;

    @media ${({ theme }) => theme.size1200} {
        padding-left: 30px;
    }
    @media ${({ theme }) => theme.size320} {
        margin-bottom: 0;
    }
`;

const OneText = styled.span`
    height: 110px;
    font-size: 160px;
    transition: 1s;
    position: relative;
    left: ${({ animationTransform }) => animationTransform}px;
    opacity: ${({ animationOpacity }) => animationOpacity};
    color: ${({ isChangedTheme, isPcBreakPoint })=> isChangedTheme&&!isPcBreakPoint ? "#fff" : "#000"};
    @media ${({ theme }) => theme.size1440} {
        font-size: 140px;
    }
    @media ${({ theme }) => theme.size1200} {
        font-size: 120px;
        opacity : 1;
        height: 90px;
    }
    @media ${({ theme }) => theme.size960} {
        font-size: 100px;
        height: 70px;
    }
    @media ${({ theme }) => theme.size768} {
        font-size: 80px;
        height: 50px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 60px;
        height: 40px;
    }
`;

const BtnWrap = styled.div`
    width: ${({ isHover }) => (isHover ? 74 : 30)}px;
    height: 30px;
    border-radius: 50px;
    border: ${({ isHover, theme }) =>
        `1px solid ${isHover ? theme.btnBackground : theme.btnStroke}`};
    display: block;
    transition: 0.5s;
    background-color: ${({ isHover, theme, isChangedTheme, isPcBreakPoint }) => {
            if(isHover){
                if(isChangedTheme&&!isPcBreakPoint){
                    return theme.darkThemeBtnBackground
                }else if(!isChangedTheme){
                    return theme.whiteThemeBtnBackground
                }
            } else return null
        }
    };
    display: flex;
    align-items: center;

    @media ${({ theme }) => theme.size1200} {
        display: none;
    }
`;
const BtnArrow = styled.span`
    width: 10px;
    height: 10px;
    display: block;
    transition: 0.5s;
    border-top: 0 solid transparent;
    border-bottom-width: 12px;
    border-bottom-style: solid;
    border-bottom-color: ${({ isHover, theme, isChangedTheme, isPcBreakPoint }) => {
        if(isHover){
            if(isChangedTheme&&!isPcBreakPoint){
                return theme.darkThemeBtnArrow
            }else if(!isChangedTheme){
                return theme.whiteThemeBtnArrow
            }
        } else if(!isHover){
            if(isChangedTheme&&!isPcBreakPoint){
                return theme.whiteThemeBtnArrow
            }else if(!isChangedTheme){
                return theme.darkThemeBtnArrow
            }
        }
    }};
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    margin-bottom: 1px;
    margin-left: 7px;
    margin-right: 5px;
    transform: ${({ isHover }) => `rotate(${isHover ? 90 : 0}deg)`};
`;

const BtnTextWrap = styled.div`
    transition: 0.5s;
    width: ${({ isHover }) => (isHover ? 100 : 0)}px;
    color: ${({ isHover, theme, isChangedTheme, isPcBreakPoint }) => {
        if(isHover){
            if(isChangedTheme&&!isPcBreakPoint){
                return theme.darkThemeBtnText
            }else if(!isChangedTheme){
                return theme.whiteThemeBtnText
            }
        }
    }};

    overflow: hidden;
`;

const BtnText = styled.p`
    font-family: sans-serif;
    font-size: 16px;
    padding-top: 2px;
`;

const Project = ({ projectTitle, textArr, onEnter, onLeave, sectionId, isChangedTheme, isPcBreakPoint }) => {
    // textArr : ['i','n','f','o']
    const [animationTransform, setAnimationTransform] = useState([
        -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100,
    ]);
    const [animationOpacity, setAnimationOpacity] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);

    useEffect(() => {
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform[0] = 0;
            copyOpacity[0] = 0.4;
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 100);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [copyTransform[0], copyTransform[1]] = [0, 0];
            [copyOpacity[0], copyOpacity[1]] = [0.4, 0.4];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 200);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [copyTransform[0], copyTransform[1], copyTransform[2]] = [0, 0, 0];
            [copyOpacity[0], copyOpacity[1], copyOpacity[2]] = [0.4, 0.4, 0.4];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 300);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
            ] = [0, 0, 0, 0];
            [copyOpacity[0], copyOpacity[1], copyOpacity[2], copyOpacity[3]] = [
                0.4, 0.4, 0.4, 0.4,
            ];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 400);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
                copyTransform[4],
            ] = [0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
            ] = [0.4, 0.4, 0.4, 0.4, 0.4];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 500);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
                copyTransform[4],
                copyTransform[5],
            ] = [0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
            ] = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 600);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
                copyTransform[4],
                copyTransform[5],
                copyTransform[6],
            ] = [0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
            ] = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 700);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
                copyTransform[4],
                copyTransform[5],
                copyTransform[6],
                copyTransform[7],
            ] = [0, 0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
                copyOpacity[7],
            ] = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 800);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
                copyTransform[4],
                copyTransform[5],
                copyTransform[6],
                copyTransform[7],
                copyTransform[8],
            ] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
                copyOpacity[7],
                copyOpacity[8],
            ] = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 900);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
                copyTransform[4],
                copyTransform[5],
                copyTransform[6],
                copyTransform[7],
                copyTransform[8],
                copyTransform[9],
            ] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
                copyOpacity[7],
                copyOpacity[8],
                copyOpacity[9],
            ] = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 1000);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
                copyTransform[4],
                copyTransform[5],
                copyTransform[6],
                copyTransform[7],
                copyTransform[8],
                copyTransform[9],
                copyTransform[10],
            ] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
                copyOpacity[7],
                copyOpacity[8],
                copyOpacity[9],
                copyOpacity[10],
            ] = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 1100);
    }, []);

    //  ✨ 마우스 호버시 투명도 1로 변경
    useEffect(() => {
        // console.log("useEffect!");
        projectTitle.isHover
            ? setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
            : setAnimationOpacity([
                  0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4,
              ]);
    }, [projectTitle.isHover]);

    return (
        <ProjectName
            isHover={projectTitle.isHover}
            onMouseEnter={() => {
                onEnter(projectTitle.id, sectionId);
            }}
            onMouseLeave={() => {
                onLeave(projectTitle.id, sectionId);
            }}
            href="#"
        >
            <OneText
                animationTransform={animationTransform[10]}
                animationOpacity={animationOpacity[10]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[0]}
            </OneText>
            <OneText
                animationTransform={animationTransform[9]}
                animationOpacity={animationOpacity[9]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[1]}
            </OneText>
            <OneText
                animationTransform={animationTransform[8]}
                animationOpacity={animationOpacity[8]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[2]}
            </OneText>
            <OneText
                animationTransform={animationTransform[7]}
                animationOpacity={animationOpacity[7]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[3]}
            </OneText>
            <OneText
                animationTransform={animationTransform[6]}
                animationOpacity={animationOpacity[6]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[4]}
            </OneText>
            <OneText
                animationTransform={animationTransform[5]}
                animationOpacity={animationOpacity[5]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[5]}
            </OneText>
            {/* 🍎 */}
            <OneText
                animationTransform={animationTransform[4]}
                animationOpacity={animationOpacity[4]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[6]}
            </OneText>
            <OneText
                animationTransform={animationTransform[3]}
                animationOpacity={animationOpacity[3]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[7]}
            </OneText>
            <OneText
                animationTransform={animationTransform[2]}
                animationOpacity={animationOpacity[2]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[8]}
            </OneText>
            <OneText
                animationTransform={animationTransform[1]}
                animationOpacity={animationOpacity[1]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[9]}
            </OneText>
            <OneText
                animationTransform={animationTransform[0]}
                animationOpacity={animationOpacity[0]}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                {textArr[10]}
            </OneText>
            <BtnWrap 
                isHover={projectTitle.isHover}
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                <BtnArrow
                    isHover={projectTitle.isHover}
                    isChangedTheme={isChangedTheme}
                    isPcBreakPoint={isPcBreakPoint}
                />
                <BtnTextWrap
                    isHover={projectTitle.isHover}
                    isChangedTheme={isChangedTheme}
                    isPcBreakPoint={isPcBreakPoint}
                >
                    <BtnText>View</BtnText>
                </BtnTextWrap>
            </BtnWrap>
        </ProjectName>
    );
};

export default Project;
