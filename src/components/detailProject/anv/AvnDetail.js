import React from "react";
import styled from "styled-components";
import Components from "components/detailProject/anv/Components";
import Concept from "components/detailProject/anv/Concept";
import GuiDesign from "components/detailProject/anv/GuiDesign";

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AvnDetail = ({ detailNumber, isSize768 }) => {
    return (
        <DetailContainer>
            {detailNumber === "1" ? <Concept /> : null}
            {detailNumber === "2" ? <GuiDesign /> : null}
            {detailNumber === "3" ? <Components /> : null}
        </DetailContainer>
    );
};

export default AvnDetail;
