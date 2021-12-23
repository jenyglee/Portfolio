import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { handleTop } from "helper/helper";
import Title from "components/detailProject/Title";
import { BeothermSources } from "images";
import { header } from "images";
import DetailHeader from "components/DetailHeader";

const Wrap = styled.main`
    width: 100%;
`;

const BeothermWrap = styled.div`
    max-width: 1200px;
    padding-bottom: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainWrap = styled.main`
    width: 100%;
    padding-top: 260px;
    @media ${({ theme }) => theme.size1200} {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media ${({ theme }) => theme.size960} {
        padding-top: 190px;
    }
    @media ${({ theme }) => theme.size568} {
        padding-top: 105px;
    }
`;

const ImageWrap = styled.div`
    width: 100%;
    margin: ${({ isSize768 }) => (isSize768 ? "50px 0" : "100px 0")};
`;
const StyledImage = styled.img`
    width: 100%;
`;

const DetailBeotherm = ({ scrollX, scrollY }) => {
    const [isSize768, setIsSize768] = useState(false);
    useEffect(() => {
        handleTop();
    }, []);

    useEffect(() => {
        if (scrollX <= 768) {
            setIsSize768(true);
        } else {
            setIsSize768(false);
        }
    }, [scrollX]);

    return (
        <Wrap>
            <DetailHeader
                scrollY={scrollY}
                prevLink={`/2/4`}
                prevTitle="Kyobo"
                prevImg={header.kyobo}
                nextLink={`/`}
                nextTitle="Home"
                nextImg={header.home}
            />
            <BeothermWrap>
                <MainWrap>
                    <Title
                        number="07"
                        title="프로모션"
                        titlePoint="비오템옴므"
                        pointColor="#C20702"
                        startDate="201704"
                        endDate="201704"
                    />
                    <ImageWrap isSize768={isSize768}>
                        <StyledImage src={BeothermSources[0]} />
                    </ImageWrap>
                </MainWrap>
            </BeothermWrap>
        </Wrap>
    );
};

export default DetailBeotherm;
