import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { categoryImages, logo } from "../images";

const FixedContainer = styled.div`
    width: 100%;
    position: fixed;
    z-index: 2;
`;

const HeaderContainer = styled.header`
    max-width: 1200px;
    margin: 86px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
    transition: 0.5s;
    opacity: ${({ showHeader }) => (showHeader ? 1 : 0)};
    transform: ${({ showHeader }) =>
        showHeader ? `translateY(0)` : `translateY(-120px)`};
    @media ${({ theme }) => theme.size1200} {
        padding: 0 20px;
        margin: 60px auto 0 auto;
    }
    @media ${({ theme }) => theme.size960} {
        margin: 40px auto 0 auto;
    }
    @media ${({ theme }) => theme.size568} {
        margin: 20px auto 0 auto;
    }
`;

const LogoWrap = styled.div`
    width: 152px;
    height: 30px;
    font-size: 25px;
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

const Gnb = styled.ul`
    width: 27%;
    justify-content: space-between;
    display: flex;

    @media ${({ theme }) => theme.size1200} {
        display: none;
    }
`;

const GnbItem = styled.li`
    font-family: "AppleSDGothicNeoB";
    font-size: 16px;
    cursor: pointer;
    color: ${({ theme, isChangedTheme, isPcBreakPoint }) =>
        isChangedTheme && !isPcBreakPoint
            ? theme.darkThemeText
            : theme.whiteThemeText};
`;

const MenuButton = styled.a`
    width: 20px;
    height: 18px;
    position: relative;
    display: none;
    cursor: pointer;
    @media ${({ theme }) => theme.size1200} {
        display: block;
    }
`;

const MenuLineObj = styled.span`
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    top: ${({ top }) => top};
    opacity: ${({ opacity }) => opacity};
    transform: ${({ rotate }) => rotate};
    transition: 0.5s;
`;

const MenuContainer = styled.div`
    width: 100%;
    height: 220px;
    background-color: #fff;
    position: absolute;
    top: -280px;
    left: 0;
    transition: 0.5s;
    padding-top: 63px;
    transform: ${({ translateY }) => translateY};
    display: none;
    @media ${({ theme }) => theme.size1200} {
        display: block;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    position: relative;
`;

const ButtonArea = styled.div`
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ImageWrap = styled.div`
    height: 20px;
    overflow: hidden;
`;

const CallyImg = styled.img`
    height: 100%;
    margin-right: 12px;
`;

const MenuTitle = styled.p`
    font-family: "AppleSDGothicNeoM";
    font-size: 12px;
    display: inline-block;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => theme.line};
    display: ${({ display }) => display};
`;

const menu = [
    {
        id: 0,
        title: "INTRODUCE",
        koreanTitle: "소개",
        img: categoryImages[0].image,
    },
    {
        id: 1,
        title: "DEVELOPMENT",
        koreanTitle: "개발 프로젝트",
        img: categoryImages[1].image,
    },
    {
        id: 2,
        title: "DESIGN",
        koreanTitle: "디자인 프로젝트",
        img: categoryImages[2].image,
    },
];

const MainHeader = ({
    isChangedTheme,
    isPcBreakPoint,
    scrollY,
    onIntroClick,
    onDevelopClick,
    onDesignClick,
}) => {
    const [isMenuEntered, setIsMenuEntered] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        if (scrollY > 100) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }, [scrollY]);

    return (
        <FixedContainer>
            <HeaderContainer showHeader={showHeader}>
                {/* 숨겨진 메뉴 */}
                <MenuContainer
                    translateY={isMenuEntered ? "translateY(220px)" : "0"}
                >
                    {menu.map((item, index) => {
                        return (
                            <TitleContainer key={index}>
                                <ButtonArea
                                    onClick={() => {
                                        if (index === 0) {
                                            onIntroClick();
                                        }
                                        if (index === 1) {
                                            onDevelopClick();
                                        }
                                        if (index === 2) {
                                            onDesignClick();
                                        }
                                        setIsMenuEntered(!isMenuEntered);
                                    }}
                                >
                                    <ImageWrap>
                                        <CallyImg src={item.img} />
                                    </ImageWrap>
                                    <MenuTitle>{item.koreanTitle}</MenuTitle>
                                </ButtonArea>
                                <Line
                                    display={(item.id = 2 ? "block" : "none")}
                                />
                            </TitleContainer>
                        );
                    })}
                </MenuContainer>
                {/* 로고 */}
                <Link to="/">
                    <LogoWrap
                        isChangedTheme={isChangedTheme}
                        isPcBreakPoint={isPcBreakPoint}
                    >
                        <LogoImage src={logo} />
                    </LogoWrap>
                </Link>
                {/* intro, develop, design */}
                <Gnb>
                    {menu.map((item, index) => {
                        return (
                            <GnbItem
                                isChangedTheme={isChangedTheme}
                                isPcBreakPoint={isPcBreakPoint}
                                key={index}
                                onClick={() => {
                                    if (index === 0) {
                                        onIntroClick();
                                    }
                                    if (index === 1) {
                                        onDevelopClick();
                                    }
                                    if (index === 2) {
                                        onDesignClick();
                                    }
                                }}
                            >
                                {item.title}
                            </GnbItem>
                        );
                    })}
                </Gnb>
                {/* 햄버거 버튼 */}
                <MenuButton
                    onClick={() => {
                        setIsMenuEntered(!isMenuEntered);
                    }}
                >
                    <MenuLineObj
                        top={isMenuEntered ? `50%` : `0`}
                        rotate={isMenuEntered ? `rotate(45deg)` : `rotate(0)`}
                    />
                    <MenuLineObj top={`50%`} opacity={isMenuEntered ? 0 : 1} />
                    <MenuLineObj
                        top={isMenuEntered ? `50%` : `100%`}
                        rotate={isMenuEntered ? `rotate(-45deg)` : `rotate(0)`}
                    />
                </MenuButton>
            </HeaderContainer>
        </FixedContainer>
    );
};

export default MainHeader;
