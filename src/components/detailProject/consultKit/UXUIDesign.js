import React from "react";
import styled from "styled-components";
import UXUIDesignSection from "components/detailProject/consultKit/UXUIDesignSection";
import { pcConsultKitSources } from "images";

const ContentWrap = styled.div`
    width: 100%;
    margin-top: 35px;
    margin-bottom: 90px;
    padding: 0 20px;
    @media ${({ theme }) => theme.size768} {
        margin-bottom: 70px;
        padding: 0;
    }
    @media ${({ theme }) => theme.size568} {
        margin-bottom: 50px;
    }
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const UXUIDesign = ({ isSize768 }) => {
    return (
        <ContentWrap>
            <Container>
                {pcConsultKitSources.map((item, index) => {
                    return (
                        <UXUIDesignSection img={pcConsultKitSources[index]} />
                    );
                })}
            </Container>
        </ContentWrap>
    );
};

export default UXUIDesign;
