import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import DetailInfo from "./DetailInfo";
import DetailAbility from "./DetailAbility";
import DetailGulpApp from "./DetailGulpApp";
import DetailAvn from "./DetailAvn";
import DetailMusinsa from "./DetailMusinsa";
import DetailKTnG from "./DetailKTnG";
import DetailConsultKit from "./DetailConsultKit";
import DetailKyobo from "./DetailKyobo";
import DetailBeotherm from "./DetailBeotherm";
import { itemEnter, itemLeave, handleTop } from "../helper/helper";
import { useState } from "react";
import {
    BgComponent01,
    BgComponent02,
    BgComponent03,
    BgComponent04,
    BgComponent05,
    BgComponent06,
    BgComponent07,
    BgComponent08,
    BgComponent09,
    BgComponent10,
    MainHeader,
    Section,
    TopButton,
} from "./../components";
import { categoryImages } from "./../images";

const context = React.createContext();

const Body = styled.main`
    height: 100%;
    background-color: ${({ theme, isChangedTheme, isPcBreakPoint }) =>
        isChangedTheme && !isPcBreakPoint
            ? theme.darkThemeBackgroud
            : theme.whiteThemeBackgroud};
    transition: 0.5s;
    position: relative;
`;

const MainWrap = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    padding-top: 224px;

    @media ${({ theme }) => theme.size1200} {
        padding-top: 120px;
    }
    @media ${({ theme }) => theme.size568} {
        padding-top: 50px;
    }
`;

const TitleContainer = styled.article`
    position: relative;
    z-index: 1;
