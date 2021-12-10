import React from "react";
import styled from "styled-components";
import { footer } from "../images";

const Wrap = styled.div`
    width: 100%;
    height: 104px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
`;

const Align = styled.div`
    width: 570px;
    height: 100%;
`;

const ButtonWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const ButtonTitleWrap = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleWrap = styled.div`
    font-family: "BLUDHAVEN";
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h4`
    font-size: 16px;
    transform: translateY(2px);
`;

const ThumbImageWrap = styled.div`
    width: 100%;
    height: 60px;
    background-color: red;
`;
const ArrowImageWrap = styled.div`
    width: 10px;
    height: 10px;
`;

const Image = styled.img`
    width: 100%;
`;

const FooterButton = () => {
    return (
        <Wrap>
            <Align>
                <ButtonWrap>
                    <ButtonTitleWrap>
                        <TitleWrap>
                            <ArrowImageWrap
                                style={{
                                    marginRight: 13,
                                }}
                            >
                                <Image
                                    src={footer.arrow}
                                    style={{
                                        transform: `rotate(180deg)`,
                                    }}
                                />
                            </ArrowImageWrap>
                            <Title>Info</Title>
                        </TitleWrap>
                        <ThumbImageWrap>
                            <Image src={footer.info} />
                        </ThumbImageWrap>
                    </ButtonTitleWrap>
                    <ButtonTitleWrap>
                        <TitleWrap>
                            <Title>Github</Title>
                            <ArrowImageWrap
                                style={{
                                    marginLeft: 13,
                                }}
                            >
                                <Image src={footer.arrow} />
                            </ArrowImageWrap>
                        </TitleWrap>
                        <ThumbImageWrap>
                            <Image src={footer.github} />
                        </ThumbImageWrap>
                    </ButtonTitleWrap>
                </ButtonWrap>
            </Align>
        </Wrap>
    );
};

export default FooterButton;
