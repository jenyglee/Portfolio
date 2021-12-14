import React from "react";
import styled from "styled-components";
import { icons } from "../images";

const Wrap = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ButtonWrap = styled.div`
    display: flex;
`;
const ImageWrap = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const PrevNextButton = ({ translateX, setTranslateX }) => {
    return (
        <Wrap>
            <ButtonWrap>
                <ImageWrap
                    style={{
                        transform: `rotate(180deg)`,
                    }}
                    onClick={() => {
                        setTranslateX(translateX + 100);
                    }}
                >
                    <Image src={icons.prevNext} />
                </ImageWrap>
                <ImageWrap
                    onClick={() => {
                        setTranslateX(translateX - 100);
                    }}
                >
                    <Image src={icons.prevNext} />
                </ImageWrap>
            </ButtonWrap>
        </Wrap>
    );
};

export default PrevNextButton;
