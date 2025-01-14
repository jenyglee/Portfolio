import React, { useEffect } from "react"
import styled from "styled-components"
import { handleTop } from "helper/helper"
import Title from "components/detailProject/Title"
import MainVisualMusinsa from "components/detailProject/musinsa/MainVisualMusinsa"
import Accordion from "components/detailProject/Accodion"
import { header } from "images"
import DetailHeader from "components/DetailHeader"

const Wrap = styled.main`
    width: 100%;
`

const MusinsaWrap = styled.div`
    max-width: 1200px;
    padding-bottom: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

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
`

const DetailMusinsa = ({ scrollX, scrollY }) => {
    useEffect(() => {
        handleTop()
    }, [])

    return (
        <Wrap>
            <DetailHeader
                scrollY={scrollY}
                prevLink={`/2/0`}
                prevTitle="AVN"
                prevImg={header.avn}
                nextLink={`/2/2`}
                nextTitle="ConcertKit"
                nextImg={header.concertKit}
            />
            <MusinsaWrap>
                <MainWrap>
                    <Title
                        number="02"
                        title="컨셉디자인"
                        titlePoint="무신사"
                        pointColor="#0080E2"
                        startDate="201910"
                        endDate="201911"
                    />
                    <MainVisualMusinsa />
                    <Accordion
                        projectNumber="03"
                        number="01"
                        title="UX/UI Design"
                        detailNumber="1"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="03"
                        number="02"
                        title="Component"
                        detailNumber="2"
                        scrollX={scrollX}
                    />
                </MainWrap>
            </MusinsaWrap>
        </Wrap>
    )
}

export default DetailMusinsa
