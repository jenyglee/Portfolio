import React, { useEffect } from "react";
import styled from "styled-components";
import Logo from "./../images/logo.png";
import Cally from "./../images/cally.png";
import { Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import { Header, Section } from "./../components";
import sampleImage00 from "./../images/sampleImage01.png";
import sampleImage01 from "./../images/sampleImage02.jpeg";
import sampleImage02 from "./../images/sampleImage03.jpeg";
import sampleImage03 from "./../images/sampleImage04.jpeg";
import sampleImage04 from "./../images/sampleImage05.jpeg";
import sampleImage05 from "./../images/sampleImage06.jpeg";
import sampleImage06 from "./../images/sampleImage07.jpeg";
import sampleImage07 from "./../images/sampleImage08.jpeg";
import sampleImage08 from "./../images/sampleImage09.jpeg";

const MainWrap = styled.main`
    width: 1200px;
    height: 1000px;
    margin: 0 auto;
    position: relative;
`;

const StyledImage = styled.img`
    /* width: 100%; */
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    transition: 0.5s;
    opacity: ${({ isShow }) => (isShow ? 1 : 0)};
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
        { id: 0, title: "two-1", isHover: false },
        { id: 1, title: "two-2", isHover: false },
        { id: 2, title: "two-3", isHover: false },
    ],

    [
        { id: 0, title: "three-1", isHover: false },
        { id: 1, title: "three-2", isHover: false },
        { id: 2, title: "three-3", isHover: false },
    ],
];

const tempImage = [
    [
        { id: 0, source: sampleImage00, isShow: false },
        { id: 1, source: sampleImage01, isShow: false },
        { id: 2, source: sampleImage02, isShow: false },
    ],
    [
        { id: 0, source: sampleImage03, isShow: false },
        { id: 1, source: sampleImage04, isShow: false },
        { id: 2, source: sampleImage05, isShow: false },
    ],
    [
        { id: 0, source: sampleImage06, isShow: false },
        { id: 1, source: sampleImage07, isShow: false },
        { id: 2, source: sampleImage08, isShow: false },
    ],
];

const Home = () => {
    const [projectTitle, setProjectTitle] = useState(tempData);
    const [projectImage, setProjectImage] = useState(tempImage);
    const [imgKey, setImgKey] = useState();
    // console.log(projectTitle);
    useEffect(() => {
        console.log("메인랜더링2");
    });

    // ✨ 커서 들어오면 이미지 노출
    const itemEnter = (id, sectionId) => {
        // console.log("asdnj");
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
                                        // projectData={projectTitle}
                                        sectionId={index}
                                        key={index}
                                    />
                                );
                            })}
                        </TitleContainer>
                        {imgKey ? (
                            <StyledImage
                                src={
                                    projectImage[imgKey.sectionId][imgKey.id]
                                        .source
                                }
                                isShow={
                                    projectImage[imgKey.sectionId][imgKey.id]
                                        .isShow
                                }
                            />
                        ) : null}
                    </div>
                    {/* <StyledImage src={sampleImage03} alt="이미지" /> */}
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
