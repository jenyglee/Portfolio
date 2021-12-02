import React from "react";
import styled from "styled-components";

const Section = styled.section`
    margin-bottom: ${({ isLast }) => (isLast ? "0px" : "130px")};
    @media ${({ theme }) => theme.size1200} {
        margin-bottom: ${({ isLast }) => (isLast ? "0px" : "110px")};
    }
    @media ${({ theme }) => theme.size960} {
        margin-bottom: ${({ isLast }) => (isLast ? "0px" : "80px")};
    }
    @media ${({ theme }) => theme.size768} {
        margin-bottom: ${({ isLast }) => (isLast ? "0px" : "60px")};
    }
`;

const SortContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextWrap = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    @media ${({ theme }) => theme.size960} {
        width: 60%;
    }
    @media ${({ theme }) => theme.size568} {
        width: 100%;
    }
`;

const Title = styled.h2`
    display: inline-block;
    font-size: 24px;
    margin-bottom: 10px;
    @media ${({ theme }) => theme.size768} {
        font-size: 22px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 18px;
    }
`;

const Point = styled.span`
    font-weight: bold;
`;

const Description = styled.p`
    display: inline-block;
    font-size: 16px;
    line-height: 22px;
    word-break: keep-all;
    @media ${({ theme }) => theme.size768} {
        font-size: 13px;
        line-height: 20px;
    }
`;

const ImageWrap = styled.div`
    width: 100%;
    margin-bottom: 15px;
`;
const StyledImage = styled.img`
    width: 100%;
`;

const UXUIDesignSection = ({ img, pointTitle, title, description, isLast }) => {
    return (
        <Section isLast={isLast}>
            <ImageWrap>
                <StyledImage src={img} />
            </ImageWrap>
            <SortContainer>
                <TextWrap>
                    <Title>
                        {title}
                        <Point>{pointTitle}</Point>
                    </Title>
                    <Description>{description}</Description>
                </TextWrap>
            </SortContainer>
        </Section>
    );
};

export default UXUIDesignSection;
