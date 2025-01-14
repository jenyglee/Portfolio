import React from "react";
import styled from "styled-components";
import UXUIDesign from "components/detailProject/consultKit/UXUIDesign";

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ConsultKitDetail = ({ detailNumber, isSize768 }) => {
    return (
        <DetailContainer>
            {detailNumber === "1" ? <UXUIDesign isSize768={isSize768} /> : null}
        </DetailContainer>
    );
};

export default ConsultKitDetail;
