import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logo } from "images";

const AlignWarp = styled.div`
    width: 100%;
    position: fixed;
`;

const Wrap = styled.header`
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 86px;
    display: flex;
    justify-content: space-between;
    opacity: ${({ showHeader }) => (showHeader ? 1 : 0)};
    transform: ${({ showHeader }) =>
        showHeader ? `translateY(0px)` : `translateY(-120px)`};
    transition: 0.5s;
    @media ${({ theme }) => theme.size1200} {
        padding-top: 60px;
        padding-left: 20px;
        padding-right: 20px;
    }
    @media ${({ theme }) => theme.size960} {
        padding-top: 40px;
    }
    @media ${({ theme }) => theme.size768} {
        padding-top: 20px;
    }
    @media ${({ theme }) => theme.size568} {
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

const MenuWrap = styled.article`
    display: flex;
`;
const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    margin-right: ${({ isPrev }) => (isPrev ? "20px" : "0")};
    @media ${({ theme }) => theme.size768} {
        margin-right: ${({ isPrev }) => (isPrev ? "10px" : "0")};
    }
`;
const ThumbWrap = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    @media ${({ theme }) => theme.size768} {
        width: 20px;
        height: 20px;
    }
`;
const ThumbImage = styled.img`
    width: 100%;
    height: 100%;
`;
const Title = styled.h4`
    font-size: 16px;
    font-weight: bold;
    @media ${({ theme }) => theme.size768} {
        font-size: 13px;
    }
`;

const DetailHeader = ({
    scrollY,
    prevLink,
    prevImg,
    prevTitle,
    nextLink,
    nextImg,
    nextTitle,
    pageName,
}) => {
    const [showHeader, setShowHeader] = useState(false);
    useEffect(() => {
        if (scrollY > 100) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }, [scrollY]);

    return (
        <AlignWarp>
            <Wrap showHeader={showHeader}>
                <Link to="/">
                    <LogoWrap>
                        <LogoImage src={logo} />
                    </LogoWrap>
                </Link>
                <MenuWrap>
                    <Link to={prevLink}>
                        <ButtonWrap isPrev>
                            <ThumbWrap>
                                <ThumbImage src={prevImg} />
                            </ThumbWrap>
                            <Title>{prevTitle}</Title>
                        </ButtonWrap>
                    </Link>
                    {/* (예외용) Github 외부링크 */}
                    {pageName === "Ability" ? (
                        <a href="https://github.com/jenyglee" target="_blank">
                            <ButtonWrap>
                                <ThumbWrap>
                                    <ThumbImage src={nextImg} />
                                </ThumbWrap>
                                <Title>{nextTitle}</Title>
                            </ButtonWrap>
                        </a>
                    ) : (
                        <Link to={nextLink}>
                            <ButtonWrap>
                                <ThumbWrap>
                                    <ThumbImage src={nextImg} />
                                </ThumbWrap>
                                <Title>{nextTitle}</Title>
                            </ButtonWrap>
                        </Link>
                    )}
                </MenuWrap>
            </Wrap>
        </AlignWarp>
    );
};

export default DetailHeader;
