import { glupAppSources } from "images";
import React from "react";
import styled from "styled-components";

const ContentWrap = styled.div`
    margin: 35px 20px 50px;
    max-width: 984px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`;

const UserFlow = () => {
    return (
        <ContentWrap>
            <StyledImage src={glupAppSources.userFlow} />
        </ContentWrap>
    );
};

export default UserFlow;
