import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import Project from "./Project";

const SectionContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 74px;
    @media ${({ theme }) => theme.size1200} {
        max-width: 960px;
    }
    @media ${({ theme }) => theme.size960} {
        max-width: 768px;
    }
    @media ${({ theme }) => theme.size768} {
        max-width: 568px;
    }
    @media ${({ theme }) => theme.size568} {
        max-width: 320px;
        padding-bottom: 0px;
    }
`;

// projectTitle = projectTitle[각 섹션]
const Section = ({
    projectTitle,
    sectionId,
    itemEnter,
    itemLeave,
    img,
    isChangedTheme,
    isPcBreakPoint,
}) => {
    const titleNameArr = [];
    for (let i = 0; i < projectTitle.length; i++) {
        // projectTitle[0].title.split(""); 👉 ['i','n','f','o']
        // projectTitle[1].title.split(""); 👉 ['A','b','i','l','i','t','y']
        const arr = projectTitle[i].title.split("");
        titleNameArr.push(arr); // [['i','n','f','o'],['A','b','i','l','i','t','y'],[...]]
    }

    return (
        <SectionContainer>
            <Category
                img={img[sectionId]} //categoryImages[2]
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            />
            {titleNameArr.map((title, index) => {
                return (
                    <Project
                        projectTitle={projectTitle[index]}
                        textArr={title}
                        onEnter={itemEnter}
                        onLeave={itemLeave}
                        sectionId={sectionId}
                        isChangedTheme={isChangedTheme}
                        isPcBreakPoint={isPcBreakPoint}
                        key={index}
                    />
                );
            })}
        </SectionContainer>
    );
};

export default Section;
