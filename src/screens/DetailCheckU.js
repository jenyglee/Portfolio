import React, { useEffect } from "react";
import styled from "styled-components";
import { handleTop } from "helper/helper";
import Title from "components/detailProject/Title";
import MainVisualGulpApp from "components/detailProject/glupApp/MainVisualGulpApp";
import Accordion from "components/detailProject/Accodion";
import { header } from "images";
import DetailHeader from "components/DetailHeader";
import MainVisualCheckU from "components/detailProject/checkU/MainVisualCheckU";

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

const stickerData = [
  {
    bgColor: "#1E438F",
    color: "#ffffff",
    content: [
      {
        text: "NEXT",
        strong: true,
      },
      {
        text: "JS",
        strong: false,
      },
    ],
  },
  {
    bgColor: "#F8DD86",
    color: "#000000",
    content: [
      {
        text: "REACT",
        strong: true,
      },
      {
        text: "QUERY",
        strong: false,
      },
    ],
  },
];

const DetailCheckU = ({ scrollX, scrollY }) => {
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
        nextLink={`/1/1`}
        nextTitle="Visual OMS"
        nextImg={header.visualOms}
      />
      <GulpAppWrap>
        <MainWrap>
          <Title
            number="03"
            title="나만의 복지 찾기 앱"
            titlePoint="챙겨요"
            sticker={stickerData}
            pointColor="#1E438F"
            startDate="20230401"
            endDate="20230623"
          />
          <MainVisualCheckU />
          <Accordion
            projectNumber="07"
            number="01"
            title="Work Plan"
            detailNumber="1"
            scrollX={scrollX}
          />
          <Accordion
            projectNumber="07"
            number="02"
            title="View Flow"
            detailNumber="2"
            scrollX={scrollX}
          />
          <Accordion
            projectNumber="07"
            number="03"
            title="Review"
            detailNumber="3"
            scrollX={scrollX}
          />
          {/* <Accordion
            projectNumber="07"
            number="04"
            title="Review"
            detailNumber="4"
            scrollX={scrollX}
          /> */}
        </MainWrap>
      </GulpAppWrap>
    </Wrap>
  );
};

export default DetailCheckU;
