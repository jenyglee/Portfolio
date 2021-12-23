import React from "react";
import styled from "styled-components";
import Concept from "components/detailProject/Kyobo/Concept";

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const KyoboDetail = ({ detailNumber, isSize768 }) => {
    return (
        <DetailContainer>
            {detailNumber === "1" ? <Concept /> : null}
        </DetailContainer>
    );
};

export default KyoboDetail;
