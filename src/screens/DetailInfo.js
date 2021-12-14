import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Career from "../components/detailProject/info/Career";
import MainTitle from "../components/detailProject/info/MainTitle";
import MyInfo from "../components/detailProject/info/MyInfo";
import FooterButton from "../components/FooterButton";
import PrevNextButton from "../components/PrevNextButton";
import { footer } from "../images";

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 140px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${({ theme }) => theme.size1200} {
        max-width: 960px;
        padding: 130px 0;
    }
    @media ${({ theme }) => theme.size960} {
        max-width: 768px;
        padding: 120px 0;
    }
    @media ${({ theme }) => theme.size768} {
        max-width: 568px;
        padding: 110px 0;
    }
    @media ${({ theme }) => theme.size568} {
        max-width: 320px;
        padding: 100px 0;
    }
`;

const Section = styled.section`
    max-width: 1200px;
    margin: 0 auto 100px auto;
    @media ${({ theme }) => theme.size768} {
    }
`;

const RowContainer = styled.div`
    display: flex;
    @media ${({ theme }) => theme.size768} {
        flex-direction: column;
    }
`;
const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AmbitionTitleWrap = styled.div`
    width: 18%;
    margin-right: 30px;
    @media ${({ theme }) => theme.size768} {
        width: 100%;
        margin-right: 0;
        margin-bottom: 48px;
        display: flex;
        justify-content: center;
    }
`;
const ExperienceTitleWrap = styled.div`
    margin-right: 30px;
    margin-bottom: 48px;
    @media ${({ theme }) => theme.size768} {
        /* width: 100%; */
        /* margin-right: 0; */
        /* display: flex;
        justify-content: center; */
    }
`;

const Title = styled.h5`
    font-family: "BLUDHAVEN";
    font-size: 34px;
    @media ${({ theme }) => theme.size768} {
        font-size: 28px;
    }
`;

const DescriptionWrap = styled.div`
    width: 82%;
    @media ${({ theme }) => theme.size768} {
        width: calc(100% - 40px);
        margin: 0 auto;
    }
`;

const Description = styled.p`
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    transform: translateY(-4px);
    margin-bottom: 24px;
    word-break: keep-all;
    @media ${({ theme }) => theme.size768} {
        word-break: break-all;
    }
`;

const Space = styled.span`
    display: inline-block;
    width: 47px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media ${({ theme }) => theme.size768} {
        width: 568px;
    }
    @media ${({ theme }) => theme.size568} {
        width: 320px;
    }
`;

const CareerWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    transform: ${({ translateX }) => `translateX(${translateX}%)`};
    transition: 0.3s;
`;

