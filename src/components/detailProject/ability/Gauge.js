import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    padding-left: 20px;
    @media ${({ theme }) => theme.size768} {
        padding-bottom: 20px;
    }
`;

const GaugeWrap = styled.div`
    width: 256px;
    height: 10px;
    margin-right: 20px;
    position: relative;
    @media ${({ theme }) => theme.size568} {
        width: 205px;
    }
`;
const Disable = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.detailDisable};
    position: absolute;
`;
const Able = styled.div`
    width: 0%;
    height: 100%;
    border-radius: 5px;
    background-color: ${({ color }) => color};
    position: absolute;
    transition: 1s;
`;

const Percent = styled.h1`
    font-family: "AppleSDGothicNeoM";
    font-size: 24px;
    font-weight: bold;
`;

const Gauge = ({ percent, scrollX, scrollY, color }) => {
    const [isStarted, setIsStarted] = useState(false);
    useEffect(() => {
        if (scrollX >= 1200 && scrollY > 1630) {
            setIsStarted(true);
            console.log("scrollX >= 1200 && scrollY > 1630");
        } else if (scrollX < 1200 && scrollY > 1300) {
            setIsStarted(true);
            console.log("scrollX < 1200 && scrollY > 1300");
        } else if (scrollX < 960 && scrollY > 950) {
            setIsStarted(true);
            console.log("scrollX < 960 && scrollY > 950");
        } else if (scrollX < 768 && scrollY > 320) {
            setIsStarted(true);
            console.log("scrollX < 768 && scrollY > 320");
        } else if (scrollX < 568) {
            setIsStarted(true);
            console.log("scrollX < 568");
        } else {
            setIsStarted(false);
        }
    }, [scrollY]);

    return (
        <Wrap>
            <GaugeWrap>
                <Disable />
                <Able
                    percent={percent}
                    color={color}
                    style={{
                        width: isStarted ? `${percent}%` : 0,
                    }}
                />
            </GaugeWrap>
            <Percent>{percent}%</Percent>
        </Wrap>
    );
};

export default Gauge;
