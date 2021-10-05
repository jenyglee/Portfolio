import React from "react";
import styled from "styled-components";
import Logo from "./../images/logo.png";
import Cally from "./../images/cally.png";
import { Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import { Header, Section } from "./../components";

const MainWrap = styled.main`
    width: 1600px;
    margin: 0 auto;
`;

const Home = () => {
    return (
        <MainWrap>
            <Header />
            <div className="contents">
                <Section />
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