const DetailInfo = ({ scrollX }) => {
    const descriptionData = [
        "          I WORKED AS A UX/UI DESIGNER FOR 3 YEARS. DESIGNING AND COLLABORATING WITHIN A TEAM, I OFTEN FOUND IT DIFFICULT TO CONVEY THE THINGS I IMAGINED TO THE DEVELOPER. I ALSO HAD DIFFICULTY IMPLEMENTING IT BECAUSE THERE WERE MUCH MORE CONSIDERATIONS THAN I THOUGHT. AS THIS HAPPENED FREQUENTLY, I FELT THAT IT WAS NOT ENOUGH TO PRODUCE SATISFACTORY RESULTS DUE TO THE LIMITATIONS OF MY KNOWLEDGE, AND I STARTED STUDYING DEVELOPMENT ON MY OWN.",
        "          IT TOOK ME A LOT OF TIME BECAUSE I STARTED BLINDLY WITHOUT A CLEAR DIRECTION. ONCE I STARTED SOMETHING, I TRIED TO SEE IT TO THE FINISH ON THE VERY DAY. I THINK THE EXPERIENCES OF LEARNING ON MY OWN AND THE COUNTLESS EXPERIENCES OF TRIALS AND ERRORS MADE ME STRONGER. I’M NOT SURE HOW WELL I WOULD BE ABLE TO PERFORM AT THE COMPANY, BUT I CAN ASSURE YOU THAT I’M ALWAYS WILLING TO LEARN AND GROW QUICKLY SO THAT I CAN MAKE A BIG CONTRIBUTION TO THE COMPANY. THANK YOU.",
        "          저는 3년동안 UX/UI 디자이너로 재직활동을 했습니다. 팀 내에서 디자인과 개발 협업을 하다보면 제가 디자인하며 상상했던 것들을 개발자에게 제대로 전달하지 못하거나, 생각보다 많은 고려사항들 때문에 구현이 어려웠던 경우가 종종 있었습니다. 수시로 이런 일이 발생하다 보니 제 지식의 한계로 만족스러운 결과가 나오지 않는 것에 부족함이 느껴졌고 독학으로 개발공부를 시작했습니다.",
        "          뚜렷한 방향 없이 무작정 시작하여 생각보다 많은 시간이 걸렸지만 그만큼 스스로 방법을 터득했던 경험들과, 오랜시간이 걸려도 결국엔 구현에 성공했던 수많은 삽질의 경험들이 저를 더 단단하게 만들어주었다고 생각합니다.아직도 제 수준을 확실히 몰라 회사에서 얼만큼의 퍼포먼스를 내게 될지 장담이 불가능하지만 항상 배움에 메말라있는 자세와, 시작했으면 끝장을 보는 제 성격으로 회사에 큰 기여를 할 수 있도록 빠르게 배우고 성장하겠습니다.",
    ];

    const careerList = [
        {
            id: 0,
            from: 17,
            to: 18,
            company: "미디어포스원",
            title: "EPSON & KT&G 복지재단&사회공헌 운영디자인",
            detailCareer: [
                "제품 카탈로그 web/mobile UI 제작",
                "EPSON 프로모션 페이지 제작",
                "Main page UI 개선",
                "Blog 컨셉 활동 뉴스레터 제작",
            ],
        },
        {
            id: 1,
            from: 17,
            to: 18,
            company: "게리온",
            title: "자사 브랜드 홈페이지 UI/UX 디자인",
            detailCareer: [
                "노블인베스트먼트 web/mobile UI/UX 제작",
                "크레타 web/mobile UI/UX 제작",
                "한국주식연구소 web/mobile UI/UX 제작",
                "컨설킷 web/mobile UI/UX 제작",
                "사내 운영 디자인건",
            ],
        },
        {
            id: 2,
            from: 17,
            to: 18,
            company: "9px",
            title: "AI 자동차 그래픽 연구원",
            detailCareer: [
                "차세대 자동차 클러스터, avn 그래픽 시안 제작",
                "오픽 솔루션 앱 랜딩페이지 제작",
                "토익 스피킹 앱 랜딩페이지 제작",
            ],
        },
        {
            id: 3,
            from: 17,
            to: 18,
            company: "다름 커뮤니케이션즈",
            title: "SKT Application 영문버전 디자인",
            detailCareer: ["SKT 글로벌 고객 전용 App UI/UX 시안 제작"],
        },
    ];

    const [isSize768, setIsSize768] = useState(false);
    const [translateX, setTranslateX] = useState(0);

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // }, []);

    useEffect(() => {
        if (scrollX <= 768 && scrollX !== 0) {
            setIsSize768(true);
        } else {
            setIsSize768(false);
        }
    }, [scrollX]);

    return (
        <Wrap>
            <MainTitle />
            <MyInfo />
            <Section>
                <RowContainer>
                    <AmbitionTitleWrap>
                        <Title>My Ambition</Title>
                    </AmbitionTitleWrap>
                    <DescriptionWrap>
                        {descriptionData.map((description) => {
                            return (
                                <Description>
                                    <Space />
                                    {description}
                                </Description>
                            );
                        })}
                    </DescriptionWrap>
                </RowContainer>
            </Section>
            <Section>
                <ColumnContainer>
                    <ExperienceTitleWrap>
                        <Title>Work Experience</Title>
                    </ExperienceTitleWrap>
                    <Container>
                        <CareerWrap translateX={translateX}>
                            {careerList.map((career) => {
                                return (
                                    <Career
                                        career={career}
                                        key={career.id}
                                        isSize768={isSize768}
                                    />
                                );
                            })}
                        </CareerWrap>
                    </Container>
                </ColumnContainer>
                {isSize768 ? (
                    <PrevNextButton
                        translateX={translateX}
                        setTranslateX={setTranslateX}
                    />
                ) : null}
            </Section>
            <FooterButton
                prevLink={`/`}
                prevTitle="Home"
                prevImg={footer.home}
                nextLink={`/0/1`}
                nextTile="Ability"
                nextImg={footer.ability}
            />
        </Wrap>
    );
};

export default DetailInfo;
