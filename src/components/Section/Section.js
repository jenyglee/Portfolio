import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cally from "./../../images/cally.png";
import Category from "./Category";
import Project from "./Project";

const SectionContainer = styled.section`
    width: 50%;
`;

// projectTitle = projectTitle[각 섹션]
const Section = ({ projectTitle, sectionId, itemEnter, itemLeave }) => {
    useEffect(() => {});
    const titleNameArr = [];
    projectTitle.map((item, i) => {
        // projectTitle[0].title.split(""); 👉 ['i','n','f','o']
        // projectTitle[1].title.split(""); 👉 ['A','b','i','l','i','t','y']
        const arr = item.title.split("");
        titleNameArr.push(arr);
        // [['i','n','f','o'],['A','b','i','l','i','t','y'],[...]]
    });

    return (
        <SectionContainer>
            <Category img={Cally} />
            {titleNameArr.map((title, index) => {
                return (
                    <Project
                        projectTitle={projectTitle[index]}
                        textArr={title}
                        onEnter={itemEnter}
                        onLeave={itemLeave}
                        sectionId={sectionId}
                    />
                );
            })}
        </SectionContainer>
    );
};

export default Section;
