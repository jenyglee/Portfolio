import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/detailProject/Title";
import MainVisualConsultKit from "../components/detailProject/consultKit/MainVisualConsultKit";
import Accordion from "../components/detailProject/Accodion";
import FooterButton from "../components/FooterButton";
import { footer } from "../images";

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 200px;
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

const MainWrap = styled.main`
    width: 100%;
    padding-top: 260px;
    padding-left: 20px;
    padding-right: 20px;
    @media ${({ theme }) => theme.size960} {
        padding-top: 190px;
    }
    @media ${({ theme }) => theme.size568} {
        padding-top: 105px;
    }
`;

const DetailConsultKit = ({ scrollX }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <Wrap>
            <MainWrap>
                <Title
                    number="03"
                    title="브랜드 구축 컨설킷"
                    titlePoint=""
                    startDate="202108"
                    endDate="202112"
                />
                <MainVisualConsultKit />
                <Accordion
                    projectNumber="05"
                    number="01"
                    title="UX/UI Design"
                    detailNumber="1"
                    scrollX={scrollX}
                />
            </MainWrap>
            <FooterButton
                prevLink={`/2/2`}
                prevTitle="KT&G UI/UX"
                prevImg={footer.ktng}
                nextLink={`/2/4`}
                nextTile="Kyobo Promotion"
                nextImg={footer.kyobo}
            />
        </Wrap>
    );
};

export default DetailConsultKit;
