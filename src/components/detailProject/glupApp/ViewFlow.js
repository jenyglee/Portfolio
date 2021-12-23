import React from "react";
import styled from "styled-components";
import { glupAppSources, moGlupAppFunction, pcGlupAppFunction } from "images";

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
    padding: 100px 0;
    margin-bottom: 50px;
    background-color: black;
`;

const VideoWrap = styled.div`
    width: 272px;
    height: 572px;
    @media ${({ theme }) => theme.size1200} {
        display: block;
        width: 189px;
        height: 398px;
    }
`;

const Video = styled.img`
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
    @media ${({ theme }) => theme.sizesize960} {
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
            text: "오늘 등록된 알람이 전부 ‘복용완료’ 시 게이지가 증가. 게이지가 전부 채워지면 등급 업그레이드.",
        },
        { id: 2, text: "게이지를 전부 채우면 다음 등급으로 변환." },
        { id: 3, text: "등급 모달 노출 (Swipe 가능)" },
        {
            id: 4,
            text: "TODAY : 오늘의 알람 노출, ALL : 등록된 전체 알람 노출.",
        },
        { id: 5, text: "메뉴 모달 노출 (알람 변경, 지우기)" },
        { id: 6, text: "등록된 알람을 눌러 ‘복용/미복용’ 체크." },
    ],
    [
        { id: 1, text: "Input을 누르면 알람시간 선택창 노출." },
        {
            id: 2,
            text: "‘All’ 버튼을 누르면 모든 요일 선택, 요일이 하나라도 빠지면 ‘All’ 비활성화.",
        },
        { id: 3, text: "등록된 영양제를 눌러서 삭제." },
        { id: 4, text: "‘+추가하기' 버튼을 눌러 영양제 검색 화면으로 이동." },
    ],
    [
        { id: 1, text: "영양제 카테고리 선택창 노출." },
        { id: 2, text: "‘텍스트 입력 시 연관 검색어 노출." },
        {
            id: 3,
            text: "찾는 영양제가 나오지 않을 때 신규 등록 화면으로 이동.",
        },
    ],
    [
        {
            id: 1,
            text: "‘복용 완료한 날 / 알람이 있는날’을 계산하여 복용달성률(%) 노출.",
        },
        {
            id: 2,
            text: "날짜 아래 ‘점 아이콘'의 색상에 따라 복용 완료/미완료한 날 확인. (회색)알람이 있는 날, (초록색)복용 완료한 날, (빨간색)복용 미완료한 날, (회색)알람이 있는 날",
        },
        { id: 3, text: "캘린더에서 선택한 날짜에 등록된 알람 노출" },
    ],
    [
        { id: 1, text: "카테고리를 눌러 해당 리스트를 확인" },
        {
            id: 2,
            text: "화면에 표시되는 데이터만 노출시킬 수 있는 <FlatList> 구현",
        },
    ],
    [
        { id: 1, text: "카메라버튼을 눌러 내 앨범으로 이동하여 사진 선택." },
        { id: 2, text: "회원정보 변경 화면으로 이동." },
        { id: 3, text: "등급표 모달 노출" },
        {
            id: 4,
            text: "계정 로그아웃 시 ‘캘린더, 영양제랭킹, 마이페이지’ 컴포넌트가 숨겨짐.",
        },
        { id: 5, text: "‘회원탈퇴’ 버튼을 눌러 계정 삭제." },
    ],
];

const ViewFlow = ({ isSize768 }) => {
    return (
        <ContentWrap>
            <BlackBgWrap>
                <VideoWrap>
                    <Video src={glupAppSources.video} />
                </VideoWrap>
            </BlackBgWrap>
            <FunctionsWrap>
                {FunctionList.map((item, index) => {
                    return (
                        <>
                            <FunctionImageWrap isSize768={isSize768}>
                                <FunctionImage
                                    src={
                                        isSize768
                                            ? moGlupAppFunction[index]
                                            : pcGlupAppFunction[index]
                                    }
                                />
                            </FunctionImageWrap>
                            {isSize768 ? (
                                <FunctionContent>
                                    {FunctionList[index].map((item) => {
                                        return (
                                            <DescriptionWrap>
                                                <Icon>
                                                    <IconNumber>
                                                        {item.id}
                                                    </IconNumber>
                                                </Icon>
                                                <Description>
                                                    {item.text}
                                                </Description>
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

export default ViewFlow;
