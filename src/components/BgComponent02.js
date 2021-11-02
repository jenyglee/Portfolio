import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages02 } from "../imges";

const ComponentWrap = styled.div`
    position: fixed;
    transition: 0.5s;
    top: ${({ transform }) => `calc(50% + ${transform}px)`};
    transform: translateY(-50%);
`;

const Image = styled.img``;

const BgComponent02 = ({ isShow }) => {
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
            }, 200);
            setTimeout(() => {
                setObjTransform04(objTransform04 - 50);
                setObjOpacity04(1);
            }, 300);
            setTimeout(() => {
                setObjTransform05(objTransform05 - 50);
                setObjOpacity05(1);
            }, 400);
        } else {
            setTimeout(() => {
                setObjTransform01(objTransform01 + 50);
                setObjOpacity01(0);
            }, 0);
            setTimeout(() => {
                setObjTransform02(objTransform02 + 50);
                setObjOpacity02(0);
            }, 100);
            setTimeout(() => {
                setObjTransform03(objTransform03 + 50);
                setObjOpacity03(0);
            }, 200);
            setTimeout(() => {
                setObjTransform04(objTransform04 + 50);
                setObjOpacity04(0);
            }, 300);
            setTimeout(() => {
                setObjTransform05(objTransform05 + 50);
                setObjOpacity05(0);
            }, 400);
        }
    }, [isShow]);
    return (
        <>
            <ComponentWrap
                style={{
                    opacity: objOpacity01,
                    right: 531,
                }}
                transform={objTransform01}
                isShow={isShow}
            >
                <Image
                    src={bgImages02.Image01}
                    style={{
                        width: 306,
                        height: 554,
                    }}
                />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity02,
                    right: 353,
                }}
                transform={objTransform02}
                isShow={isShow}
            >
                <Image
                    src={bgImages02.Image02}
                    style={{
                        width: 201,
                        height: 285,
                    }}
                />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity03,
                    right: 68,
                }}
                transform={objTransform03}
                isShow={isShow}
            >
                <Image
                    src={bgImages02.Image03}
                    style={{
                        width: 305,
                        height: 222,
                    }}
                />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity04,
                    right: 397,
                }}
                transform={objTransform04}
                isShow={isShow}
            >
                <Image
                    src={bgImages02.Image04}
                    style={{
                        width: 157,
                        height: 133,
                    }}
                />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity05,
                    right: 208,
                }}
                transform={objTransform05}
                isShow={isShow}
            >
                <Image
                    src={bgImages02.Image05}
                    style={{
                        width: 109,
                        height: 148,
                    }}
                />
            </ComponentWrap>
        </>
    );
};

export default BgComponent02;
