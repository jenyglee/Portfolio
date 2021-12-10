import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages04 } from "./../images";

const ComponentWrap = styled.div`
    position: fixed;
    transition: 0.5s;
    top: ${({ transform }) => `calc(50% + ${transform}px)`};
    right: ${({ right }) => right}px;
    transform: translateY(-50%);
    /* transform: ${({ transform }) => `calc(50% + ${transform}px)`};  */
    /* display: flex; */
    /* align-items: center; */
`;

const Image = styled.img`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`;

// const imageTops = [
//     0,161,-107,-238,93
// ]

const BgComponent04 = ({ isShow }) => {
    const innerWidth = window.innerWidth;
    const [objTransform01, setObjTransform01] = useState(50);
    const [objTransform02, setObjTransform02] = useState(211);
    const [objTransform03, setObjTransform03] = useState(-57);
    const [objTransform04, setObjTransform04] = useState(-188);
    const [objTransform05, setObjTransform05] = useState(146);
    const [objOpacity01, setObjOpacity01] = useState(0);
    const [objOpacity02, setObjOpacity02] = useState(0);
    const [objOpacity03, setObjOpacity03] = useState(0);
    const [objOpacity04, setObjOpacity04] = useState(0);
    const [objOpacity05, setObjOpacity05] = useState(0);
    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjTransform01(0);
                setObjOpacity01(1);
            }, 0);
            setTimeout(() => {
                setObjTransform02(161);
                setObjOpacity02(1);
            }, 0);
            setTimeout(() => {
                setObjTransform03(-107);
                setObjOpacity03(1);
            }, 0);
            setTimeout(() => {
                setObjTransform04(-238);
                setObjOpacity04(1);
            }, 0);
            setTimeout(() => {
                setObjTransform05(96);
                setObjOpacity05(1);
            }, 0);
        } else {
            setTimeout(() => {
                setObjTransform01(50);
                setObjOpacity01(0);
            }, 0);
            setTimeout(() => {
                setObjTransform02(211);
                setObjOpacity02(0);
            }, 0);
            setTimeout(() => {
                setObjTransform03(-57);
                setObjOpacity03(0);
            }, 0);
            setTimeout(() => {
                setObjTransform04(-188);
                setObjOpacity04(0);
            }, 0);
            setTimeout(() => {
                setObjTransform05(146);
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
                right={531}
                transform={objTransform01}
                isShow={isShow}
            >
                <Image src={bgImages04.Image01} width={306} height={554} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity02,
                }}
                right={353}
                transform={objTransform02}
                isShow={isShow}
            >
                <Image src={bgImages04.Image02} width={201} height={285} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity03,
                }}
                right={68}
                transform={objTransform03}
                isShow={isShow}
            >
                <Image src={bgImages04.Image03} width={305} height={222} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity04,
                }}
                right={397}
                transform={objTransform04}
                isShow={isShow}
            >
                <Image src={bgImages04.Image04} width={157} height={133} />
            </ComponentWrap>
            <ComponentWrap
                style={{
                    opacity: objOpacity05,
                }}
                right={208}
                transform={objTransform05}
                isShow={isShow}
            >
                <Image src={bgImages04.Image05} width={109} height={148} />
            </ComponentWrap>
        </>
    );
};

export default BgComponent04;
