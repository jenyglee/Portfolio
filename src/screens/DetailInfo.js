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
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoWrap = styled.div`
    max-width: 1200px;
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
    padding: 0 20px;
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
    font-family: "AppleSDGothicNeoM";
    font-size: 18px;
    line-height: 22px;
    transform: translateY(-4px);
    margin-bottom: 24px;
    word-break: keep-all;
    @media ${({ theme }) => theme.size768} {
        /* word-break: break-all; */
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
`;

const CareerWrap = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    /* background-color: red; */

    @media ${({ theme }) => theme.size768} {
        flex-direction: column;
    }
`;

const CareerSizeFull = styled.div`
    display: block;
    @media ${({ theme }) => theme.size1200} {
        display: none;
    }
`;
const CareerSize1200 = styled.div`
    display: none;
    @media ${({ theme }) => theme.size1200} {
        display: block;
    }
    @media ${({ theme }) => theme.size768} {
        display: none;
    }
`;
const CareerSize768 = styled.div`
    display: none;
    @media ${({ theme }) => theme.size768} {
        display: block;
    }
`;

const DetailInfo = ({ scrollX, scrollY }) => {
    const contents = useContext(ContentsContext);

    useEffect(() => {
        handleTop();
    }, []);

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
                            {/* 1200 이상에서 4컬럼 분할 */}
                            <CareerSizeFull>
                                <CareerWrap>
                                    {contents.careerList.map((career) => {
                                        return (
                                            <Career
                                                career={career}
                                                key={career.id}
                                            />
                                        );
                                    })}
                                </CareerWrap>
                            </CareerSizeFull>
                            {/* 1200에서 2컬럼 분할 */}
                            <CareerSize1200>
                                <CareerWrap>
                                    {contents.careerList
                                        .slice(0, 2)
                                        .map((career) => {
                                            return (
                                                <Career
                                                    career={career}
                                                    key={career.id}
                                                />
                                            );
                                        })}
                                </CareerWrap>
                                <CareerWrap>
                                    {contents.careerList
                                        .slice(2, 4)
                                        .map((career) => {
                                            return (
                                                <Career
                                                    career={career}
                                                    key={career.id}
                                                />
                                            );
                                        })}
                                </CareerWrap>
                            </CareerSize1200>

                            {/* 768에서 1컬럼 분할 */}
                            <CareerSize768>
                                {
                                    <CareerWrap>
                                        {contents.careerList.map((career) => {
                                            return (
                                                <Career
                                                    career={career}
                                                    key={career.id}
                                                />
                                            );
                                        })}
                                    </CareerWrap>
                                }
                            </CareerSize768>
                        </Container>
                    </ColumnContainer>
                </Section>
            </InfoWrap>
        </Wrap>
    );
};

export default DetailInfo;
