import React from "react";
import styled from "styled-components";
import AbilityTitle from "./AbilityTitle";
import Gauge from "./Gauge";

const Wrap = styled.div`
    width: 387px;
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

const Ability = ({ ability, scrollY, logo }) => {
    return (
        <Wrap>
            <AbilityWrap>
                <TopLine />
                <AbilityTitle name={ability.name} logo={logo} />
                <Gauge
                    percent={ability.gauge}
                    color={ability.gaugeColor}
                    scrollY={scrollY}
                />
                <BottomLine />
            </AbilityWrap>
        </Wrap>
    );
};

export default Ability;
