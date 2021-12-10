import React, { useState } from "react";
import styled from "styled-components";
import ViewFlow from "./ViewFlow";
import WorkPlan from "./WorkPlan";
import Functions from "./Functions";
import WorkIssue from "./WorkIssue";
import Review from "./Review";
import Mission from "./Mission";

const DetailContainer = styled.section`
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${({ theme }) => theme.size768} {
        padding: 0;
    }
`;

const GulpDetail = ({ detailNumber, isSize768 }) => {
    return (
        <DetailContainer>
            {detailNumber === "1" ? <ViewFlow isSize768={isSize768} /> : null}
            {detailNumber === "2" ? <WorkPlan /> : null}
            {detailNumber === "3" ? <WorkIssue /> : null}
            {detailNumber === "4" ? <Review /> : null}
        </DetailContainer>
    );
};

export default GulpDetail;
