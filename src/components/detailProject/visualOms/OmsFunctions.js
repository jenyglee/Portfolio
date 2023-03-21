import React from "react"
import styled from "styled-components"
import { pcOmsFunction } from "images"

const ContentWrap = styled.div`
    width: 100%;
    margin-bottom: 85px;
    display: flex;
    justify-content: center;
    @media ${({ theme }) => theme.size1200} {
        margin-bottom: 50px;
    }
`

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
`

const FunctionImage = styled.img`
    width: 100%;
`

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
`

const Title = styled.p`
    font-family: "AppleSDGothicNeoB";
    font-size: 22px;
    margin-bottom: 13px;
    @media ${({ theme }) => theme.size568} {
        line-height: 30px;
    }
`

const SubTitle = styled.p`
    font-family: "AppleSDGothicNeoM";
    font-size: 18px;
    margin-bottom: 10px;
    @media ${({ theme }) => theme.size568} {
        line-height: 24px;
    }
`

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
`
const IconNumber = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
`

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
`

const DescriptionWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
`

const Description = styled.p`
    font-size: 13px;
    color: #000;
    line-height: 28px;
    word-break: keep-all;
`

const FunctionList = [
    {
        id: 1,
        title: "01 메인(대시보드)",
        subTitle: ["점포의 상품 관리, 결제 현황을 대시보드로 확인할 수 있습니다"],
        textList: [
            { id: 1, text: "각각의 탭 클릭 시 해당 화면의 해당 필터링으로 바로 조회" },
            { id: 2, text: "chart.js 라이브러리 사용하여 그래프 구현" },
        ],
    },
    {
        id: 2,
        title: "02 상품 관리",
        subTitle: ["점포에 등록된 상품을 관리하고, 물류센터에서 상품을 가져와 등록할 수 있습니다"],
        textList: [
            { id: 1, text: "각각의 항목별로 조회하여 검색결과 노출" },
            {
                id: 2,
                text: "카테고리는 대/중/소 분류로 나뉘어있어, 대분류 클릭 시 관련 중분류 항목이, 중분류 클릭 시 관련 소분류 항목이 노출",
            },
            {
                id: 3,
                text: "검색된 항목을 다중 체크하여 판매 상태, 기본가, 배송유형 등을 일괄적으로 변경",
            },
        ],
    },
    {
        id: 3,
        title: "03 상품 등록",
        subTitle: [],
        textList: [
            { id: 1, text: "상품 등록 시스템으로 이동" },
            {
                id: 2,
                text: "물류센터에 등록된 상품을 조회하고, 점포에 추가할 상품을 선택",
            },
            {
                id: 3,
                text: "등록된 점포를 조회하고, 상품을 등록할 점포를 선택",
            },
            {
                id: 4,
                text: "상품 등록 완료",
            },
        ],
    },
    {
        id: 4,
        title: "04 주문/배송/클레임",
        subTitle: ["주문 상태, 배송 상태, 주문 취소와 같은 클레임 관리를 할 수 있습니다"],
        textList: [],
    },
    {
        id: 5,
        title: "05 리뷰/문의",
        subTitle: ["리뷰와 문의에 답변을 달 수 있습니다"],
        textList: [],
    },
    {
        id: 6,
        title: "06 점포",
        subTitle: ["점포를 등록하고 이커머스와 연동할 수 있습니다"],
        textList: [],
    },
    {
        id: 7,
        title: "06 알림",
        subTitle: ["주문, 배송, 클레임 관련 알림을 확인할 수 있습니다"],
        textList: [],
    },
]

const OmsFunctions = ({ isSize768 }) => {
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
                            <FunctionImage src={pcOmsFunction[index]} />
                            <FunctionDescription>
                                {FunctionList[index].textList.map((item) => {
                                    return (
                                        <DescriptionWrap>
                                            <Icon>
                                                <IconNumber>{item.id}</IconNumber>
                                            </Icon>
                                            <Description>{item.text}</Description>
                                        </DescriptionWrap>
                                    )
                                })}
                            </FunctionDescription>
                        </>
                    )
                })}
            </FunctionImageWrap>
        </ContentWrap>
    )
}

export default OmsFunctions
