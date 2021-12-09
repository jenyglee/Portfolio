import React from "react";
import styled from "styled-components";
import { infoSources } from "../../../images";

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.detailLine};
`;

const Wrap = styled.div`
    flex: 1;
    flex-direction: column;
    margin: ${({ location }) =>
        location === "first" ? `0 10px 0 0` : `0 0 0 10px`};
    /* background-color: red; */
`;

const CareerWrap = styled.div`
    height: 309px;
    padding: 30px;
`;
const YearWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;
const YearObj = styled.div`
    font-family: "BLUDHAVEN";
    color: #fff;
    width: 42px;
    height: 42px;
    border-radius: 21px;
    background: blue;
    position: relative;
    font-size: 16px;
    margin-right: 10px;
`;
const YearFrom = styled.p`
    position: absolute;
    top: 6px;
    left: 8px;
`;
const YearTo = styled.p`
    position: absolute;
    bottom: 7px;
    left: 20px;
`;
const CompanyName = styled.p``;

const Title = styled.h1`
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    margin-bottom: 32px;
    word-break: keep-all;
`;
const DetailList = styled.ul``;
const DetailObj = styled.li`
    display: flex;
    margin-bottom: 8px;
`;
const ImageWrap = styled.div`
    width: 15px;
    height: 15px;
    margin-right: 10px;
`;
const CheckImage = styled.img`
    width: 100%;
    height: 100%;
`;
const DetailText = styled.p`
    font-size: 16px;
`;
const Career = ({ career }) => {
    // console.log(career.detailCareer);
    return (
        <Wrap location={career.location}>
            <Line />
            <CareerWrap>
                <YearWrap>
                    <YearObj>
                        <YearFrom>{career.from}</YearFrom>
                        <YearTo>{career.to}</YearTo>
                    </YearObj>
                    <CompanyName>{career.company}</CompanyName>
                </YearWrap>
                <Title>{career.title}</Title>
                <DetailList>
                    {career.detailCareer.map((text, index) => {
                        return (
                            <DetailObj key={index}>
                                <ImageWrap>
                                    <CheckImage src={infoSources.check} />
                                </ImageWrap>
                                <DetailText>{text}</DetailText>
                            </DetailObj>
                        );
                    })}
                </DetailList>
            </CareerWrap>
            <Line />
        </Wrap>
    );
};

export default Career;
