import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages07 } from "../images";

const ComponentWrap = styled.div`
    position: fixed;
    transition: 0.5s;
    top: ${({ transform }) => `calc(50% + ${transform}px)`};
    transform: translateY(-50%);
`;

const Image = styled.img`
    width: 387px;
    height: 640px;
`;

const BgComponent07 = ({ isShow }) => {
    const [objTransform01, setObjTransform01] = useState(112);
    const [objTransform02, setObjTransform02] = useState(48);
    const [objOpacity01, setObjOpacity01] = useState(0);
    const [objOpacity02, setObjOpacity02] = useState(0);

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjTransform01(62);
                setObjOpacity01(1);
            }, 0);
            setTimeout(() => {
                setObjTransform02(-2);
                setObjOpacity02(1);
            }, 100);
        } else {
            setTimeout(() => {
                setObjTransform01(112);
                setObjOpacity01(0);
            }, 0);
            setTimeout(() => {
                setObjTransform02(48);
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
                <Image src={bgImages07.Image02} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity01,
                    right: 382,
                }}
                transform={objTransform01}
                isShow={isShow}
            >
                <Image src={bgImages07.Image01} />
            </ComponentWrap>
        </>
    );
};

export default BgComponent07;
