import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sticker } from "images";

const ImageWrap = styled.div`
    width: 97px;
    height: 97px;
    position: absolute;
    left: 420px;
    top: -34px;
    opacity: ${({ opacity }) => opacity};
    z-index: 1;
    transition: 0.5s;
    @media ${({ theme }) => theme.size1200} {
        width: 80px;
        height: 80px;
        top: -25px;
    }
    @media ${({ theme }) => theme.size960} {
        width: 70px;
        height: 70px;
        left: 190px;
    }
    @media ${({ theme }) => theme.size768} {
        width: 60px;
        height: 60px;
        left: 140px;
    }
    @media ${({ theme }) => theme.size568} {
        width: 40px;
        height: 40px;
        left: 135px;
        top: 16px;
    }
`;
const StickerImage = styled.img`
    width: 100%;
    height: 100%;
`;

const Sticker = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 1700);
    }, []);
    return (
        <ImageWrap opacity={opacity}>
            <StickerImage src={sticker} />
        </ImageWrap>
    );
};

export default Sticker;
