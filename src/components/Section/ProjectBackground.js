import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sampleImage01 from "./../../images/sampleImage01.jpeg";
import sampleImage02 from "./../../images/sampleImage02.jpeg";
import sampleImage03 from "./../../images/sampleImage03.jpeg";

const Container = styled.article`
    width: 100%;
    height: 100%;
    background-color: #888;
    position: relative;
`;

const StyledImage = styled.image`
    width: 500px;
    height: 500px;
    background: url(${({ src }) => src}) no-repeat;
    position: absolute;
    top: 100px;
    right: 100px;
    opacity: ${({ isShow }) => (isShow ? 1 : 0)};
`;

const ProjectBackground = ({ projectImage }) => {
    return (
        <Container>
            {projectImage.map((item) => {
                return (
                    <StyledImage
                        src={item.source}
                        isShow={item.isShow}
                        key={item.id}
                    />
                );
            })}
        </Container>
    );
};

export default ProjectBackground;
