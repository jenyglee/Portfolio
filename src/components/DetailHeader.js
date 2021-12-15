import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logo } from "./../images";

const Wrap = styled.header`
    width: 100%;
    height: 40px;
    margin-top: 86px;
    @media ${({ theme }) => theme.size1200} {
        margin-top: 60px;
    }
    @media ${({ theme }) => theme.size960} {
        margin-top: 40px;
    }
    @media ${({ theme }) => theme.size568} {
        margin-top: 20px;
    }
`;

const LogoWrap = styled.div`
    width: 152px;
    height: 30px;
    font-size: 25px;
    font-weight: bold;
    color: ${({ theme, isChangedTheme, isPcBreakPoint }) =>
        isChangedTheme && !isPcBreakPoint
            ? theme.darkThemeText
            : theme.whiteThemeText};
    transition: 0.5s;

    @media ${({ theme }) => theme.size1200} {
        width: 152px;
        height: 30px;
    }
    @media ${({ theme }) => theme.size960} {
        width: 129px;
        height: 25px;
    }
    @media ${({ theme }) => theme.size768} {
        width: 103px;
        height: 20px;
    }
`;

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
`;

const DetailHeader = () => {
    return (
        <Wrap>
            <Link to="/">
                <LogoWrap>
                    <LogoImage src={logo} />
                </LogoWrap>
            </Link>
        </Wrap>
    );
};

export default DetailHeader;
