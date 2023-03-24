import React, { useEffect } from "react"
import styled from "styled-components"
import { handleTop } from "helper/helper"
import Title from "components/detailProject/Title"
import MainVisualGulpApp from "components/detailProject/glupApp/MainVisualGulpApp"
import Accordion from "components/detailProject/Accodion"
import { header } from "images"
import DetailHeader from "components/DetailHeader"
import MainVisualOla from "components/detailProject/ola/MainVisualOla"

const Wrap = styled.main`
    width: 100%;
`

const OlaWrap = styled.div`
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

const stickerData = [
    {
        bgColor: "#F46B3F",
        color: "#ffffff",
        content: [
            {
                text: "SPRING",
                strong: false,
            },
            {
                text: "BOOT",
                strong: true,
            },
        ],
    },
    {
        bgColor: "#FFE920",
        color: "#000000",
        content: [
            {
                text: "SPRING",
                strong: false,
            },
            {
                text: "DATA",
                strong: false,
            },
            {
                text: "JPA",
                strong: true,
            },
        ],
    },
]

const DetailOlaApp = ({ scrollX, scrollY }) => {
    useEffect(() => {
        handleTop()
    }, [])

    return (
        <Wrap>
            <DetailHeader
                scrollY={scrollY}
                prevLink={`/`}
                prevTitle="Home"
                prevImg={header.home}
                nextLink={`/1/1`}
                nextTitle="Visual OMS"
                nextImg={header.visualOms}
            />
            <OlaWrap>
                <MainWrap>
                    <Title
                        number="01"
                        title="등산크루 모집 커뮤니티"
                        titlePoint="올라"
                        sticker={stickerData}
                        pointColor="#F46B3F"
                        startDate="202302"
                        endDate="202303"
                    />
                    <MainVisualOla />
                    <Accordion
                        projectNumber="06"
                        number="01"
                        title="Work Plan"
                        detailNumber="1"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="06"
                        number="02"
                        title="Service Architecture"
                        detailNumber="2"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="06"
                        number="03"
                        title="Functions"
                        detailNumber="3"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="06"
                        number="04"
                        title="ERD"
                        detailNumber="4"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="06"
                        number="05"
                        title="Review"
                        detailNumber="5"
                        scrollX={scrollX}
                    />
                </MainWrap>
            </OlaWrap>
        </Wrap>
    )
}

export default DetailOlaApp
