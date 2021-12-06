import React from "react";
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
    width: ${({ percent }) => percent};
    height: 100%;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.detailPoint};
    position: absolute;
`;

const Percent = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;

const Gauge = ({ percent }) => {
    // console.log(percent);
    return (
        <Wrap>
            <GaugeWrap>
                <Disable />
                <Able percent={percent} />
            </GaugeWrap>
            <Percent>{percent}</Percent>
        </Wrap>
    );
};

export default Gauge;
