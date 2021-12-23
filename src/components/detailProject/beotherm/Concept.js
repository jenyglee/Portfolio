import React from "react";
import styled from "styled-components";

const ContentWrap = styled.div`
    margin: 30px 0 85px 0;
    @media ${({ theme }) => theme.size1200} {
        margin: 20px 0 50px 0;
    }
`;

const Concept = () => {
    return <ContentWrap></ContentWrap>;
};

export default Concept;
