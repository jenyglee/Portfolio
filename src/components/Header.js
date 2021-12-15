import { useEffect, useState } from "react";
import styled from "styled-components";
import CallyIntroduce from "./../images/cally_introduce.png";
import { Link } from "react-router-dom";
import { logo } from "../images";

const FixedContainer = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 50%;
    transition: 0.5s;

    opacity: ${({ showHeader }) => (showHeader ? 1 : 0)};
    transform: ${({ showHeader }) =>
        showHeader ? `translate(-50%, 0)` : `translate(-50%, -120px)`};
    z-index: 20;
`;

const HeaderContainer = styled.header`
    max-width: 1200px;
    margin: 86px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${({ theme }) => theme.size1200} {
        max-width: 960px;
        margin: 60px auto 0 auto;
    }
    @media ${({ theme }) => theme.size960} {
        max-width: 768px;
        margin: 40px auto 0 auto;
    }
    @media ${({ theme }) => theme.size768} {
        max-width: 568px;
    }
    @media ${({ theme }) => theme.size568} {
        max-width: 320px;
        padding: 0 20px;
        margin: 20px auto 0 auto;
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

const Gnb = styled.ul`
    font-family: "Open Sans", sans-serif;
    width: 27%;
    font-weight: bold;
    justify-content: space-between;
    display: flex;

    @media ${({ theme }) => theme.size1200} {
        display: none;
    }
`;

const GnbItem = styled.li`
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
    top: -220px;
    transition: 0.5s;
    padding-top: 63px;
    transform: ${({ translateY }) => translateY};
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
`;

const CallyImg = styled.img`
    width: 84px;
    height: 28px;
    margin-right: 12px;
`;

const MenuTitle = styled.p`
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
    { id: 0, title: "INTRODUCE", koreanTitle: "소개" },
    { id: 1, title: "DEVELOPMENT", koreanTitle: "개발 프로젝트" },
    { id: 2, title: "DESIGN", koreanTitle: "디자인 프로젝트" },
];

const Header = ({
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
        if (scrollY > 200) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }, [scrollY]);

    return (
        <FixedContainer showHeader={showHeader}>
            <HeaderContainer>
                {/* 숨겨진 메뉴 */}
                <MenuContainer
                    translateY={isMenuEntered ? "translateY(220px)" : "0"}
                >
                    {menu.map((item, index) => {
                        return (
                            <TitleContainer key={index}>
                                <ButtonArea>
                                    <CallyImg src={CallyIntroduce} />
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
                                <a>{item.title}</a>
                            </GnbItem>
                        );
                    })}
                </Gnb>
                {/* 햄버거 버튼 */}
                <MenuButton
                    onClick={() => {
                        setIsMenuEntered(!isMenuEntered);
                    }}
                    href="#"
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

export default Header;
