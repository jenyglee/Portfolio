import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages04 } from "./../images";

const ComponentWrap = styled.div`
    position: fixed;
    transition: 0.5s;
    top: ${({ transform }) => `calc(50% + ${transform}px)`};
    right: ${({ right }) => right}px;
    transform: translateY(-50%);
`;

const Image = styled.img`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`;

const BgComponent04 = ({ isShow }) => {
    const innerWidth = window.innerWidth;
    const [objTransform01, setObjTransform01] = useState(0);
    const [objTransform02, setObjTransform02] = useState(161);
    const [objTransform03, setObjTransform03] = useState(-107);
    const [objTransform04, setObjTransform04] = useState(-238);
    const [objTransform05, setObjTransform05] = useState(93);
    const [objOpacity01, setObjOpacity01] = useState(0);
    const [objOpacity02, setObjOpacity02] = useState(0);
    const [objOpacity03, setObjOpacity03] = useState(0);
    const [objOpacity04, setObjOpacity04] = useState(0);
    const [objOpacity05, setObjOpacity05] = useState(0);
    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjTransform01(objTransform01 - 50);
                setObjOpacity01(1);
            }, 0);
            setTimeout(() => {
                setObjTransform02(objTransform02 - 50);
                setObjOpacity02(1);
            }, 100);
            setTimeout(() => {
                setObjTransform03(objTransform03 - 50);
                setObjOpacity03(1);
            }, 100);
            setTimeout(() => {
                setObjTransform04(objTransform04 - 50);
                setObjOpacity04(1);
            }, 200);
            setTimeout(() => {
                setObjTransform05(objTransform05 - 50);
                setObjOpacity05(1);
            }, 200);
        } else {
            setTimeout(() => {
                setObjTransform01(objTransform01 + 50);
                setObjOpacity01(0);
            }, 0);
            setTimeout(() => {
                setObjTransform02(objTransform02 + 50);
                setObjOpacity02(0);
            }, 0);
            setTimeout(() => {
                setObjTransform03(objTransform03 + 50);
                setObjOpacity03(0);
            }, 0);
            setTimeout(() => {
                setObjTransform04(objTransform04 + 50);
                setObjOpacity04(0);
            }, 0);
            setTimeout(() => {
                setObjTransform05(objTransform05 + 50);
                setObjOpacity05(0);
            }, 0);
        }
    }, [isShow]);
    return (
        <>
            <ComponentWrap
                style={{
                    opacity: objOpacity01,
                }}
                right={() => {
                    if (innerWidth >= 1200 && innerWidth < 1440) {
                        return 472;
                    } else if (innerWidth >= 1440) {
                        return 531;
                    }
                }}
                transform={objTransform01}
                isShow={isShow}
            >
                <Image
                    src={bgImages04.Image01}
                    width={() => {
                        if (innerWidth >= 1200 && innerWidth < 1440) {
                            return 270;
                        } else if (innerWidth >= 1440) {
                            return 306;
                        }
                    }}
                    height={() => {
                        if (innerWidth >= 1200 && innerWidth < 1400) {
                            return 490;
                        } else if (innerWidth >= 1400) {
                            return 554;
                        }
                    }}
                />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity02,
                }}
                right={() => {
                    if (innerWidth >= 1200 && innerWidth < 1440) {
                        return 320;
                    } else if (innerWidth >= 1440) {
                        return 353;
                    }
                }}
                transform={objTransform02}
                isShow={isShow}
            >
                <Image
                    src={bgImages04.Image02}
                    width={() => {
                        if (innerWidth >= 1200 && innerWidth < 1440) {
                            return 177;
                        } else if (innerWidth >= 1440) {
                            return 201;
                        }
                    }}
                    height={() => {
                        if (innerWidth >= 1200 && innerWidth < 1400) {
                            return 251;
                        } else if (innerWidth >= 1400) {
                            return 285;
                        }
                    }}
                />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity03,
                }}
                right={() => {
                    if (innerWidth >= 1200 && innerWidth < 1440) {
                        return 54;
                    } else if (innerWidth >= 1440) {
                        return 68;
                    }
                }}
                transform={objTransform03}
                isShow={isShow}
            >
                <Image
                    src={bgImages04.Image03}
                    width={() => {
                        if (innerWidth >= 1200 && innerWidth < 1440) {
                            return 269;
                        } else if (innerWidth >= 1440) {
                            return 305;
                        }
                    }}
                    height={() => {
                        if (innerWidth >= 1200 && innerWidth < 1400) {
                            return 196;
                        } else if (innerWidth >= 1400) {
                            return 222;
                        }
                    }}
                />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity04,
                }}
                right={() => {
                    if (innerWidth >= 1200 && innerWidth < 1440) {
                        return 359;
                    } else if (innerWidth >= 1440) {
                        return 397;
                    }
                }}
                transform={objTransform04}
                isShow={isShow}
            >
                <Image
                    src={bgImages04.Image04}
                    width={() => {
                        if (innerWidth >= 1200 && innerWidth < 1440) {
                            return 138;
                        } else if (innerWidth >= 1440) {
                            return 157;
                        }
                    }}
                    height={() => {
                        if (innerWidth >= 1200 && innerWidth < 1400) {
                            return 117;
                        } else if (innerWidth >= 1400) {
                            return 133;
                        }
                    }}
                />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity05,
                }}
                right={() => {
                    if (innerWidth >= 1200 && innerWidth < 1440) {
                        return 176;
                    } else if (innerWidth >= 1440) {
                        return 208;
                    }
                }}
                transform={objTransform05}
                isShow={isShow}
            >
                <Image
                    src={bgImages04.Image05}
                    width={() => {
                        if (innerWidth >= 1200 && innerWidth < 1440) {
                            return 96;
                        } else if (innerWidth >= 1440) {
                            return 109;
                        }
                    }}
                    height={() => {
                        if (innerWidth >= 1200 && innerWidth < 1400) {
                            return 130;
                        } else if (innerWidth >= 1400) {
                            return 148;
                        }
                    }}
                />
            </ComponentWrap>
        </>
    );
};

export default BgComponent04;
