import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages03 } from "./../images";

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

const BgComponent03 = ({ isShow }) => {
    const innerWidth = window.innerWidth;
    const [objTransform01, setObjTransform01] = useState(39);
    const [objTransform02, setObjTransform02] = useState(2);
    const [objTransform03, setObjTransform03] = useState(179);
    const [objTransform04, setObjTransform04] = useState(-97);
    const [objTransform05, setObjTransform05] = useState(217);
    const [objTransform06, setObjTransform06] = useState(-59);
    const [objOpacity01, setObjOpacity01] = useState(0);
    const [objOpacity02, setObjOpacity02] = useState(0);
    const [objOpacity03, setObjOpacity03] = useState(0);
    const [objOpacity04, setObjOpacity04] = useState(0);
    const [objOpacity05, setObjOpacity05] = useState(0);
    const [objOpacity06, setObjOpacity06] = useState(0);
    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjTransform01(-11);
                setObjOpacity01(1);
            }, 0);
            setTimeout(() => {
                setObjTransform02(-48);
                setObjOpacity02(1);
            }, 0);
            setTimeout(() => {
                setObjTransform03(129);
                setObjOpacity03(1);
            }, 0);
            setTimeout(() => {
                setObjTransform04(-147);
                setObjOpacity04(1);
            }, 0);
            setTimeout(() => {
                setObjTransform05(167);
                setObjOpacity05(1);
            }, 0);
            setTimeout(() => {
                setObjTransform06(-109);
                setObjOpacity06(1);
            }, 0);
        } else {
            setTimeout(() => {
                setObjTransform01(39);
                setObjOpacity01(0);
            }, 0);
            setTimeout(() => {
                setObjTransform02(2);
                setObjOpacity02(0);
            }, 0);
            setTimeout(() => {
                setObjTransform03(179);
                setObjOpacity03(0);
            }, 0);
            setTimeout(() => {
                setObjTransform04(-97);
                setObjOpacity04(0);
            }, 0);
            setTimeout(() => {
                setObjTransform05(217);
                setObjOpacity05(0);
            }, 0);
            setTimeout(() => {
                setObjTransform06(-59);
                setObjOpacity06(0);
            }, 0);
        }
    }, [isShow]);

    return (
        <>
            <ComponentWrap
                style={{
                    opacity: objOpacity01,
                }}
                right={400}
                transform={objTransform01}
                isShow={isShow}
            >
                <Image src={bgImages03.Image01} width={233} height={193} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity02,
                }}
                right={837}
                transform={objTransform02}
                isShow={isShow}
            >
                <Image src={bgImages03.Image02} width={56} height={71} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity03,
                }}
                right={699}
                transform={objTransform03}
                isShow={isShow}
            >
                <Image src={bgImages03.Image03} width={56} height={71} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity04,
                }}
                right={614}
                transform={objTransform04}
                isShow={isShow}
            >
                <Image src={bgImages03.Image04} width={56} height={71} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity05,
                }}
                right={367}
                transform={objTransform05}
                isShow={isShow}
            >
                <Image src={bgImages03.Image05} width={56} height={71} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity06,
                }}
                right={222}
                transform={objTransform06}
                isShow={isShow}
            >
                <Image src={bgImages03.Image06} width={56} height={71} />
            </ComponentWrap>
        </>
    );
};

export default BgComponent03;
