import React, { useState } from "react";
import styled from "styled-components";
import Cally from "./../../images/cally.png";
import Category from "./Category";
import Project from "./Project";

const SectionContainer = styled.section`
    width: 50%;
`;

const Section = ({ projectData, sectionId, itemEnter, itemLeave }) => {
    const [projectTitle, setProjectTitle] = useState(projectData);
    // console.log(projectTitle);

    return (
        <SectionContainer>
            <Category img={Cally} />
            <Project
                projectTitle={projectTitle}
                onEnter={itemEnter}
                onLeave={itemLeave}
                sectionId={sectionId}
            />
        </SectionContainer>
    );
};

export default Section;
