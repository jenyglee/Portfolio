import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logo } from "./../images";

const Wrap = styled.header`
    position: fixed;
    width: 1200px;
    margin: 0 auto;
    padding-top: 86px;
    opacity: ${({ showHeader }) => (showHeader ? 1 : 0)};
    transform: ${({ showHeader }) =>
        showHeader ? `translateY(0px)` : `translateY(-120px)`};
    transition: 0.5s;
    @media ${({ theme }) => theme.size1200} {
        width: 960px;
        padding-top: 60px;
    }
    @media ${({ theme }) => theme.size960} {
        width: 768px;
        padding-top: 40px;
        padding-left: 20px;
        padding-right: 20px;
    }
    @media ${({ theme }) => theme.size768} {
        width: 568px;
        padding-top: 20px;
    }
    @media ${({ theme }) => theme.size568} {
        width: 320px;
        padding-top: 20px;
    }
    z-index: 1;
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

const DetailHeader = ({ scrollY }) => {
    const [showHeader, setShowHeader] = useState(false);
    useEffect(() => {
        if (scrollY > 200) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }, [scrollY]);

    return (
        <Wrap showHeader={showHeader}>
            <Link to="/">
                <LogoWrap>
                    <LogoImage src={logo} />
                </LogoWrap>
            </Link>
        </Wrap>
    );
};

export default DetailHeader;
