import React, { useState } from "react";
import styled from "styled-components";
import Cally from "./../../images/cally.png";
import Category from "./Category";

const SectionContainer = styled.section`
    width: 50%;
`;

const ProjectName = styled.ul`
    font-family: "BLUDHAVEN";
    opacity: ${({ opacity }) => opacity};
`;

const ProjectItme = styled.li`
    font-size: 160px;
    opacity: ${({ opacity, itmeOpacity }) => opacity};
`;

const Section = () => {
    const [opacity, setOpacity] = useState("1");
    const [itmeOpacity, setItemOpacity] = useState("0.5");
    return (
        <SectionContainer>
            <Category img={Cally} />
            <ProjectName
                onMouseEnter={() => {
                    setOpacity("0.5");
                }}
                onMouseLeave={() => {
                    setOpacity("0.5");
                }}
            >
                <ProjectItme
                    opacity={opacity}
                    itmeOpacity={itmeOpacity}
                    onMouseEnter={() => {
                        setItemOpacity("1");
                    }}
                >
                    <a href="#">Info</a>
                    <div></div>
                    <div></div>
                    <div></div>
                </ProjectItme>
                <ProjectItme>
                    <a href="#">Ability</a>
                </ProjectItme>
                <ProjectItme>
                    <a href="#">Git & Blog</a>
                </ProjectItme>
            </ProjectName>
        </SectionContainer>
    );
};

export default Section;
