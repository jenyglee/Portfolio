import React from "react";
import styled from "styled-components";
import { checkUSources, musinsaSources } from "images";

const MainVisualWrap = styled.section`
  width: 100%;
  height: 497px;
  background: ${({ img }) => `url("${img}") no-repeat`};
  background-size: 150%;
  background-position: 48% 47%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 90px;

  @media ${({ theme }) => theme.size1200} {
    background-size: 150%;
    background-position: 55% 47%;
  }
  @media ${({ theme }) => theme.size960} {
    height: 381px;
    margin-bottom: 65px;
  }
  @media ${({ theme }) => theme.size768} {
    height: 475px;
    background-size: 230%;
    background-position: 60% 40%;
    display: block;
  }
  @media ${({ theme }) => theme.size568} {
    background-size: 210%;
    background-position: 60% 40%;
    height: 351px;
    margin-bottom: 40px;
  }
`;

const ContentWrap = styled.article`
  padding-left: 50px;
  @media ${({ theme }) => theme.size768} {
    padding-left: 40px;
    padding-top: 40px;
  }
  @media ${({ theme }) => theme.size568} {
    padding-left: 20px;
  }
`;

const TextWrap = styled.div`
  margin-bottom: 28px;
  @media ${({ theme }) => theme.size768} {
    margin-bottom: 34px;
  }
  @media ${({ theme }) => theme.size568} {
    margin-bottom: 24px;
  }
`;
const Text = styled.p`
  font-family: "AppleSDGothicNeoB";
  font-size: 45px;
  color: ${({ theme }) => theme.detailWhiteText};
  display: flex;
  align-items: center;
  line-height: 55px;
  letter-spacing: -1px;
  @media ${({ theme }) => theme.size960} {
    font-size: 40px;
    line-height: 45px;
  }
  @media ${({ theme }) => theme.size568} {
    font-size: 25px;
    line-height: 34px;
  }
`;
const CharacterImageWrap = styled.div`
  width: 50px;
  height: 22px;
  margin-right: 6px;
  position: relative;
  @media ${({ theme }) => theme.size960} {
    width: 39px;
    height: 17px;
  }
  @media ${({ theme }) => theme.size568} {
    width: 28px;
    height: 12px;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const LogoWrap = styled.div`
  width: 51px;
  height: 51px;
  position: relative;
  @media ${({ theme }) => theme.size960} {
    width: 51px;
    height: 51px;
  }
  @media ${({ theme }) => theme.size568} {
    width: 51px;
    height: 51px;
  }
`;

const MainVisualCheckU = () => {
  //   return <MainVisualWrap img={checkUSources.mainVisual} />;
  return (
    <MainVisualWrap img={checkUSources.mainVisual}>
      <ContentWrap>
        <TextWrap>
          <Text>대한민국 국민이라면</Text>
          <Text>모두 누릴 수 있어요</Text>
        </TextWrap>
        <LogoWrap>
          <StyledImage src={checkUSources.logo} />
        </LogoWrap>
      </ContentWrap>
    </MainVisualWrap>
  );
};

export default MainVisualCheckU;
