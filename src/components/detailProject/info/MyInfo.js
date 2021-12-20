import React from "react";
import styled from "styled-components";
import { infoSources } from "../../../images";

const PaddingWrap = styled.div`
    width: 100%;
    padding: 0 20px;
`;

const ProfileWrap = styled.section`
    width: 100%;
    margin: 0 auto;
    background: ${({ img }) => `url("${img}") no-repeat`};
    background-size: 144%;
    background-position: 2% 72%;
    margin-bottom: 98px;
    /* margin: 0 20px; */
    @media ${({ theme }) => theme.size960} {
        background-size: 190%;
        background-position: 23% 72%;
    }
    @media ${({ theme }) => theme.size768} {
        background-size: 250%;
        background-position: 30% 72%;
        margin-bottom: 84px;
    }
    @media ${({ theme }) => theme.size568} {
        background-size: 400%;
        background-position: 52% 64%;
        margin-bottom: 84px;
    }
`;

const InfoWrap = styled.div`
    width: 100%;
    height: 497px;
    padding: 124px 0 0 104px;
    @media ${({ theme }) => theme.size960} {
        padding: 60px 0 0 60px;
        height: 593px;
    }
    @media ${({ theme }) => theme.size768} {
        padding: 30px 0 0 30px;
        height: 475px;
    }
    @media ${({ theme }) => theme.size568} {
        padding: 30px 0 0 30px;
        height: 560px;
    }
`;
const Info = styled.div`
    color: ${({ theme }) => theme.detailWhiteText};
    margin-bottom: 10px;
`;
const InfoTitle = styled.h3`
    font-family: "BLUDHAVEN";
    font-size: 16px;
    margin-bottom: 11px;
    @media ${({ theme }) => theme.size568} {
        font-size: 13px;
    }
`;
const InfoDescription = styled.p`
    font-family: "AppleSDGothicNeoM";
    font-size: 24px;
    margin-bottom: 14px;
    @media ${({ theme }) => theme.size568} {
        font-size: 18px;
    }
`;

const MyInfo = () => {
    return (
        <PaddingWrap>
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
        </PaddingWrap>
    );
};

export default MyInfo;
