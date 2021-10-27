import React from "react";
import styled from "styled-components";
import Logo from "./../images/logo.png";
import Cally from "./../images/cally.png";
import { Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import { Header, Section } from "./../components";
import sampleImage00 from "./../images/sampleImage01.jpeg";
import sampleImage01 from "./../images/sampleImage02.jpeg";
import sampleImage02 from "./../images/sampleImage03.jpeg";
import sampleImage03 from "./../images/sampleImage04.jpeg";
import sampleImage04 from "./../images/sampleImage05.jpeg";
import sampleImage05 from "./../images/sampleImage06.jpeg";
import sampleImage06 from "./../images/sampleImage07.jpeg";
import sampleImage07 from "./../images/sampleImage08.jpeg";
import sampleImage08 from "./../images/sampleImage09.jpeg";

const MainWrap = styled.main`
    width: 1600px;
    height: 1000px;
    margin: 0 auto;
    background: ${({ background }) => `url(${background}) no-repeat`};
`;

const StyledImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`;

const projectData = [
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

const projectBackgroundImage = [
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
    const [background, setBackground] = useState("");

    // ✨ 마우스오버시 배경노출
    const handleTitleHover = (sectionId, itemId) => {
        // console.log(sectionId, itemId); 1 1 , 1 2 , 1 3
        const copy = projectBackgroundImage[sectionId][itemId];
        setBackground(copy.source);
    };

    // ✨ 마우스리브시 배경삭제
    const handleTitleLeave = () => {
        setBackground("");
    };

    return (
        <div>
            <Header />
            <Route path="/" exact>
                <MainWrap background={background}>
                    <div className="contents">
                        {projectData.map((item, index) => {
                            return (
                                <Section
                                    projectData={projectData[index]}
                                    onTitleHover={handleTitleHover}
                                    onTitleLeave={handleTitleLeave}
                                    sectionId={index}
                                    style={{
                                        zIndex: 1,
                                    }}
                                />
                            );
                        })}
                    </div>
                    {/* <StyledImage src={sampleImage03} alt="이미지" /> */}
                </MainWrap>
            </Route>

            <Route path="/detail">
                <MainWrap>
                    <div className="contents">
                        <Section
                            projectData={projectData[2]}
                            projectBackgroundImage={projectBackgroundImage[2]}
                        />
                    </div>
                </MainWrap>
            </Route>
        </div>
    );
};

export default Home;
