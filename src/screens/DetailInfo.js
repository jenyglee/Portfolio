import React, { useEffect } from "react";
import styled from "styled-components";
import { infoSources } from "../images";

const Wrap = styled.div`
    max-width: 100%;
    padding-top: 200px;
    @media ${({ theme }) => theme.size1200} {
        max-width: 960px;
    }
    @media ${({ theme }) => theme.size960} {
        max-width: 768px;
    }
    @media ${({ theme }) => theme.size768} {
        max-width: 568px;
    }
    @media ${({ theme }) => theme.size568} {
        max-width: 320px;
    }
`;

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

const Container = styled.div``;

const ProfileWrap = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    background: ${({ img }) => `url("${img}") no-repeat`};
    background-size: 100%;
    background-position: 48% 47%;
    margin-bottom: 50px;
`;

const InfoWrap = styled.div`
    padding: 124px 100px;
`;
const Info = styled.div`
    color: ${({ theme }) => theme.detailWhiteText};
    margin-bottom: 10px;
`;
const InfoTitle = styled.h3`
    font-family: "BLUDHAVEN";
    font-size: 16px;
    margin-bottom: 11px;
`;
const InfoDescription = styled.p`
    font-size: 24px;
    margin-bottom: 14px;
`;

const AmbitionWrap = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const AmbitionTitle = styled.h5`
    width: 20%;
    font-family: "BLUDHAVEN";
    font-size: 34px;
    margin-right: 30px;
`;

const DescriptionWrap = styled.div`
    width: 80%;
`;

const Description = styled.p``;

const DetailInfo = ({ scrollX }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <Wrap>
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
            <Container>
                <ProfileWrap img={infoSources.mainVisual}>
                    <InfoWrap>
                        <Info>
                            <InfoTitle>Name</InfoTitle>
                            <InfoDescription>이재원</InfoDescription>
                        </Info>
                        <Info>
                            <InfoTitle>Birthday</InfoTitle>
                            <InfoDescription>1993년 06월 06일</InfoDescription>
                        </Info>
                        <Info>
                            <InfoTitle>Adress</InfoTitle>
                            <InfoDescription>
                                경기도 부천시 원미구
                            </InfoDescription>
                        </Info>
                        <Info>
                            <InfoTitle>Carrer</InfoTitle>
                            <InfoDescription>
                                Frontend Developer, UX/UI Designer
                            </InfoDescription>
                        </Info>
                    </InfoWrap>
                </ProfileWrap>
            </Container>
            <AmbitionWrap>
                <AmbitionTitle>My Ambition</AmbitionTitle>
                <DescriptionWrap>
                    <Description>
                        저는 3년동안 UX/UI 디자이너로 재직활동을 했습니다. 팀
                        내에서 디자인과 개발 협업을 하다보면 제가 디자인하며
                        상상했던 것들을 개발자에게 제대로 전달하지 못하거나,
                        생각보다 많은 고려사항들 때문에 구현이 어려웠던 경우가
                        종종 있었습니다. 수시로 이런 일이 발생하다 보니 제
                        지식의 한계로 만족스러운 결과가 나오지 않는 것에
                        부족함이 느껴졌고 독학으로 개발공부를 시작했습니다.
                    </Description>
                    <Description>
                        뚜렷한 방향 없이 무작정 시작하여 생각보다 많은 시간이
                        걸렸지만 그만큼 스스로 방법을 터득했던 경험들과,
                        오랜시간이 걸려도 결국엔 구현에 성공했던 수많은 삽질의
                        경험들이 저를 더 단단하게 만들어주었다고
                        생각합니다.아직도 제 수준을 확실히 몰라 회사에서
                        얼만큼의 퍼포먼스를 내게 될지 장담이 불가능하지만 항상
                        배움에 메말라있는 자세와, 시작했으면 끝장을 보는 제
                        성격으로 회사에 큰 기여를 할 수 있도록 빠르게 배우고
                        성장하겠습니다.
                    </Description>
                </DescriptionWrap>
            </AmbitionWrap>
        </Wrap>
    );
};

export default DetailInfo;
