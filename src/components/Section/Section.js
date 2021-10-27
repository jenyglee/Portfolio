import React, { useState } from "react";
import styled from "styled-components";
import Cally from "./../../images/cally.png";
import Category from "./Category";
import Project from "./Project";
import ProjectBackground from "./ProjectBackground";

const SectionContainer = styled.section`
    width: 50%;
`;

const Section = ({ tempData, tempImage }) => {
    const [projectTitle, setProjectTitle] = useState(tempData);
    const [projectImage, setProjectImage] = useState(tempImage);

    // ✨ 마우스 호버시 투명도 변경
    const itemEnter = (id) => {
        const copy = [...projectTitle];
        const copyImage = [...projectImage];

        copy[id].isHover = !copy[id].isHover;
        copyImage[id].isShow = !copyImage[id].isShow;

        setProjectTitle(copy);
        setProjectImage(copyImage);
    };

    const itemLeave = (id) => {
        const copy = [...projectTitle];
        const copyImage = [...projectImage];

        copy[id].isHover = !copy[id].isHover;
        copyImage[id].isShow = !copyImage[id].isShow;

        setProjectTitle(copy);
        setProjectImage(copyImage);

        console.log(copy[id]);
    };

    return (
        <SectionContainer>
            <Category img={Cally} />
            <ProjectBackground projectImage={projectImage} />
            <Project
                projectTitle={projectTitle}
                itemEnter={itemEnter}
                itemLeave={itemLeave}
            />
        </SectionContainer>
    );
};

export default Section;
