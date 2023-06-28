import React from "react";
import styled from "styled-components";
import { icons, moCheckUFunction, pcCheckUFunction } from "images";
import Simulation01 from "images/01_gulpAppSource/simulation01.mp4";
import Simulation02 from "images/01_gulpAppSource/simulation02.mp4";
import Simulation03 from "images/01_gulpAppSource/simulation03.mp4";
import Simulation04 from "images/01_gulpAppSource/simulation04.mp4";
import Simulation05 from "images/01_gulpAppSource/simulation05.mp4";
import Simulation06 from "images/01_gulpAppSource/simulation06.mp4";
import Simulation07 from "images/01_gulpAppSource/simulation07.mp4";

const ContentWrap = styled.div`
  width: 100%;
  margin-bottom: 85px;

  @media ${({ theme }) => theme.size1200} {
    margin-bottom: 50px;
  }
`;

const BlackBgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 100px;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.detailBlackBackground};
`;

const ButtonWrap = styled.a`
  width: 154px;
  height: 50px;
  margin-bottom: 50px;
  cursor: pointer;
`;

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;

const VideoAlign = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 50px;
`;

const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 100px 10px;

  @media ${({ theme }) => theme.size960} {
    margin: 0 40px 100px 40px;
  }
`;

const VideoWrap = styled.div`
  width: 240px;

  @media ${({ theme }) => theme.size1200} {
    display: block;
    width: 300px;
  }
`;

const VideoTitle = styled.h4`
  font-family: "AppleSDGothicNeoM";
  font-size: 20px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.detailWhiteText};
`;

const Video = styled.video`
  width: 100%;
`;

const FunctionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
`;

const FunctionImageWrap = styled.div`
  max-width: ${({ isSize768 }) => (isSize768 ? "216px" : "1058px")};
  margin-bottom: ${({ isSize768 }) => (isSize768 ? "30px" : "0")};
  @media ${({ theme }) => theme.size1200} {
    max-width: 960px;
  }
  @media ${({ theme }) => theme.size960} {
    max-width: 768px;
  }
  @media ${({ theme }) => theme.size768} {
    max-width: 216px;
  }
`;

const FunctionImage = styled.img`
  width: 100%;
`;

const FunctionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  padding: 0 20px;
  @media ${({ theme }) => theme.size1200} {
    width: 960px;
  }
  @media ${({ theme }) => theme.size960} {
    width: 768px;
  }
  @media ${({ theme }) => theme.size768} {
    width: 568px;
  }
  @media ${({ theme }) => theme.size568} {
    width: 320px;
  }
`;

const Icon = styled.div`
  min-width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid #fff;
  background-color: #000;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const IconNumber = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;
const Description = styled.p`
  font-family: "AppleSDGothicNeoM";
  font-size: 13px;
  line-height: 28px;
  transform: translateY(-2px);
  word-break: keep-all;
`;
const FunctionList = [
  [
    {
      id: 1,
      text: "가족 수, 월 소득, 자녀 여부 등 자세한 정보를 통해 사용자가 지원할 수 있는 복지서비스 조회",
    },
  ],
  [
    {
      id: 1,
      text: "무한 스크롤링을 통해 편리하게 복지 조회가 가능하며, 카테고리 탭과 복ZPT 탭을 번갈아가며 내게 맞는 복지 서비스를 찾을 수 있습니다",
    },
  ],
  [
    {
      id: 1,
      text: "북마크 기능인 ‘챙겨요' 버튼을 클릭하여 관심 있는 복지서비스의 알림을 제공받을 수 있습니다",
    },
  ],
  [
    {
      id: 1,
      text: "카카오/애플 로그인을 제공하여 간편한 회원등록이 가능합니다",
    },
  ],
  [
    {
      id: 1,
      text: "Next JS로 작업한 웹 기반 프로젝트를 모바일에 이식하여, 업데이트 대응이 간편합니다 ",
    },
  ],
  [
    {
      id: 1,
      text: "admin 서비스를 통해 회원과 게시물, 디바이스 푸시 알람, 버전 업데이트 노출 등 전반적인 관리를 할 수 있습니다",
    },
  ],
  [
    {
      id: 1,
      text: "각 브랜치 별 push 파이프라인을 구축, 서버에 배포하여 Docker 컨테이너에 올려주는 과정을 자동화 했습니다",
    },
    {
      id: 2,
      text: "Certbot을 통한 SSL 인증서 발급과 80 포트 접근 시 SSL 433 포트로 리다이렉트하는 작업을 진행했습니다",
    },
  ],
];

const videoTitleList = [
  { id: 1, title: "알람 생성하기", video: Simulation01 },
  { id: 2, title: "알람 변경&삭제", video: Simulation02 },
  { id: 3, title: "알람 필터&토글", video: Simulation03 },
  { id: 4, title: "레벨링 디자인", video: Simulation04 },
  { id: 5, title: "캘린더&랭크", video: Simulation05 },
  { id: 6, title: "마이페이지", video: Simulation06 },
  { id: 7, title: "회원가입&로그인", video: Simulation07 },
];

const CheckUViewFlow = ({ isSize768 }) => {
  return (
    <ContentWrap>
      <BlackBgWrap>
        <ButtonWrap
          href="https://github.com/jenyglee/Gulp-Application"
          target="_blank"
        >
          <ButtonImage src={icons.GithubButton} />
        </ButtonWrap>
        <VideoAlign>
          {videoTitleList.map((item) => {
            return (
              <VideoSection>
                <VideoTitle>{item.title}</VideoTitle>
                <VideoWrap>
                  <Video src={item.video} muted autoPlay loop />
                </VideoWrap>
              </VideoSection>
            );
          })}
        </VideoAlign>
      </BlackBgWrap>
      <FunctionsWrap>
        {FunctionList.map((item, index) => {
          return (
            <>
              <FunctionImageWrap isSize768={isSize768}>
                <FunctionImage
                  src={
                    isSize768
                      ? moCheckUFunction[index]
                      : pcCheckUFunction[index]
                  }
                />
              </FunctionImageWrap>
              {isSize768 ? (
                <FunctionContent>
                  {FunctionList[index].map((item) => {
                    return (
                      <DescriptionWrap>
                        <Icon>
                          <IconNumber>{item.id}</IconNumber>
                        </Icon>
                        <Description>{item.text}</Description>
                      </DescriptionWrap>
                    );
                  })}
                </FunctionContent>
              ) : null}
            </>
          );
        })}
      </FunctionsWrap>
    </ContentWrap>
  );
};

export default CheckUViewFlow;
