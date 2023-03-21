import React from "react"
import styled from "styled-components"
import { icons, pcOlaFunction } from "images"
import Simulation01 from "images/10_olaSource/simulation01.mp4"
import Simulation02 from "images/10_olaSource/simulation02.mp4"
import Simulation03 from "images/10_olaSource/simulation03.mp4"
import Simulation04 from "images/10_olaSource/simulation04.mp4"
import Simulation05 from "images/10_olaSource/simulation05.mp4"
import Simulation06 from "images/10_olaSource/simulation06.mp4"
import Simulation07 from "images/10_olaSource/simulation07.mp4"
import Simulation08 from "images/10_olaSource/simulation08.mp4"

const ContentWrap = styled.div`
    width: 100%;
    margin-bottom: 85px;

    @media ${({ theme }) => theme.size1200} {
        margin-bottom: 50px;
    }
`

const BlackBgWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    margin-bottom: 50px;
    background-color: ${({ theme }) => theme.detailBlackBackground};
`

const ButtonWrap = styled.a`
    width: 154px;
    height: 50px;
    margin-bottom: 50px;
    cursor: pointer;
`

const ButtonImage = styled.img`
    width: 100%;
    height: 100%;
`

const VideoAlign = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 50px;
`

const VideoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px 50px 10px;

    @media ${({ theme }) => theme.size960} {
        margin: 0 40px 50px 40px;
    }
`

const VideoWrap = styled.div`
    width: 500px;

    @media ${({ theme }) => theme.size1200} {
        display: block;
        width: 100%;
    }
`

const VideoTitle = styled.h4`
    font-family: "AppleSDGothicNeoM";
    font-size: 20px;
    color: ${({ theme }) => theme.detailWhiteText};
`

const Video = styled.video`
    width: 100%;
`

const FunctionsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;
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
    margin-bottom: 60px;
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

const Description = styled.p`
    font-family: "AppleSDGothicNeoM";
    font-size: 18px;
    margin-bottom: 10px;
    @media ${({ theme }) => theme.size568} {
        line-height: 24px;
    }
`

const FunctionList = [
    {
        id: 1,
        title: "01 관심사가 비슷한 친구를 랜덤으로 추천",
        textList: [
            "회원가입 할 때 해시태그를 최대 5개 선택할 수 있습니다.",
            "해시태그가 하나라도 겹치는 사람은 서로의 추천친구로 노출됩니다.",
        ],
    },
    {
        id: 2,
        title: "02 동적 쿼리와 해시태그를 통한 게시물 조회",
        textList: [
            "높이, 별점, 계절, 해시태그 등 여러가지 검색조건을 통해 필터링된 게시물을 보여줍니다.",
        ],
    },
    {
        id: 3,
        title: "03 실시간 채팅을 통한 크루원 모집",
        textList: [
            "크루원 모집 시 정원과 현재 참여 인원을 확인할 수 있으며,",
            "정원 초과 시 채팅방 진입을 막아 크루원 모집을 마감할 수 있도록 구현했습니다.",
        ],
    },
    {
        id: 4,
        title: "04 조건 충족 시 자동 등업",
        textList: ["게시글을 5번 작성하거나, 크루원을 5번 모집했을 경우 자동으로 등업이 됩니다."],
    },
]

const videoTitleList = [
    { id: 1, title: "코스추천", video: Simulation01 },
    { id: 2, title: "코스추천 상세", video: Simulation02 },
    { id: 3, title: "커뮤니티", video: Simulation03 },
    { id: 4, title: "커뮤니티 상세", video: Simulation04 },
    { id: 5, title: "쇼핑몰-공지사항", video: Simulation05 },
    { id: 6, title: "친구-알람", video: Simulation06 },
    { id: 7, title: "마이페이지", video: Simulation07 },
    { id: 8, title: "어드민", video: Simulation08 },
]

const OlaViewFlow = ({ isSize768 }) => {
    return (
        <ContentWrap>
            <BlackBgWrap>
                <ButtonWrap href="https://github.com/jenyglee/Gulp-Application" target="_blank">
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
                        )
                    })}
                </VideoAlign>
            </BlackBgWrap>
            <FunctionsWrap>
                <FunctionImageWrap isSize768={isSize768}>
                    {FunctionList.map((item, index) => {
                        return (
                            <>
                                <FunctionContent>
                                    <Title>{item.title}</Title>
                                    {item.textList.map((item) => (
                                        <Description>{item}</Description>
                                    ))}
                                </FunctionContent>
                                <FunctionImage src={pcOlaFunction[index]} />
                            </>
                        )
                    })}
                    <FunctionContent>
                        <Title style={{ marginBottom: "20px" }}>
                            05 커뮤니티 게시글/댓글/좋아요/해시태그
                        </Title>
                        <Title style={{ marginBottom: "20px" }}>
                            06 등산용품 검색 (네이버 쇼핑 API 적용)
                        </Title>
                        <Title style={{ marginBottom: "20px" }}>
                            07 Admin 기능(회원, 커뮤니티, 코스추천, 공지사항 관리)
                        </Title>
                    </FunctionContent>
                </FunctionImageWrap>
            </FunctionsWrap>
        </ContentWrap>
    )
}

export default OlaViewFlow
