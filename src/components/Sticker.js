import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sticker } from "../images";

const ImageWrap = styled.div`
    width: 97px;
    height: 97px;
    position: absolute;
    top: -20%;
    right: 9%;
    opacity: ${({ opacity }) => opacity};
    z-index: 1;
    transition: 0.5s;
    @media ${({ theme }) => theme.size1200} {
        width: 80px;
        height: 80px;
        top: 0%;
        right: -10%;
    }
    @media ${({ theme }) => theme.size960} {
        width: 70px;
        height: 70px;
    }
    @media ${({ theme }) => theme.size768} {
        width: 60px;
        height: 60px;
    }
    @media ${({ theme }) => theme.size568} {
        width: 40px;
        height: 40px;
        top: 0%;
        right: -17%;
    }
`;
const StickerImage = styled.img`
    width: 100%;
    height: 100%;
`;

const Sticker = ({ itemEnter, itemLeave }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 1700);
    }, []);
    return (
        <ImageWrap
            opacity={opacity}
            onMouseEnter={itemEnter}
            onMouseLeave={itemLeave}
        >
            <StickerImage src={sticker} />
        </ImageWrap>
    );
};

export default Sticker;
