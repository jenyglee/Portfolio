import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { handleTop } from "./../helper/helper";
import Career from "../components/detailProject/info/Career";
import MainTitle from "../components/detailProject/info/MainTitle";
import MyInfo from "../components/detailProject/info/MyInfo";
import PrevNextButton from "../components/PrevNextButton";
import { header } from "../images";
import DetailHeader from "../components/DetailHeader";
import { ContentsContext } from "../storeContext/contents";

const Wrap = styled.main`
    max-width: 1200px;
    margin: 0 auto;
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

const InfoWrap = styled.div`
    width: 100%;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${({ theme }) => theme.size1200} {
        padding-top: 130px;
    }
    @media ${({ theme }) => theme.size960} {
        padding-top: 120px;
    }
    @media ${({ theme }) => theme.size768} {
        padding-top: 110px;
    }
    @media ${({ theme }) => theme.size568} {
        padding-top: 100px;
    }
`;

const Section = styled.section`
    max-width: 1200px;
    margin: 0 auto 100px;
    @media ${({ theme }) => theme.size768} {
        margin: 0 auto 80px;
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
    margin-bottom: 40px;
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

const DetailInfo = ({ scrollX, scrollY }) => {
    const contents = useContext(ContentsContext);
    const [isSize768, setIsSize768] = useState(true);
    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        handleTop();
    }, []);

    useEffect(() => {
        if (scrollX <= 768 && scrollX !== 0) {
            setIsSize768(true);
        } else {
            setIsSize768(false);
        }
    }, [scrollX]);

    return (
        <Wrap>
            <DetailHeader
                scrollY={scrollY}
                prevLink={`/`}
                prevTitle="Home"
                prevImg={header.home}
                nextLink={`/0/1`}
                nextTitle="Ability"
                nextImg={header.ability}
            />
            <InfoWrap>
                <MainTitle />
                <MyInfo />
                <Section>
                    <RowContainer>
                        <AmbitionTitleWrap>
                            <Title>My Ambition</Title>
                        </AmbitionTitleWrap>
                        <DescriptionWrap>
                            {contents.descriptionData.map((description) => {
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
                                {contents.careerList.map((career) => {
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
                    <PrevNextButton
                        translateX={translateX}
                        setTranslateX={setTranslateX}
                        pageName="Info"
                    />
                </Section>
            </InfoWrap>
        </Wrap>
    );
};

export default DetailInfo;
