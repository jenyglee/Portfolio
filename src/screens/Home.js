import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import {
    BgComponent01,
    BgComponent02,
    BgComponent03,
    BgComponent04,
    Header,
    Section,
} from "./../components";

const MainWrap = styled.main`
    width: 1200px;
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
        { id: 2, title: "Git & Blog", isHover: false },
    ],

    [
        { id: 0, title: "Gulp App", isHover: false },
        // { id: 1, title: "two-2", isHover: false },
        // { id: 2, title: "two-3", isHover: false },
    ],

    [
        { id: 0, title: "three-1", isHover: false },
        { id: 1, title: "three-2", isHover: false },
        { id: 2, title: "three-3", isHover: false },
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
        { id: 1, isShow: false },
        { id: 2, isShow: false },
    ],
    [
        { id: 0, isShow: false },
        { id: 1, isShow: false },
        { id: 2, isShow: false },
    ],
];

const Home = () => {
    const [projectTitle, setProjectTitle] = useState(tempData);
    const [projectImage, setProjectImage] = useState(tempImage);
    const [imgKey, setImgKey] = useState();
    const [isPcBreakPoint, setIsPcBreakPoint] = useState(false);

    // ✨ 커서 들어오면 이미지 노출
    const itemEnter = (id, sectionId) => {
        const copy = [...projectTitle];
        const copyImage = [...projectImage];

        copy[sectionId][id].isHover = !copy[sectionId][id].isHover;
        copyImage[sectionId][id].isShow = !copyImage[sectionId][id].isShow;

        setProjectTitle(copy);
        setProjectImage(copyImage);
        setImgKey({ id: id, sectionId: sectionId });
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
    };

    useEffect(() => {
        if (window.innerWidth < 1200) {
            setIsPcBreakPoint(true);
        } else {
            setIsPcBreakPoint(false);
        }
    }, [window.innerWidth]);

    return (
        <div>
            <Header />
            <Route path="/" exact>
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
                                        key={index}
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
                                />
                                <BgComponent04
                                    isShow={projectImage[1][0].isShow}
                                />
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
        </div>
    );
};

export default Home;
