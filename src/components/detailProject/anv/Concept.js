import React, { useState } from "react";
import styled from "styled-components";
import { avnSources } from "../../../images";

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

const Description = styled.p`
    font-family: "AppleSDGothicNeoM";
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 60px;
    word-break: keep-all;
    @media ${({ theme }) => theme.size960} {
        width: 100%;
        margin-bottom: 50px;
    }
    @media ${({ theme }) => theme.size768} {
        font-size: 16px;
        margin-bottom: 40px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 13px;
        line-height: 27px;
        margin-bottom: 30px;
    }
`;

const SubTitle = styled.p`
    font-family: "AppleSDGothicNeoB";
    font-size: 30px;
    margin-bottom: 20px;
    @media ${({ theme }) => theme.size960} {
        font-size: 26px;
    }
    @media ${({ theme }) => theme.size768} {
        font-size: 22px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 18px;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageWrap = styled.div`
    max-width: 1006px;
`;
const StyledImage = styled.img`
    width: 100%;
`;

const Concept = () => {
    const text = ["<Visual Motive>"];
    return (
        <ContentWrap>
            <Description>
                커넥티드 카 인포테이먼트 스크린 GUI는 사용자의 감성을 환기시키는
                부분으로 개개인의 개성을 표출할 수 있는 다양한 UX/Graphic
                영역입니다. 클러스터와 AVN의 대중적인 구조에 커넥티드 카의 핵심
                기술을 적용하고, 차별성이 돋보이는 입체적 비주얼을 제안합니다.
            </Description>
            <SubTitle>{text[0]}</SubTitle>
            <Container>
                <ImageWrap>
                    <StyledImage src={avnSources.motive} />
                </ImageWrap>
            </Container>
        </ContentWrap>
    );
};

export default Concept;
