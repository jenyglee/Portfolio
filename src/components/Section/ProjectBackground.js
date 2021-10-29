import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
