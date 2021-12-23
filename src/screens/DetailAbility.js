import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { handleTop } from "helper/helper";
import MainTitle from "components/detailProject/ability/MainTitle";
import Ability from "components/detailProject/ability/Ability";
import DetailHeader from "components/DetailHeader";
import { header, abilitySources } from "images";
import { ContentsContext } from "storeContext/contents";

const Wrap = styled.main`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 100px;
`;

const AbilityWrap = styled.div`
    max-width: 1200px;
    padding-top: 304px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${({ theme }) => theme.size1200} {
        padding-top: 250px;
    }
    @media ${({ theme }) => theme.size960} {
        padding-top: 200px;
    }
    @media ${({ theme }) => theme.size768} {
        padding-top: 150px;
    }
    @media ${({ theme }) => theme.size568} {
        padding-top: 104px;
    }
`;

const Section = styled.section`
    width: 100%;
    margin-bottom: ${({ isTitle }) => (isTitle ? "132px" : "0")};
    @media ${({ theme }) => theme.size1200} {
        margin-bottom: ${({ isTitle }) => (isTitle ? "110px" : "0")};
    }
    @media ${({ theme }) => theme.size960} {
        margin-bottom: ${({ isTitle }) => (isTitle ? "90px" : "0")};
    }
    @media ${({ theme }) => theme.size768} {
        margin-bottom: ${({ isTitle }) => (isTitle ? "70px" : "0")};
    }
    @media ${({ theme }) => theme.size568} {
        margin-bottom: ${({ isTitle }) => (isTitle ? "50px" : "0")};
    }
`;
const AbilityAlign = styled.div`
    display: flex;
`;

const AbilitySizeFull = styled.div`
    display: flex;
    flex-direction: column;
    @media ${({ theme }) => theme.size1200} {
        display: none;
    }
`;
const AbilitySize1200 = styled.div`
    display: none;
    flex-direction: column;
    @media ${({ theme }) => theme.size1200} {
        display: flex;
    }
    @media ${({ theme }) => theme.size768} {
        display: none;
    }
`;
const AbilitySize768 = styled.div`
    display: none;
    flex-direction: column;
    @media ${({ theme }) => theme.size768} {
        display: flex;
    }
`;
const DetailAbility = ({ scrollX, scrollY }) => {
    const contents = useContext(ContentsContext);
    const [translateX, setTranslateX] = useState(0);
    useEffect(() => {
        handleTop();
    }, []);

    return (
        <Wrap>
            <DetailHeader
                scrollY={scrollY}
                prevLink={`/0/0`}
                prevTitle="Info"
                prevImg={header.info}
                nextLink={`/0/2`}
                nextTitle="Github"
                nextImg={header.github}
                pageName="Ability"
            />
            <AbilityWrap>
                <Section isTitle>
                    <MainTitle />
                </Section>
                <Section>
                    {/* 1200 이상일 때 3컬럼 */}
                    <AbilitySizeFull>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(0, 3)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(3, 6)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index + 3]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(6, 9)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index + 6]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(9, 11)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index + 9]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                    </AbilitySizeFull>

                    {/* 1200 이하일 때 2컬럼 */}
                    <AbilitySize1200>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(0, 2)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(2, 4)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index + 2]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(4, 6)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index + 4]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(6, 8)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index + 6]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(8, 10)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index + 8]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                        <AbilityAlign>
                            {contents.abilityData
                                .slice(10, 11)
                                .map((ability, index) => {
                                    return (
                                        <Ability
                                            translateX={translateX}
                                            ability={ability}
                                            scrollX={scrollX}
                                            scrollY={scrollY}
                                            logo={abilitySources[index + 10]}
                                        />
                                    );
                                })}
                        </AbilityAlign>
                    </AbilitySize1200>

                    {/* 768 이하일 때 1컬럼 */}
                    <AbilitySize768>
                        {contents.abilityData.map((ability, index) => {
                            return (
                                <Ability
                                    translateX={translateX}
                                    ability={ability}
                                    scrollX={scrollX}
                                    scrollY={scrollY}
                                    logo={abilitySources[index]}
                                />
                            );
                        })}
                    </AbilitySize768>
                </Section>
            </AbilityWrap>
        </Wrap>
    );
};

export default DetailAbility;
