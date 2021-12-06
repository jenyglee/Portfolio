import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Gauge from "./Gauge";

const Wrap = styled.div`
    width: 100%;
    display: flex;
`;

const AbilityWrap = styled.div`
    flex: 1;
    margin: 0 10px;
    margin-bottom: 30px;
    position: relative;
`;

const TopLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.detailLine};
    position: absolute;
    top: 0;
    margin-bottom: 30px;
`;
const BottomLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.detailLine};
    position: absolute;
    bottom: 0;
`;

const Ability = ({ abilities }) => {
    return (
        <Wrap>
            {abilities.map((ability) => {
                return (
                    <AbilityWrap>
                        <TopLine />
                        <Title name={ability.name} />
                        <Gauge percent={ability.gauge} />
                        <BottomLine />
                    </AbilityWrap>
                );
            })}
        </Wrap>
    );
};

export default Ability;
