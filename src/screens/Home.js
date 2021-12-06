import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import DetailInfo from "./DetailInfo";
import DetailAbility from "./DetailAbility";
import DetailGulpApp from "./DetailGulpApp";
import DetailAvn from "./DetailAvn";
import DetailMusinsa from "./DetailMusinsa";
import DetailKTnG from "./DetailKTnG";
import DetailConsultKit from "./DetailConsultKit";
import DetailKyobo from "./DetailKyobo";
import DetailBeotherm from "./DetailBeotherm";
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
    Header,
    Section,
    TopButton,
} from "./../components";
import { categoryImages } from "./../images";
import { useSelector, useDispatch } from "react-redux";
import { stateInteractions } from "./../store/interactions/interactionsSlice";
import actionsInteractions from "./../store/interactions/interactionsActions";

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
    const dispatch = useDispatch();
    // const { projectTitle } = useSelector(stateInteractions);
    const [projectTitle, setProjectTitle] = useState(tempData);
    const [projectImage, setProjectImage] = useState(tempImage);
    const [imgKey, setImgKey] = useState();
    const [isPcBreakPoint, setIsPcBreakPoint] = useState(false); // 너비 1200이하에서 true
    const [isChangedTheme, setIsChangedTheme] = useState(false); // 다크모드 on/off
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    // ✨ 너비 1200픽셀 이하 브레이크포인트
    useEffect(() => {
        if (window.innerWidth < 1200) {
            setIsPcBreakPoint(true);
        } else {
            setIsPcBreakPoint(false);
        }
    }, [window.innerWidth]);

    useEffect(() => {
        // ✨ 스크롤값, 화면너비 저장(인터랙션, 이미지교체에 활용)
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("scroll", onscroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const onScroll = () => {
        setScrollY(window.scrollY);
    };

    const onResize = () => {
        setScrollX(window.innerWidth);
    };

    // ✨ 커서 들어오면 이미지 노출
    const itemEnter = (id, sectionId) => {
        const copy = [...projectTitle];
        const copyImage = [...projectImage];

        copy[sectionId][id].isHover = !copy[sectionId][id].isHover;
        copyImage[sectionId][id].isShow = !copyImage[sectionId][id].isShow;

        // dispatch(actionsInteractions.setProjectTitle(copy));
        setProjectTitle(copy);
        setProjectImage(copyImage);
        setImgKey({ id: id, sectionId: sectionId });
        changeTheme(copy);
    };

    // ✨ 커서 나가면 이미지 숨김 (노출과 코드가 같음)
    const itemLeave = (id, sectionId) => {
        const copy = [...projectTitle];
        const copyImage = [...projectImage];

        copy[sectionId][id].isHover = !copy[sectionId][id].isHover;
        copyImage[sectionId][id].isShow = !copyImage[sectionId][id].isShow;

        // dispatch(actionsInteractions.setProjectTitle(copy));
        setProjectTitle(copy);
        setProjectImage(copyImage);
        setImgKey({ id: id, sectionId: sectionId });
        changeTheme(copy);
    };

    // ✨ 특정 타이틀 마우스오버시 다크테마로 변경
    const changeTheme = (projectTitle) => {
        if (projectTitle[0][2].isHover || projectTitle[2][0].isHover) {
            setIsChangedTheme(true);
        } else if (!projectTitle[0][2].isHover || !projectTitle[2][0].isHover) {
            setIsChangedTheme(false);
        }
    };

    // ✨ Top버튼 클릭시 상단으로
    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setScrollY(0);
    };

    return (
        <Body isChangedTheme={isChangedTheme} isPcBreakPoint={isPcBreakPoint}>
            <Header
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
                scrollY={scrollY}
            />
            <Switch>
                <Route path="/" exact>
                    <MainWrap>
                        <div className="contents">
                            <TitleContainer>
                                {projectTitle.map((item, index) => {
                                    return (
                                        <Section
                                            // itemEnter={(id, sectionId)=>{
                                            //     dispatch(actionsInteractions.itemEnter(id, sectionId, projectTitle, projectImage, setProjectImage, setImgKey, changeTheme));
                                            // }}
                                            itemEnter={itemEnter}
                                            // itemLeave={()=>{}}
                                            itemLeave={itemLeave}
                                            projectTitle={projectTitle[index]}
                                            sectionId={index}
                                            img={categoryImages}
                                            key={index}
                                            isChangedTheme={isChangedTheme}
                                            isPcBreakPoint={isPcBreakPoint}
                                        />
                                    );
                                })}
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
                    <DetailInfo scrollX={scrollX} />
                </Route>
                <Route path="/0/1">
                    <DetailAbility scrollX={scrollX} />
                </Route>
                <Route path="/1/0">
                    <DetailGulpApp scrollX={scrollX} />
                </Route>
                <Route path="/2/0">
                    <DetailAvn scrollX={scrollX} />
                </Route>
                <Route path="/2/1">
                    <DetailMusinsa scrollX={scrollX} />
                </Route>
                <Route path="/2/2">
                    <DetailKTnG scrollX={scrollX} />
                </Route>
                <Route path="/2/3">
                    <DetailConsultKit scrollX={scrollX} />
                </Route>
                <Route path="/2/4">
                    <DetailKyobo scrollX={scrollX} />
                </Route>
                <Route path="/2/5">
                    <DetailBeotherm scrollX={scrollX} />
                </Route>
            </Switch>
            <TopButton
                scrollY={scrollY}
                onClick={handleTop}
                isChangedTheme={isChangedTheme}
            />
        </Body>
    );
};

export default Home;
