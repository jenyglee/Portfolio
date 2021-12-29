import React from "react";
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
                첫번째 프로젝트입니다. 스토어 배포를 목표로 구현을 시작했으며,
                디자인, 프론트앤드 작업을 담당했습니다.{" "}
            </Description>
            <Description>
                첫 프로젝트를 디자인과 개발을 동시에 진행하면서 매우 많은
                아이디어들이 제 개발 능력의 한계로 구현되지 못하는 상황에 많이
                답답하였고, 배울 것이 너무나도 많다는 것을 느꼈습니다. api가
                나오기 전 미리 구현 테스트를 하기 위해 프론트 상에서 앱 내 로컬
                저장소를 만들어 여러가지 구현들을 제 손으로 직접 구현해보았고,
                이후 api로 교체하면서 직접 구현했던 방법과 api 연결을 통한
                구현을 전부 경험할 수 있었습니다.{" "}
            </Description>
            <Description>
                프론트 상에서 직접 구현하던 때에는 가벼운 기능구현이라고
                생각했지만 실제로 제작하며 수없이 많았던 디버깅과 삽질을 통해
                크고 작은 좌절을 맛보았습니다. 이러한 경험들을 통해 프론트 앱
                개발을 폭풍 성장하는 계기가 되었습니다.
            </Description>
        </ContentWrap>
    );
};

export default Review;
