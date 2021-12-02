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

const ImageWrap = styled.div`
    width: 100%;
    margin-bottom: 15px;
`;
const StyledImage = styled.img`
    width: 100%;
`;

const UXUIDesignSection = ({ img, isLast }) => {
    return (
        <Section isLast={isLast}>
            <ImageWrap>
                <StyledImage src={img} />
            </ImageWrap>
        </Section>
    );
};

export default UXUIDesignSection;
