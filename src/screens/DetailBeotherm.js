import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../components/detailProject/Title";
import { BeothermSources } from "../images";
import FooterButton from "../components/FooterButton";
import { footer, header } from "../images";
import DetailHeader from "../components/DetailHeader";

const Wrap = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    @media ${({ theme }) => theme.size1200} {
        max-width: 960px;
    }
    @media ${({ theme }) => theme.size960} {
        max-width: 768px;
    }
    @media ${({ theme }) => theme.size768} {
        max-width: 568px;
    }
    @media ${({ theme }) => theme.size568} {
        max-width: 320px;
    }
`;

const BeothermWrap = styled.div`
    width: 100%;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainWrap = styled.main`
    width: 100%;
    padding-top: 260px;
    @media ${({ theme }) => theme.size960} {
        padding-top: 190px;
        padding-left: 20px;
        padding-right: 20px;
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
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
                        number="03"
                        title="프로모션 비오템옴므"
                        titlePoint=""
                        startDate="202108"
                        endDate="202112"
                    />
                    <ImageWrap isSize768={isSize768}>
                        <StyledImage src={BeothermSources[0]} />
                    </ImageWrap>
                </MainWrap>
                {/* <FooterButton
                    prevLink={`/2/4`}
                    prevTitle="Kyobo Promotion"
                    prevImg={footer.kyobo}
                    nextLink={`/`}
                    nextTile="Home"
                    nextImg={footer.home}
                /> */}
            </BeothermWrap>
        </Wrap>
    );
};

export default DetailBeotherm;
