import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/detailProject/Title";
import MainVisualGulpApp from "../components/detailProject/glupApp/MainVisualGulpApp";
import Accordion from "../components/detailProject/Accodion";
import FooterButton from "../components/FooterButton";
import { footer } from "../images";
import DetailHeader from "../components/DetailHeader";

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

const GulpAppWrap = styled.div`
    width: 100%;
    padding-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainWrap = styled.main`
    width: 100%;
    padding-top: 260px;
    @media ${({ theme }) => theme.size960} {
        padding-top: 190px;
        padding-left: 20px;
        padding-right: 20px;
    }
    @media ${({ theme }) => theme.size568} {
        padding-top: 105px;
    }
`;

const DetailGulpApp = ({ scrollX, scrollY }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <Wrap>
            <DetailHeader scrollY={scrollY} />
            <GulpAppWrap>
                <MainWrap>
                    <Title
                        number="01"
                        title="어플리케이션"
                        titlePoint="꿀꺽"
                        startDate="202108"
                        endDate="202112"
                    />
                    <MainVisualGulpApp />
                    <Accordion
                        projectNumber="01"
                        number="01"
                        title="Functions"
                        detailNumber="1"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="01"
                        number="02"
                        title="WorkPlan"
                        detailNumber="2"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="01"
                        number="03"
                        title="WorkIssue"
                        detailNumber="3"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="01"
                        number="04"
                        title="Review"
                        detailNumber="4"
                        scrollX={scrollX}
                    />
                </MainWrap>
                <FooterButton
                    prevLink={`/`}
                    prevTitle="Home"
                    prevImg={footer.home}
                    nextLink={`/2/0`}
                    nextTile="AVN / Cluster"
                    nextImg={footer.avn}
                />
            </GulpAppWrap>
        </Wrap>
    );
};

export default DetailGulpApp;
