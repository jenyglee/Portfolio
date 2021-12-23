import React from "react";
import styled from "styled-components";
import { icons } from "images";

const Wrap = styled.main`
    width: 100%;
    display: none;
    @media ${({ theme }) => theme.size768} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const ButtonWrap = styled.div`
    display: flex;
`;
const ImageWrap = styled.div`
    width: 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const PrevNextButton = ({ translateX, setTranslateX, pageName }) => {
    return (
        <Wrap>
            <ButtonWrap>
                <ImageWrap
                    style={{
                        transform: `rotate(180deg)`,
                    }}
                    onClick={() => {
                        if (translateX !== 0) {
                            setTranslateX(translateX + 100);
                        }
                    }}
                >
                    <Image src={icons.prevNext} />
                </ImageWrap>
                <ImageWrap
                    onClick={() => {
                        if (pageName === "Info") {
                            if (translateX !== -300) {
                                setTranslateX(translateX - 100);
                            }
                        } else if (pageName === "Ability") {
                            if (translateX !== -1000) {
                                setTranslateX(translateX - 100);
                            }
                        }
                    }}
                >
                    <Image src={icons.prevNext} />
                </ImageWrap>
            </ButtonWrap>
        </Wrap>
    );
};

export default PrevNextButton;
