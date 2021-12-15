import React, { useEffect } from "react";
import styled from "styled-components";
import MainTitle from "../components/detailProject/ability/MainTitle";
import Ability from "../components/detailProject/ability/Ability";
import FooterButton from "../components/FooterButton";
import DetailHeader from "../components/DetailHeader";
import { footer, header, abilitySources } from "../images";

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

const AbilityWrap = styled.div`
    width: 100%;
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
`;

const Abilities = styled.div`
    display: flex;
    justify-content: center;

    flex-flow: row wrap;
    @media ${({ theme }) => theme.size960} {
    }
    @media ${({ theme }) => theme.size768} {
        flex-flow: row nowrap;
    }
`;

const DetailAbility = ({ scrollX, scrollY }) => {
    const titleData = [
        "REACT NATIVE",
        "ASYNC STORAGE",
        "USECONTEXT",
        "LIFE CYCLE",
        "STACK",
        "BOTTOM TABS",
        "NAVIGATION",
        "AXIOS",
        "REDUX",
        "REDUX THUNK",
        "MOB X",
        "FIREBASE",
        "DATA HANDLING",
    ];

    const abilityData = [
        {
            id: 0,
            name: "React Native",
            gauge: 80,
            gaugeColor: "#00CFF5",
        },
        {
            id: 1,
            name: "React",
            gauge: 70,
            gaugeColor: "#00CFF5",
        },
        {
            id: 2,
            name: "MySQL",
            gauge: 40,
            gaugeColor: "#5D87A1",
        },
        {
            id: 0,
            name: "Axios/Fetch API",
            gauge: 50,
            gaugeColor: "#0A99E0",
        },
        {
            id: 1,
            name: "Redux",
            gauge: 50,
            gaugeColor: "#7649BB",
        },
        {
            id: 2,
            name: "Firebase",
            gauge: 60,
            gaugeColor: "#F5820C",
        },
        {
            id: 0,
            name: "Git",
            gauge: 40,
            gaugeColor: "#1B1F23",
        },
        {
            id: 1,
            name: "HTML/CSS",
            gauge: 90,
            gaugeColor: "#E44F26",
        },
        {
            id: 2,
            name: "Figma",
            gauge: 80,
            gaugeColor: "#A259FF",
        },
        {
            id: 0,
            name: "PhotoShop",
            gauge: 100,
            gaugeColor: "#1E73B1",
        },
        {
            id: 1,
            name: "Illustrator",
            gauge: 100,
            gaugeColor: "#FF9A00",
        },
    ];
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
            />
            <AbilityWrap>
                <Section
                    style={{
                        marginBottom: 132,
                    }}
                >
                    <MainTitle titleData={titleData} />
                </Section>
                <Section>
                    <Abilities>
                        {abilityData.map((ability, index) => {
                            return (
                                <Ability
                                    ability={ability}
                                    scrollY={scrollY}
                                    logo={abilitySources[index]}
                                />
                            );
                        })}
                    </Abilities>
                </Section>
                {/* <FooterButton
                    prevLink={`/0/0`}
                    prevTitle="Info"
                    prevImg={footer.info}
                    nextLink={`/0/2`}
                    nextTile="Github"
                    nextImg={footer.github}
                    goGithub
                    pageName="Ability"
                /> */}
            </AbilityWrap>
        </Wrap>
    );
};

export default DetailAbility;
