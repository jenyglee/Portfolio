import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/detailProject/Title";
import MainVisualKtNg from "../components/detailProject/ktNg/MainVisualKtNg";
import Accordion from "../components/detailProject/Accodion";

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const DetailKTnG = ({ scrollX }) => {
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
                    number="04"
                    title="컨셉디자인 KT&G"
                    titlePoint=""
                    startDate="202108"
                    endDate="202112"
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
        </Wrap>
    );
};

export default DetailKTnG;
