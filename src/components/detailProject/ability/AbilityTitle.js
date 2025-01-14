import React from "react";
import styled from "styled-components";

const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    padding-top: 30px;
    padding-left: 20px;
    margin-bottom: 13px;
    @media ${({ theme }) => theme.size768} {
        padding-top: 20px;
    }
`;
const LoogWrap = styled.div`
    width: 21px;
    height: 21px;
    margin-right: 7px;
`;
const Logo = styled.img`
    width: 100%;
    height: 100%;
`;
const Title = styled.h1`
    font-family: "AppleSDGothicNeoM";
    font-size: 16px;
    transform: translateY(-2px);
`;

const AbilityTitle = ({ name, logo }) => {
    return (
        <TitleWrap>
            <LoogWrap>
                <Logo src={logo} />
            </LoogWrap>
            <Title>{name}</Title>
        </TitleWrap>
    );
};

export default AbilityTitle;
