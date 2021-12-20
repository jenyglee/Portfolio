import React, { useState } from "react";
import styled from "styled-components";

const ContentWrap = styled.div`
    padding: 50px 20px;
    @media ${({ theme }) => theme.size768} {
        padding: 35px 20px 50px;
    }
`;
const Description = styled.p`
    font-family: "AppleSDGothicNeoB";
    font-size: 24px;
    line-height: 40px;
    white-space: pre-wrap;
    letter-spacing: -1px;
    margin-bottom: 56px;
    word-break: keep-all;
    @media ${({ theme }) => theme.size960} {
        font-size: 20px;
        line-height: 34px;
        margin-bottom: 42px;
    }
    @media ${({ theme }) => theme.size768} {
        font-size: 16px;
        line-height: 29px;
        margin-bottom: 30px;
    }
`;

const Review = ({}) => {
    return (
        <ContentWrap>
            <Description>
                React Native를 처음 공부하고 맨땅에서 바로 실전 제작으로 만든
                첫번째 프로젝트입니다. 스토어 배포를 목표로 구현을 시작했습니다.
                기획과 디자인, 프론트앤드 작업을 담당했습니다. 3년동안 ux/ui
                디자이너로 일을 하면서 다양한 디자인적 시도를 해왔고 가끔은 제
                아이디어가 제대로 구현이 안되는 경우가 있거나 또는 구현을 위해
                생각지도 못한 부분들이 필요할 때가 있었습니다.
            </Description>
            <Description>
                이번에 디자인과 개발을 동시에 진행하면서 매우 많은 아이디어들이
                제 개발 능력의 한계로 구현되지 못하는 상황에 많이 답답하였고,
                배울 것이 너무나도 많다는 것을 느꼈습니다. 가벼운 기능구현이라고
                생각했지만 실제로 제작하며 수없이 많았던 디버깅과 삽질을 통해
                크고 작은 좌절을 맛보았습니다. 그럼에도 구글링과 커뮤니티,
                협업자의 조언를 통해 하나씩 하나씩 해결해나가며 실력이
                폭풍성장하는 계기가 되었습니다.
            </Description>
        </ContentWrap>
    );
};

export default Review;
