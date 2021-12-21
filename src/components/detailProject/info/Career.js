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
        height: 240px;
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
    font-size: 16px;
    @media ${({ theme }) => theme.size768} {
        font-size: 13px;
    }
`;

const Title = styled.h1`
    font-family: "AppleSDGothicNeoB";
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
    word-break: keep-all;
    @media ${({ theme }) => theme.size768} {
        margin-bottom: 0;
        margin-top: 5px;
        font-size: 16px;
        line-height: 20px;
    }
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

const TitleWrapSizeFull = styled.div`
    @media ${({ theme }) => theme.size768} {
        display: none;
    }
`;
const TitleWrapSize768 = styled.div`
    display: none;
    @media ${({ theme }) => theme.size768} {
        display: block;
    }
`;
const TitleWrap = styled.div`
    width: 80%;
`;

const Career = ({ career }) => {
    return (
        <Wrap>
            <CareerWrap>
                <TitleWrapSizeFull>
                    <YearWrap>
                        <YearObj>
                            <YearFrom>{career.from}</YearFrom>
                            <YearTo>{career.to}</YearTo>
                        </YearObj>
                        <CompanyName>{career.company}</CompanyName>
                    </YearWrap>
                    <Title>{career.title}</Title>
                </TitleWrapSizeFull>

                <TitleWrapSize768>
                    <YearWrap>
                        <YearObj>
                            <YearFrom>{career.from}</YearFrom>
                            <YearTo>{career.to}</YearTo>
                        </YearObj>
                        <TitleWrap>
                            <CompanyName>{career.company}</CompanyName>
                            <Title>{career.title}</Title>
                        </TitleWrap>
                    </YearWrap>
                </TitleWrapSize768>

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
