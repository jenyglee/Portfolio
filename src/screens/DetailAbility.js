import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { handleTop } from "./../helper/helper";
import MainTitle from "../components/detailProject/ability/MainTitle";
import Ability from "../components/detailProject/ability/Ability";
import DetailHeader from "../components/DetailHeader";
import PrevNextButton from "../components/PrevNextButton";
import { header, abilitySources } from "../images";
import { ContentsContext } from "../storeContext/contents";

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

const Abilities = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    @media ${({ theme }) => theme.size1200} {
    }
    /* 768px 부터 슬라이딩*/
    @media ${({ theme }) => theme.size768} {
        width: 100%;
        overflow: hidden;
        flex-flow: row nowrap;
        justify-content: flex-start;
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
                    <Abilities>
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
                    </Abilities>
                    <PrevNextButton
                        translateX={translateX}
                        setTranslateX={setTranslateX}
                        pageName="Ability"
                    />
                </Section>
            </AbilityWrap>
        </Wrap>
    );
};

export default DetailAbility;
