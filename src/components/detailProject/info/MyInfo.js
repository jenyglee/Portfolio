import React from "react";
import styled from "styled-components";
import { infoSources } from "../../../images";

const ProfileWrap = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    background: ${({ img }) => `url("${img}") no-repeat`};
    background-size: 100%;
    background-position: 48% 47%;
    margin-bottom: 98px;
`;

const InfoWrap = styled.div`
    padding: 124px 100px;
`;
const Info = styled.div`
    color: ${({ theme }) => theme.detailWhiteText};
    margin-bottom: 10px;
`;
const InfoTitle = styled.h3`
    font-family: "BLUDHAVEN";
    font-size: 16px;
    margin-bottom: 11px;
`;
const InfoDescription = styled.p`
    font-size: 24px;
    margin-bottom: 14px;
`;

const MyInfo = () => {
    return (
        <ProfileWrap img={infoSources.mainVisual}>
            <InfoWrap>
                <Info>
                    <InfoTitle>Name</InfoTitle>
                    <InfoDescription>이재원</InfoDescription>
                </Info>
                <Info>
                    <InfoTitle>Birthday</InfoTitle>
                    <InfoDescription>1993년 06월 06일</InfoDescription>
                </Info>
                <Info>
                    <InfoTitle>Adress</InfoTitle>
                    <InfoDescription>경기도 부천시 원미구</InfoDescription>
                </Info>
                <Info>
                    <InfoTitle>Carrer</InfoTitle>
                    <InfoDescription>
                        Frontend Developer, UX/UI Designer
                    </InfoDescription>
                </Info>
            </InfoWrap>
        </ProfileWrap>
    );
};

export default MyInfo;
