import React, { useState } from "react";
import styled from "styled-components";
import Cally from "./../../images/cally.png";
import Category from "./Category";
import Project from "./Project";

const SectionContainer = styled.section`
    width: 50%;
`;

const Section = ({ projectData, sectionId, onTitleHover, onTitleLeave }) => {
    const [projectTitle, setProjectTitle] = useState(projectData);

    // ✨ 마우스 호버시 투명도 변경
    const itemEnter = (id) => {
        const copy = [...projectTitle];

        copy[id].isHover = !copy[id].isHover;

        setProjectTitle(copy);
        onTitleHover(sectionId, id);
        console.log(sectionId, id);
    };

    const itemLeave = (id) => {
        const copy = [...projectTitle];

        copy[id].isHover = !copy[id].isHover;

        setProjectTitle(copy);
        // console.log(copy[id]);
        onTitleLeave();
    };

    return (
        <SectionContainer>
            <Category img={Cally} />
            <Project
                projectTitle={projectTitle}
                onEnter={itemEnter}
                onLeave={itemLeave}
            />
        </SectionContainer>
    );
};

export default Section;
