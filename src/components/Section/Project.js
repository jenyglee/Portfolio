import React, { useState } from "react";
import styled from "styled-components";

const ProjectName = styled.ul`
    font-family: "BLUDHAVEN";
    opacity: 1;
    transition: 0.5;
`;

const ProjectItem = styled.a`
    font-size: 160px;
    opacity: ${({ isHover }) => (isHover ? "1" : "0.3")};
    transition: 0.5s;
    display: block;
`;

const Project = ({ projectTitle, itemEnter, itemLeave }) => {
    return (
        <ProjectName>
            {projectTitle.map((item) => {
                return (
                    <ProjectItem
                        isHover={item.isHover}
                        onMouseEnter={() => {
                            itemEnter(item.id);
                        }}
                        onMouseLeave={() => {
                            itemLeave(item.id);
                        }}
                        href="#"
                    >
                        {item.title}
                    </ProjectItem>
                );
            })}
        </ProjectName>
    );
};

export default Project;
