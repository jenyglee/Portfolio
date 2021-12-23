import React from "react";
import styled from "styled-components";

const OneText = styled.span`
    height: 110px;
    font-size: 160px;
    transition: 1s;
    position: relative;
    left: ${({ animationTransform }) => animationTransform}px;
    opacity: ${({ animationOpacity }) => animationOpacity};
    color: ${({ isChangedTheme, isPcBreakPoint }) =>
        isChangedTheme && !isPcBreakPoint ? "#fff" : "#000"};
    @media ${({ theme }) => theme.size1440} {
        font-size: 140px;
    }
    @media ${({ theme }) => theme.size1200} {
        font-size: 120px;
        /* opacity : 1; */
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
        font-size: 40px;
        height: 40px;
    }
`;
const ProjectOneText = ({
    animationTransform,
    animationOpacity,
    isChangedTheme,
    isPcBreakPoint,
    textArr,
}) => {
    return (
        <>
            {
                // ✨ 한글자 한글자의 움직임이 다른 상태
                animationTransform.map((item, index) => {
                    return (
                        <OneText
                            animationTransform={animationTransform[index]}
                            animationOpacity={animationOpacity[index]}
                            isChangedTheme={isChangedTheme}
                            isPcBreakPoint={isPcBreakPoint}
                            key={index}
                        >
                            {textArr[index]}
                        </OneText>
                    );
                })
            }
        </>
    );
};
export default ProjectOneText;
