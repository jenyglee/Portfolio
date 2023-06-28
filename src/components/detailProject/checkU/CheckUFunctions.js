import React from "react";
import styled from "styled-components";
import { pcCheckUFunction } from "images";

const ContentWrap = styled.div`
  width: 100%;
  margin-bottom: 85px;
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.size1200} {
    margin-bottom: 50px;
  }
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
  /* @media ${({ theme }) => theme.size768} {
        max-width: 216px;
    } */
`;

const FunctionImage = styled.img`
  width: 100%;
`;

const FunctionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  @media ${({ theme }) => theme.size1200} {
    width: 960px;
  }
  @media ${({ theme }) => theme.size960} {
    width: 768px;
  }
  /* @media ${({ theme }) => theme.size768} {
        width: 568px;
    } */
  @media ${({ theme }) => theme.size568} {
    margin: 0 auto;
    width: 320px;
  }
`;

const Title = styled.p`
  font-family: "AppleSDGothicNeoB";
  font-size: 22px;
  margin-bottom: 13px;
  padding-top: 20px;
  @media ${({ theme }) => theme.size568} {
    line-height: 30px;
  }
`;

const SubTitle = styled.p`
  font-family: "AppleSDGothicNeoM";
  font-size: 18px;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.size568} {
    line-height: 24px;
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

const FunctionDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 568px;
  margin-bottom: 60px;
  @media ${({ theme }) => theme.size1200} {
    width: 568px;
  }
  @media ${({ theme }) => theme.size960} {
    width: 568px;
  }
  @media ${({ theme }) => theme.size768} {
    width: 568px;
  }
  @media ${({ theme }) => theme.size568} {
    width: 320px;
  }
`;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;

const Description = styled.p`
  font-size: 13px;
  color: #000;
  line-height: 28px;
  word-break: keep-all;
`;

const FunctionList = [
  {
    id: 1,
    title: "01 상세한 필터링을 통한 내게 맞는 복지서비스 조회",
    subTitle: [
      "가족 수, 월 소득, 자녀 여부 등 자세한 정보를 통해",
      "사용자가 지원할 수 있는 복지서비스 조회할 수 있습니다",
    ],
  },
  {
    id: 2,
    title: "02 카테고리별 복지 조회 / 내게 맞는 복지 조회(복ZPT)",
    subTitle: [
      "무한 스크롤링을 통해 편리하게 복지 조회가 가능하며,",
      "카테고리 탭과 복ZPT 탭을 번갈아가며 내게 맞는 복지 서비스를 찾을 수 있습니다",
    ],
  },
  {
    id: 3,
    title: "03 북마크와 알람 제공",
    subTitle: [
      "북마크 기능인 ‘챙겨요' 버튼을 클릭하여 관심 있는 복지서비스의 알림을 제공받을 수 있습니다",
    ],
  },
  {
    id: 4,
    title: "04 SNS 로그인/회원가입",
    subTitle: ["카카오/애플 로그인을 제공하여 간편한 회원등록이 가능합니다"],
  },
  {
    id: 5,
    title: "05 Web View 기반으로 PC/MOBILE 편리한 호환 및 대응",
    subTitle: [
      "Next JS로 작업한 웹 기반 프로젝트를 모바일에 이식하여, 업데이트 대응이 간편합니다",
    ],
  },
  {
    id: 6,
    title: "06 게시물 CRUD, 상태변경, 푸시알람, 버전 업데이트 등 모든 관리",
    subTitle: [
      "admin 서비스를 통해 회원과 게시물, 디바이스 푸시 알람,",
      "버전 업데이트 노출 등 전반적인 관리를 할 수 있습니다",
    ],
  },
  {
    id: 7,
    title: "07 Docker 구동 CI/CD 자동배포, https 적용",
    subTitle: [
      "각 브랜치 별 push 파이프라인을 구축, 서버에 배포하여 Docker 컨테이너에 올려주는 과정을 자동화 했습니다",
      "Certbot을 통한 SSL 인증서 발급과 80 포트 접근 시 SSL 433 포트로 리다이렉트하는 작업을 진행했습니다",
    ],
  },
];

const CheckUFunctions = ({ isSize768 }) => {
  return (
    <ContentWrap>
      <FunctionImageWrap isSize768={isSize768}>
        {FunctionList.map((item, index) => {
          return (
            <>
              <FunctionContent>
                <Title>{item.title}</Title>
                {item.subTitle.map((item) => (
                  <SubTitle>{item}</SubTitle>
                ))}
              </FunctionContent>
              <FunctionImage src={pcCheckUFunction[index]} />
              {/* <FunctionDescription>
                {FunctionList[index].textList.map((item) => {
                  return (
                    <DescriptionWrap>
                      <Icon>
                        <IconNumber>{item.id}</IconNumber>
                      </Icon>
                      <Description>{item.text}</Description>
                    </DescriptionWrap>
                  );
                })}
              </FunctionDescription> */}
            </>
          );
        })}
      </FunctionImageWrap>
    </ContentWrap>
  );
};

export default CheckUFunctions;
