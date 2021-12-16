import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { handleTop } from "./../helper/helper";
import MainTitle from "../components/detailProject/ability/MainTitle";
import Ability from "../components/detailProject/ability/Ability";
import DetailHeader from "../components/DetailHeader";
import PrevNextButton from "../components/PrevNextButton";
import { header, abilitySources } from "../images";

const Wrap = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 100px;
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
    @media ${({ theme }) => theme.size1200} {
        justify-content: center;
    }
    /* 768px 부터 슬라이딩*/
    @media ${({ theme }) => theme.size768} {
        width: 100%;
        overflow: hidden;
        flex-flow: row nowrap;
        justify-content: flex-start;
    }
`;

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

const DetailAbility = ({ scrollX, scrollY }) => {
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
                    <MainTitle titleData={titleData} />
                </Section>
                <Section>
                    <Abilities>
                        {abilityData.map((ability, index) => {
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
