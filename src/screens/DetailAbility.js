import React, { useEffect } from "react";
import styled from "styled-components";
import MainTitle from "../components/detailProject/ability/MainTitle";
import Ability from "../components/detailProject/ability/Ability";
import FooterButton from "../components/FooterButton";
import { footer } from "../images";

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 304px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${({ theme }) => theme.size1200} {
        padding: 250px 0;
        max-width: 960px;
    }
    @media ${({ theme }) => theme.size960} {
        padding: 200px 0;
        max-width: 768px;
    }
    @media ${({ theme }) => theme.size768} {
        padding: 150px 0;
        max-width: 568px;
    }
    @media ${({ theme }) => theme.size568} {
        padding: 104px 0;
        max-width: 320px;
    }
`;

const Section = styled.section`
    width: 100%;
`;

const AbilityWrap = styled.div`
    display: flex;
    flex-direction: column;
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
        [
            {
                id: 0,
                name: "React Native",
                gauge: 80,
            },
            {
                id: 1,
                name: "React",
                gauge: 70,
            },
            {
                id: 2,
                name: "MySQL",
                gauge: 40,
            },
        ],
        [
            {
                id: 0,
                name: "Axios/Fetch API",
                gauge: 50,
            },
            {
                id: 1,
                name: "Redux",
                gauge: 50,
            },
            {
                id: 2,
                name: "Firebase",
                gauge: 60,
            },
        ],
        [
            {
                id: 0,
                name: "Git",
                gauge: 40,
            },
            {
                id: 1,
                name: "HTML/CSS",
                gauge: 90,
            },
            {
                id: 2,
                name: "Figma",
                gauge: 80,
            },
        ],
        [
            {
                id: 0,
                name: "PhotoShop",
                gauge: 100,
            },
            {
                id: 1,
                name: "Illustrator",
                gauge: 100,
            },
        ],
    ];
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <Wrap>
            <Section
                style={{
                    marginBottom: 132,
                }}
            >
                <MainTitle titleData={titleData} />
            </Section>
            <Section>
                <AbilityWrap>
                    {abilityData.map((abilities) => {
                        return (
                            <Ability abilities={abilities} scrollY={scrollY} />
                        );
                    })}
                </AbilityWrap>
            </Section>
            <FooterButton
                prevLink={`/0/0`}
                prevTitle="Info"
                prevImg={footer.info}
                nextLink={`/0/2`}
                nextTile="Github"
                nextImg={footer.github}
            />
        </Wrap>
    );
};

export default DetailAbility;
