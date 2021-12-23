import React from "react";
import styled from "styled-components";
import ViewFlow from "components/detailProject/glupApp/ViewFlow";
import WorkPlan from "components/detailProject/glupApp/WorkPlan";
import WorkIssue from "components/detailProject/glupApp/WorkIssue";
import Review from "components/detailProject/glupApp/Review";

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
