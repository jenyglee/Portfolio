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
    margin: 0 auto;
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
    return (
        <MainWrap>
            <Header />
            <div className="contents">
                <Section tempData={tempData[0]} tempImage={tempImage[0]} />
                <Section tempData={tempData[1]} tempImage={tempImage[1]} />
                <Section tempData={tempData[2]} tempImage={tempImage[2]} />
                {/* <Section>
                    <div className="category">
                        <p>COLLECTION</p>
                        <img className="cally" src={Cally} art="logo" />
                    </div>
                    <ul className="project-name">
                        <li>
                            <a href="#">TODO</a>
                            <div></div>
                            <div></div>
                            <div></div>
                        </li>
                        <li>
                            <a href="#">My site</a>
                        </li>
                        <li>
                            <a href="#">React</a>
                        </li>
                    </ul>
                </Section>
                <Section>
                    <div className="category">
                        <p>COLLECTION</p>
                        <img className="cally" src={Cally} art="logo" />
                    </div>
                    <ul className="project-name">
                        <li>
                            <a href="#">Career</a>
                            <div></div>
                            <div></div>
                            <div></div>
                        </li>
                    </ul>
                </Section> */}
            </div>
        </MainWrap>
    );
};

export default Home;
