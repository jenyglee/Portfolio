import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
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
} from "./../components";
import {categoryImages} from "./../images"

const Body = styled.main`
    background-color: ${({theme, isChangedTheme, isPcBreakPoint})=> isChangedTheme&&!isPcBreakPoint ? theme.darkThemeBackgroud : theme.whiteThemeBackgroud};
    transition:0.5s;
`

const MainWrap = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
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

    [
        { id: 0, title: "Gulp App", isHover: false },
        // { id: 1, title: "two-2", isHover: false },
        // { id: 2, title: "two-3", isHover: false },
    ],

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
    [
        { id: 0, isShow: false },
    ],
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
    // const [animationTransform, setAnimationTransform] = useState([
    //     0, 1, 2, 3, 4
    // ]);
    // animationTransform.reverse().map((item, index)=>{
    //     console.log(item, index)
    // })


    // ✨ 커서 들어오면 이미지 노출
    const itemEnter = (id, sectionId) => {
        const copy = [...projectTitle];
        const copyImage = [...projectImage];

        copy[sectionId][id].isHover = !copy[sectionId][id].isHover;
        copyImage[sectionId][id].isShow = !copyImage[sectionId][id].isShow;

        setProjectTitle(copy);
        setProjectImage(copyImage);
        setImgKey({ id: id, sectionId: sectionId });
        changeTheme(copy)
    };

    // ✨ 커서 나가면 이미지 숨김 (노출과 코드가 같음)
    const itemLeave = (id, sectionId) => {
        const copy = [...projectTitle];
        const copyImage = [...projectImage];

        copy[sectionId][id].isHover = !copy[sectionId][id].isHover;
        copyImage[sectionId][id].isShow = !copyImage[sectionId][id].isShow;

        setProjectTitle(copy);
        setProjectImage(copyImage);
        setImgKey({ id: id, sectionId: sectionId });
        changeTheme(copy)
    };

    const changeTheme = (projectTitle) => {
        if(projectTitle[2][0].isHover){
            setIsChangedTheme(true);
        }
        if(!projectTitle[2][0].isHover){
            setIsChangedTheme(false);
        }
    }

    useEffect(() => {
        if (window.innerWidth < 1200) {
            setIsPcBreakPoint(true);
        } else {
            setIsPcBreakPoint(false);
        }
    }, [window.innerWidth]);

    return (
        <Body isChangedTheme={isChangedTheme} isPcBreakPoint={isPcBreakPoint}>
            <Route path="/" exact>
                <Header isChangedTheme={isChangedTheme} isPcBreakPoint={isPcBreakPoint} />
                <MainWrap>
                    <div className="contents">
                        <TitleContainer>
                            {projectTitle.map((item, index) => {
                                return (
                                    <Section
                                        itemEnter={itemEnter}
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
                                <BgComponent01 isShow={projectImage[0][0].isShow} />
                                <BgComponent02 isShow={projectImage[0][1].isShow} />
                                <BgComponent03 isShow={projectImage[0][2].isShow} />
                                <BgComponent04 isShow={projectImage[1][0].isShow} />
                                <BgComponent05 isShow={projectImage[2][0].isShow} /> {/* AVN 포폴 */}
                                <BgComponent06 isShow={projectImage[2][1].isShow} />
                                <BgComponent07 isShow={projectImage[2][2].isShow} />
                                <BgComponent08 isShow={projectImage[2][3].isShow} />
                                <BgComponent09 isShow={projectImage[2][4].isShow} />
                                <BgComponent10 isShow={projectImage[2][5].isShow} />
                            </div>
                        ) : null}
                    </div>
                </MainWrap>
            </Route>

            <Route path="/detail">
                <MainWrap>
                    <div className="contents">ㅁㄴ암너아</div>
                </MainWrap>
            </Route>
        </Body>
    );
};

export default Home;
