import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import DetailInfo from "screens/DetailInfo";
import DetailAbility from "screens/DetailAbility";
import DetailGulpApp from "screens/DetailGulpApp";
import DetailAvn from "screens/DetailAvn";
import DetailMusinsa from "screens/DetailMusinsa";
import DetailKTnG from "screens/DetailKTnG";
import DetailConsultKit from "screens/DetailConsultKit";
import DetailKyobo from "screens/DetailKyobo";
import DetailBeotherm from "screens/DetailBeotherm";
import { itemEnter, itemLeave, handleTop } from "helper/helper";
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
} from "components";
import { categoryImages } from "images";
import { ContentsContext } from "storeContext/contents";

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
    width: 100%;
    margin: 0 auto;
    padding-top: 224px;

    @media ${({ theme }) => theme.size1200} {
        padding-top: 200px;
    }
    @media ${({ theme }) => theme.size960} {
        padding-top: 150px;
    }
    @media ${({ theme }) => theme.size768} {
        padding-top: 130px;
    }
    @media ${({ theme }) => theme.size568} {
        padding-top: 60px;
    }
`;

const TitleAlignWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const TitleContainer = styled.article`
    width: 100%;
    position: relative;
    z-index: 1;
`;

const RefContainer = styled.div``;

const Home = () => {
    const contents = useContext(ContentsContext);
    const [projectTitle, setProjectTitle] = useState(contents.projects);
    const [projectImage, setProjectImage] = useState(contents.projectBgImages);
    const [imgKey, setImgKey] = useState();
    const [isPcBreakPoint, setIsPcBreakPoint] = useState(false); // 너비 1200이하에서 true
    const [isChangedTheme, setIsChangedTheme] = useState(false); // 다크모드 on/off
    const [scrollX, setScrollX] = useState(window.innerWidth);
    const [scrollY, setScrollY] = useState(window.scrollY);

    // ✨ 첫 진입 시 상단으로 이동
    useEffect(() => {
        handleTop();
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
                    <MainHeader
                        isChangedTheme={isChangedTheme}
                        isPcBreakPoint={isPcBreakPoint}
                        scrollY={scrollY}
                        onIntroClick={onIntroClick}
                        onDevelopClick={onDevelopClick}
                        onDesignClick={onDesignClick}
                    />
                    <MainWrap>
                        <TitleAlignWrap>
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
                        </TitleAlignWrap>
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
