import React from "react";
import styled from "styled-components";
import Concept from "components/detailProject/beotherm/Concept";

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BeothermDetail = ({ detailNumber }) => {
    return (
        <DetailContainer>
            {detailNumber === "1" ? <Concept /> : null}
        </DetailContainer>
    );
};

export default BeothermDetail;
