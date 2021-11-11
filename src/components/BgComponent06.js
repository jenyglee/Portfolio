import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages06 } from "../images";

const ComponentWrap = styled.div`
    position: fixed;
    transition: 0.5s;
    top: ${({ transform }) => `calc(50% + ${transform}px)`};
    transform: translateY(-50%);
`;

const Image = styled.img``;

const BgComponent06 = ({ isShow }) => {
    const [objTransform01, setObjTransform01] = useState(66);
    const [objOpacity01, setObjOpacity01] = useState(0);
    const [objTransform02, setObjTransform02] = useState(-5);
    const [objOpacity02, setObjOpacity02] = useState(0);

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
        } else {
            setTimeout(() => {
                setObjTransform01(objTransform01 + 50);
                setObjOpacity01(0);
            }, 0);
            setTimeout(() => {
                setObjTransform02(objTransform02 + 50);
                setObjOpacity02(0);
            }, 100);
        }
    }, [isShow]);
    return (
        <>
            <ComponentWrap
                style={{
                    opacity: objOpacity02,
                    right: 211,
                }}
                transform={objTransform02}
                isShow={isShow}
            >
                <Image
                    src={bgImages06.Image02}
                    style={{
                        width: 387,
                        height: 640,
                    }}
                />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity01,
                    right: 382,
                }}
                transform={objTransform01}
                isShow={isShow}
            >
                <Image
                    src={bgImages06.Image01}
                    style={{
                        width: 387,
                        height: 640,
                    }}
                />
            </ComponentWrap>
        </>
    );
};

export default BgComponent06;
