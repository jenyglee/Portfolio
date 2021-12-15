import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { footer } from "../images";

const Wrap = styled.div`
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
`;

const Align = styled.div`
    width: 570px;
    height: 100%;
    background: red;
`;

const ButtonWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: green;
`;

const Thumb = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ img }) => `url(${img})`};
    background-size: ${({ scale }) => scale};
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
`;

const ButtonTitleWrap = styled.div`
    display: flex;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.detailWhiteText};
`;
const ArrowImage = styled.img`
    width: 11px;
    height: 13px;
`;

const FooterButton = ({
    prevLink,
    nextLink,
    prevTitle,
    nextTile,
    prevImg,
    nextImg,
    goGithub,
    pageName,
}) => {
    const [prevScale, setPrevScale] = useState("100%");
    const [nextScale, setNextScale] = useState("100%");
    return (
        <Wrap>
            <Align>
                <ButtonWrap>
                    {goGithub && pageName === "Ability" ? (
                        <>
                            <Link
                                to={prevLink}
                                style={{
                                    width: "100%",
                                }}
                            >
                                <Thumb
                                    img={prevImg}
                                    scale={prevScale}
                                    onMouseEnter={() => {
                                        setPrevScale("120%");
                                    }}
                                    onMouseLeave={() => {
                                        setPrevScale("100%");
                                    }}
                                >
                                    <ButtonTitleWrap>
                                        <ArrowImage
                                            src={footer.arrow}
                                            style={{
                                                transform: "rotate(180deg)",
                                                marginRight: 8,
                                            }}
                                        />
                                        <Title>{prevTitle}</Title>
                                    </ButtonTitleWrap>
                                </Thumb>
                            </Link>
                            <a
                                href="https://github.com/jenyglee"
                                target="_blank"
                                style={{
                                    width: "100%",
                                }}
                            >
                                <Thumb
                                    img={nextImg}
                                    scale={nextScale}
                                    onMouseEnter={() => {
                                        setNextScale("120%");
                                    }}
                                    onMouseLeave={() => {
                                        setNextScale("100%");
                                    }}
                                >
                                    <ButtonTitleWrap>
                                        <Title>{nextTile}</Title>
                                        <ArrowImage
                                            src={footer.arrow}
                                            style={{
                                                marginLeft: 8,
                                            }}
                                        />
                                    </ButtonTitleWrap>
                                </Thumb>
                            </a>
                        </>
                    ) : (
                        <>
                            <Link
                                to={prevLink}
                                style={{
                                    width: "100%",
                                }}
                            >
                                <Thumb
                                    img={prevImg}
                                    scale={prevScale}
                                    onMouseEnter={() => {
                                        setPrevScale("120%");
                                    }}
                                    onMouseLeave={() => {
                                        setPrevScale("100%");
                                    }}
                                >
                                    <ButtonTitleWrap>
                                        <ArrowImage
                                            src={footer.arrow}
                                            style={{
                                                transform: "rotate(180deg)",
                                                marginRight: 8,
                                            }}
                                        />
                                        <Title>{prevTitle}</Title>
                                    </ButtonTitleWrap>
                                </Thumb>
                            </Link>
                            <Link
                                to={nextLink}
                                style={{
                                    width: "100%",
                                }}
                            >
                                <Thumb
                                    img={nextImg}
                                    scale={nextScale}
                                    onMouseEnter={() => {
                                        setNextScale("120%");
                                    }}
                                    onMouseLeave={() => {
                                        setNextScale("100%");
                                    }}
                                >
                                    <ButtonTitleWrap>
                                        <Title>{nextTile}</Title>
                                        <ArrowImage
                                            src={footer.arrow}
                                            style={{
                                                marginLeft: 8,
                                            }}
                                        />
                                    </ButtonTitleWrap>
                                </Thumb>
                            </Link>
                        </>
                    )}
                </ButtonWrap>
            </Align>
        </Wrap>
    );
};

export default FooterButton;
