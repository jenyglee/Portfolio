import React from "react";
import styled from "styled-components";
import { infoSources } from "../../../images";

const Wrap = styled.div`
    flex: 1;
    flex-direction: column;
    margin: 0 10px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.detailBoxBackground};
`;

const CareerWrap = styled.div`
    width: 100%;
    height: 340px;
    padding: 30px;
    @media ${({ theme }) => theme.size1200} {
        height: 300px;
    }
    @media ${({ theme }) => theme.size768} {
        height: 278px;
    }
    @media ${({ theme }) => theme.size568} {
    }
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

const CompanyName = styled.p`
    font-family: "AppleSDGothicNeoM";
`;

const Title = styled.h1`
    font-family: "AppleSDGothicNeoB";
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
    word-break: keep-all;
`;

const DetailList = styled.ul`
    font-family: "AppleSDGothicNeoL";
`;
const DetailObj = styled.li`
    display: flex;
    margin-bottom: 6px;
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
    font-family: "AppleSDGothicNeoL";
    font-size: 13px;
`;

// const Line = styled.div`
//     width: 100%;
//     height: 1px;
//     background-color: #ddd;
// `;

const Career = ({ career }) => {
    return (
        <Wrap>
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
        </Wrap>
    );
};

export default Career;
