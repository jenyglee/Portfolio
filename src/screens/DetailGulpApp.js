import React, { useEffect } from "react";
import styled from "styled-components";
import { handleTop } from "helper/helper";
import Title from "components/detailProject/Title";
import MainVisualGulpApp from "components/detailProject/glupApp/MainVisualGulpApp";
import Accordion from "components/detailProject/Accodion";
import { header } from "images";
import DetailHeader from "components/DetailHeader";

const Wrap = styled.main`
    width: 100%;
`;

const GulpAppWrap = styled.div`
    max-width: 1200px;
    padding-bottom: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainWrap = styled.main`
    width: 100%;
    padding-top: 260px;
    @media ${({ theme }) => theme.size1200} {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media ${({ theme }) => theme.size960} {
        padding-top: 190px;
    }
    @media ${({ theme }) => theme.size568} {
        padding-top: 105px;
    }
`;

const DetailGulpApp = ({ scrollX, scrollY }) => {
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
                nextLink={`/2/0`}
                nextTitle="AVN"
                nextImg={header.avn}
            />
            <GulpAppWrap>
                <MainWrap>
                    <Title
                        number="01"
                        title="어플리케이션"
                        titlePoint="꿀꺽"
                        pointColor="#27C47D"
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
                        title="UserFlow"
                        detailNumber="3"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="01"
                        number="04"
                        title="WorkIssue"
                        detailNumber="4"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="01"
                        number="05"
                        title="Review"
                        detailNumber="5"
                        scrollX={scrollX}
                    />
                </MainWrap>
            </GulpAppWrap>
        </Wrap>
    );
};

export default DetailGulpApp;
