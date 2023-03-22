import React from "react"
import styled from "styled-components"

const TitleWrap = styled.section`
    width: 100%;
    box-sizing: border-box;
`
const ProjectTitle = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: 85px;
    @media ${({ theme }) => theme.size768} {
        justify-content: flex-end;
        margin-bottom: 70px;
    }
    @media ${({ theme }) => theme.size568} {
        margin-bottom: 50px;
    }
`
const Number = styled.p`
    font-family: "BLUDHAVEN";
    font-size: 100px;
    /* padding-bottom: 20px; */
    /* line-height: 0; */
    @media ${({ theme }) => theme.size768} {
        display: none;
    }
`
const Name = styled.p`
    font-family: "AppleSDGothicNeoB";
    font-size: 80px;
    transform: translateY(-4px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media ${({ theme }) => theme.size768} {
        font-size: 64px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 34px;
    }
`

const NamePoint = styled.p`
    color: ${({ pointColor }) => pointColor};
    margin-top: 16px;
    /* margin-left: 20px; */
`
const Space = styled.span`
    width: 10px;
`

const ProjectDateWrap = styled.article`
    font-family: "BLUDHAVEN";
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const ProjectDate = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    @media ${({ theme }) => theme.size768} {
        width: 50%;
    }
`
const StartDate = styled.p`
    font-size: 30px;
    margin-right: 7px;
    @media ${({ theme }) => theme.size568} {
        font-size: 18px;
    }
`
const EndDate = styled.p`
    font-size: 30px;
    margin-left: 7px;
    @media ${({ theme }) => theme.size568} {
        font-size: 18px;
    }
`
const DateLine = styled.span`
    width: 105px;
    height: 1px;
    background-color: ${({ theme }) => theme.detailLine};
`
const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.detailLine};
    margin-bottom: 20px;
`

const Title = ({ number, title, titlePoint, pointColor, startDate, endDate }) => {
    return (
        <TitleWrap>
            <ProjectTitle>
                <Number>{number}</Number>
                <Name>
                    {title}
                    {/* <Space /> */}
                    <NamePoint pointColor={pointColor}>{titlePoint}</NamePoint>
                </Name>
            </ProjectTitle>
            <ProjectDateWrap>
                <ProjectDate>
                    <StartDate>{startDate}</StartDate>
                    <DateLine />
                    <EndDate>{endDate}</EndDate>
                </ProjectDate>
            </ProjectDateWrap>
            <Line />
        </TitleWrap>
    )
}

export default Title
