import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BtnWrap = styled.div`
    width: ${({ isHover }) => (isHover ? 74 : 30)}px;
    height: 30px;
    border-radius: 50px;
    border: ${({ isHover, theme }) =>
        `1px solid ${
            isHover ? theme.btnBackground : theme.whiteThemeBtnStroke
        }`};
    transition: 0.5s;
    background-color: ${({
        isHover,
        theme,
        isChangedTheme,
        isPcBreakPoint,
    }) => {
        if (isHover) {
            if (isChangedTheme && !isPcBreakPoint) {
                return theme.darkThemeBtnBackground;
            } else if (!isChangedTheme) {
                return theme.whiteThemeBtnBackground;
            }
        } else return null;
    }};
    display: flex;
    align-items: center;
    opacity: ${({ btnAnimationOpacity }) => btnAnimationOpacity};
    transform: ${({ btnAnimationTransform }) =>
        `translateY(${btnAnimationTransform}px)`};
    position: absolute;
    top: 10px;
    left: 100%;

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
    border-bottom-color: ${({
        isHover,
        theme,
        isChangedTheme,
        isPcBreakPoint,
    }) => {
        if (isHover) {
            if (isChangedTheme && !isPcBreakPoint) {
                return theme.darkThemeBtnArrow;
            } else if (!isChangedTheme) {
                return theme.whiteThemeBtnArrow;
            }
        } else if (!isHover) {
            if (isChangedTheme && !isPcBreakPoint) {
                return theme.whiteThemeBtnArrow;
            } else if (!isChangedTheme) {
                return theme.darkThemeBtnArrow;
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
        if (isHover) {
            if (isChangedTheme && !isPcBreakPoint) {
                return theme.darkThemeBtnText;
            } else if (!isChangedTheme) {
                return theme.whiteThemeBtnText;
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

{
    /* ✨ 타이틀 옆에 붙어있는 버튼 */
}
const ProjectViewButton = ({
    projectTitle,
    isChangedTheme,
    isPcBreakPoint,
    btnAnimationTransform,
    btnAnimationOpacity,
}) => {
    return (
        <BtnWrap
            isHover={projectTitle.isHover}
            isChangedTheme={isChangedTheme}
            isPcBreakPoint={isPcBreakPoint}
            btnAnimationTransform={btnAnimationTransform}
            btnAnimationOpacity={btnAnimationOpacity}
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
    );
};

export default ProjectViewButton;