`;

const RefContainer = styled.div``;

const tempData = [
    [
        { id: 0, title: "Info", isHover: false },
        { id: 1, title: "Ability", isHover: false },
        { id: 2, title: "Github", isHover: false },
    ],

    [{ id: 0, title: "Gulp App", isHover: false }],

    [
        { id: 0, title: "Avn", isHover: false },
        { id: 1, title: "Musinsa", isHover: false },
        { id: 2, title: "Kt&g", isHover: false },
        { id: 3, title: "ConsultKit", isHover: false },
        { id: 4, title: "Kyobo", isHover: false },
        { id: 5, title: "Beotherm", isHover: false },
    ],
];

const tempImage = [
    [
        { id: 0, isShow: false },
        { id: 1, isShow: false },
        { id: 2, isShow: false },
    ],
    [{ id: 0, isShow: false }],
    [
        { id: 0, isShow: false },
        { id: 1, isShow: false },
        { id: 2, isShow: false },
        { id: 3, isShow: false },
        { id: 4, isShow: false },
        { id: 5, isShow: false },
        { id: 6, isShow: false },
    ],
];

const Home = () => {
    const [projectTitle, setProjectTitle] = useState(tempData);
    const [projectImage, setProjectImage] = useState(tempImage);
    const [imgKey, setImgKey] = useState();
    const [isPcBreakPoint, setIsPcBreakPoint] = useState(false); // 너비 1200이하에서 true
    const [isChangedTheme, setIsChangedTheme] = useState(false); // 다크모드 on/off
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    // ✨ 첫 진입 시 상단으로 이동
    useEffect(() => {
        handleTop();
        setScrollX(window.innerWidth);
        setScrollY(window.innerHeight);
        // ✨ 스크롤값, 화면너비 저장(인터랙션, 이미지교체에 활용)
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("scroll", onscroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    // ✨ 너비 1200픽셀 이하 브레이크포인트
    useEffect(() => {
        if (window.innerWidth < 1200) {
            setIsPcBreakPoint(true);
        } else {
            setIsPcBreakPoint(false);
        }
    }, [window.innerWidth]);

    const onScroll = () => {
        setScrollY(window.scrollY);
    };

    const onResize = () => {
        setScrollX(window.innerWidth);
    };

    // ✨메뉴 클릭 시 스크롤링을 위한 위치 설정
    const introRef = useRef(null);
    const developRef = useRef(null);
    const designRef = useRef(null);
    const onIntroClick = () => {
        introRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const onDevelopClick = () => {
        developRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const onDesignClick = () => {
        designRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Body isChangedTheme={isChangedTheme} isPcBreakPoint={isPcBreakPoint}>
            <Switch>
                <Route path="/" exact>
                    <MainWrap>
                        <MainHeader
                            isChangedTheme={isChangedTheme}
                            isPcBreakPoint={isPcBreakPoint}
                            scrollY={scrollY}
                            onIntroClick={onIntroClick}
                            onDevelopClick={onDevelopClick}
                            onDesignClick={onDesignClick}
                        />
                        <div className="contents">
                            <TitleContainer>
                                <RefContainer ref={introRef}>
                                    <Section
                                        itemEnter={(id, sectionId) => {
                                            itemEnter({
                                                id,
                                                sectionId,
                                                projectTitle,
                                                projectImage,
                                                setProjectTitle,
                                                setProjectImage,
                                                setImgKey,
                                                setIsChangedTheme,
                                            });
                                        }}
                                        itemLeave={(id, sectionId) => {
                                            itemLeave({
                                                id,
                                                sectionId,
                                                projectTitle,
                                                projectImage,
                                                setProjectTitle,
                                                setProjectImage,
                                                setImgKey,
                                                setIsChangedTheme,
                                            });
                                        }}
                                        projectTitle={projectTitle[0]}
                                        sectionId={0}
                                        img={categoryImages}
                                        isChangedTheme={isChangedTheme}
                                        isPcBreakPoint={isPcBreakPoint}
                                        scrollX={scrollX}
                                    />
                                </RefContainer>
                                <RefContainer ref={developRef}>
                                    <Section
                                        itemEnter={(id, sectionId) => {
                                            itemEnter({
                                                id,
                                                sectionId,
                                                projectTitle,
                                                projectImage,
                                                setProjectTitle,
                                                setProjectImage,
                                                setImgKey,
                                                setIsChangedTheme,
                                            });
                                        }}
                                        itemLeave={(id, sectionId) => {
                                            itemLeave({
                                                id,
                                                sectionId,
                                                projectTitle,
                                                projectImage,
                                                setProjectTitle,
                                                setProjectImage,
                                                setImgKey,
                                                setIsChangedTheme,
                                            });
                                        }}
                                        projectTitle={projectTitle[1]}
                                        sectionId={1}
                                        img={categoryImages}
                                        isChangedTheme={isChangedTheme}
                                        isPcBreakPoint={isPcBreakPoint}
                                        scrollX={scrollX}
                                    />
                                </RefContainer>
                                <RefContainer ref={designRef}>
                                    <Section
                                        itemEnter={(id, sectionId) => {
                                            itemEnter({
                                                id,
                                                sectionId,
                                                projectTitle,
                                                projectImage,
                                                setProjectTitle,
                                                setProjectImage,
                                                setImgKey,
                                                setIsChangedTheme,
                                            });
                                        }}
                                        itemLeave={(id, sectionId) => {
                                            itemLeave({
                                                id,
                                                sectionId,
                                                projectTitle,
                                                projectImage,
                                                setProjectTitle,
                                                setProjectImage,
                                                setImgKey,
                                                setIsChangedTheme,
                                            });
                                        }}
                                        projectTitle={projectTitle[2]}
                                        sectionId={2}
                                        img={categoryImages}
                                        isChangedTheme={isChangedTheme}
                                        isPcBreakPoint={isPcBreakPoint}
                                        scrollX={scrollX}
                                    />
                                </RefContainer>
                            </TitleContainer>
                            {imgKey && !isPcBreakPoint ? (
                                <div>
                                    <BgComponent01
                                        isShow={projectImage[0][0].isShow}
                                    />
                                    <BgComponent02
                                        isShow={projectImage[0][1].isShow}
                                    />
                                    <BgComponent03
                                        isShow={projectImage[0][2].isShow}
                                    />{" "}
                                    {/* Github 포폴 */}
                                    <BgComponent04
                                        isShow={projectImage[1][0].isShow}
                                    />
                                    <BgComponent05
                                        isShow={projectImage[2][0].isShow}
                                    />{" "}
                                    {/* AVN 포폴 */}
                                    <BgComponent06
                                        isShow={projectImage[2][1].isShow}
                                    />
                                    <BgComponent07
                                        isShow={projectImage[2][2].isShow}
                                    />
                                    <BgComponent08
                                        isShow={projectImage[2][3].isShow}
                                    />
                                    <BgComponent09
                                        isShow={projectImage[2][4].isShow}
                                    />
                                    <BgComponent10
                                        isShow={projectImage[2][5].isShow}
                                    />
                                </div>
                            ) : null}
                        </div>
                    </MainWrap>
                </Route>

                <Route path="/0/0">
                    <DetailInfo scrollX={scrollX} scrollY={scrollY} />
                </Route>
                <Route path="/0/1">
                    <DetailAbility scrollX={scrollX} scrollY={scrollY} />
                </Route>
                <Route path="/1/0">
                    <DetailGulpApp scrollX={scrollX} scrollY={scrollY} />
                </Route>
                <Route path="/2/0">
                    <DetailAvn scrollX={scrollX} scrollY={scrollY} />
                </Route>
                <Route path="/2/1">
                    <DetailMusinsa scrollX={scrollX} scrollY={scrollY} />
                </Route>
                <Route path="/2/2">
                    <DetailKTnG scrollX={scrollX} scrollY={scrollY} />
                </Route>
                <Route path="/2/3">
                    <DetailConsultKit scrollX={scrollX} scrollY={scrollY} />
                </Route>
                <Route path="/2/4">
                    <DetailKyobo scrollX={scrollX} scrollY={scrollY} />
                </Route>
                <Route path="/2/5">
                    <DetailBeotherm scrollX={scrollX} scrollY={scrollY} />
                </Route>
            </Switch>
            <TopButton
                scrollY={scrollY}
                onClick={() => {
                    handleTop({ setScrollY });
                }}
                isChangedTheme={isChangedTheme}
            />
        </Body>
    );
};

export default Home;
