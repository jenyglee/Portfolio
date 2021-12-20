import React, { useEffect } from "react";
import styled from "styled-components";
import { handleTop } from "./../helper/helper";
import Title from "../components/detailProject/Title";
import MainVisualKtNg from "../components/detailProject/ktNg/MainVisualKtNg";
import Accordion from "../components/detailProject/Accodion";
import { header } from "../images";
import DetailHeader from "../components/DetailHeader";

const Wrap = styled.main`
    width: 100%;
`;

const KtngWrap = styled.div`
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

const DetailKTnG = ({ scrollX, scrollY }) => {
    useEffect(() => {
        handleTop();
    }, []);

    return (
        <Wrap>
            <DetailHeader
                scrollY={scrollY}
                prevLink={`/2/1`}
                prevTitle="Musinsa"
                prevImg={header.musinsa}
                nextLink={`/2/3`}
                nextTitle="ConcertKit"
                nextImg={header.concertKit}
            />
            <KtngWrap>
                <MainWrap>
                    <Title
                        number="03"
                        title="컨셉디자인"
                        titlePoint="KT&G"
                        pointColor="#E30968"
                        startDate="201903"
                        endDate="201904"
                    />
                    <MainVisualKtNg />
                    <Accordion
                        projectNumber="04"
                        number="01"
                        title="UX/UI Design"
                        detailNumber="1"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="04"
                        number="02"
                        title="Component"
                        detailNumber="2"
                        scrollX={scrollX}
                    />
                </MainWrap>
            </KtngWrap>
        </Wrap>
    );
};

export default DetailKTnG;
