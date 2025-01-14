import React, { useState } from "react";
import styled from "styled-components";
import Components from "components/detailProject/musinsa/Components";
import UXUIDesign from "components/detailProject/musinsa/UXUIDesign";

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MusinsaDetail = ({ detailNumber, isSize768 }) => {
    return (
        <DetailContainer>
            {detailNumber === "1" ? <UXUIDesign isSize768={isSize768} /> : null}
            {detailNumber === "2" ? <Components isSize768={isSize768} /> : null}
        </DetailContainer>
    );
};

export default MusinsaDetail;
