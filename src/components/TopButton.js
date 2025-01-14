import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BtnContainer = styled.a`
    width: 50px;
    height: 50px;
    border: ${({ theme }) => `1px solid ${theme.whiteThemeBtnStroke}`};
    border-radius: 25px;
    position: fixed;
    bottom: -50px;
    right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    transform: ${({ showTopButton }) =>
        showTopButton ? `translateY(0)` : `translateY(-100px)`};
    cursor: pointer;
    z-index: 1;
    @media ${({ theme }) => theme.size1200} {
        right: 20px;
    }
`;

const BtnArrow = styled.div`
    width: 10px;
    height: 10px;
    display: block;
    transition: 0.5s;
    border-top: 0 solid transparent;
    border-bottom-width: 12px;
    border-bottom-style: solid;
    border-bottom-color: ${({ isChangedTheme, theme }) =>
        isChangedTheme ? theme.whiteThemeBtnArrow : theme.darkThemeBtnArrow};
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    margin-bottom: 5px;
`;

const BtnText = styled.p`
    font-size: 12px;
    transition: 0.5s;
    color: ${({ isChangedTheme, theme }) =>
        isChangedTheme ? theme.darkThemeText : theme.whiteThemeText};
`;

const TopButton = ({ scrollY, onClick, isChangedTheme }) => {
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        scrollY > 200 ? setShowTopButton(false) : setShowTopButton(true);
    }, [scrollY]);

    return (
        <BtnContainer showTopButton={showTopButton} onClick={onClick}>
            <BtnArrow isChangedTheme={isChangedTheme} />
            <BtnText isChangedTheme={isChangedTheme}>TOP</BtnText>
        </BtnContainer>
    );
};

export default TopButton;
