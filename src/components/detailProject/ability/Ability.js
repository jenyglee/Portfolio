import React from "react";
import styled from "styled-components";
import AbilityTitle from "components/detailProject/ability/AbilityTitle";
import Gauge from "components/detailProject/ability/Gauge";

const Wrap = styled.div`
    width: 387px;
    display: flex;
    transform: ${({ translateX }) => `translateX(${translateX}%)`};
    transition: 0.3s;
    margin: 0 10px;
    margin-bottom: 30px;

    background-color: ${({ theme }) => theme.detailBoxBackground};
    @media ${({ theme }) => theme.size768} {
        margin-bottom: 20px;
    }
    @media ${({ theme }) => theme.size568} {
        width: 320px;
    }
`;

const AbilityWrap = styled.div`
    flex: 1;
    margin: 0 10px;

    position: relative;
    @media ${({ theme }) => theme.size768} {
        /* width: 768px; */
    }
    @media ${({ theme }) => theme.size568} {
        width: 320px;
    }
`;
const Ability = ({ translateX, ability, scrollX, scrollY, logo }) => {
    return (
        <Wrap translateX={translateX}>
            <AbilityWrap>
                <AbilityTitle name={ability.name} logo={logo} />
                <Gauge
                    percent={ability.gauge}
                    color={ability.gaugeColor}
                    scrollX={scrollX}
                    scrollY={scrollY}
                />
            </AbilityWrap>
        </Wrap>
    );
};

export default Ability;
