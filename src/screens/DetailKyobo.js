import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../components/detailProject/Title";
import { KyoboSources } from "../images";
import FooterButton from "../components/FooterButton";
import { footer } from "../images";

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 200px;
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

const MainWrap = styled.main`
    width: 100%;
    padding-top: 260px;
    padding-left: 20px;
    padding-right: 20px;
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

const DetailKyobo = ({ scrollX }) => {
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
            <MainWrap>
                <Title
                    number="03"
                    title="프로모션 교보문고"
                    titlePoint=""
                    startDate="202108"
                    endDate="202112"
                />
                <ImageWrap isSize768={isSize768}>
                    <StyledImage src={KyoboSources[0]} />
                </ImageWrap>
            </MainWrap>
            <FooterButton
                prevLink={`/2/3`}
                prevTitle="ConcertKit UI/UX"
                prevImg={footer.info}
                nextLink={`/2/5`}
                nextTile="Beotherm Promotion"
                nextImg={footer.github}
            />
        </Wrap>
    );
};

export default DetailKyobo;
