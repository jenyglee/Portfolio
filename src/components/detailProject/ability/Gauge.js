import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    padding-left: 30px;
`;

const GaugeWrap = styled.div`
    width: 256px;
    height: 10px;
    margin-right: 20px;
    position: relative;
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
    background-color: ${({ theme }) => theme.detailPoint};
    position: absolute;
    transition: 1s;
`;

const Percent = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;

const Gauge = ({ percent, scrollY }) => {
    const [isStarted, setIsStarted] = useState(false);

    // 높이 1090에서 게이지 실행
    useEffect(() => {
        if (scrollY > 1090) {
            setIsStarted(true);
        }
    }, [scrollY]);

    return (
        <Wrap>
            <GaugeWrap>
                <Disable />
                <Able
                    percent={percent}
                    style={{
                        width: isStarted ? `${percent}%` : 0,
                    }}
                />
            </GaugeWrap>
            <Percent>{percent}</Percent>
        </Wrap>
    );
};

export default Gauge;
