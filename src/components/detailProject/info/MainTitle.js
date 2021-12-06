import React from "react";
import styled from "styled-components";
const MainWrap = styled.main`
    width: 100%;
    margin-bottom: 100px;
`;

const TitleWrap = styled.div`
    width: 100%;
    padding: 85px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 80px;
    font-weight: 500;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleObj = styled.h1`
    line-height: 95px;
`;

const SubTitle = styled.h2`
    font-family: "BLUDHAVEN";
    font-size: 16px;
`;

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.detailLine};
`;

const MainTitle = () => {
    return (
        <MainWrap>
            <Line />
            <TitleWrap>
                <SubTitle>A SENTENCE INTRODUCING ME</SubTitle>
                <Title>
                    <TitleObj>시작했으면</TitleObj>
                    <TitleObj>끝장을 봐야</TitleObj>
                    <TitleObj>직성이 풀려요</TitleObj>
                </Title>
                <SubTitle>10 UNIQUE BEST SELLING FONTS</SubTitle>
            </TitleWrap>
            <Line />
        </MainWrap>
    );
};

export default MainTitle;
