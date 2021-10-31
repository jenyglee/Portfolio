import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
    width: 200px;
    height: 300px;
    position: fixed;
    right: 300px;
    transition: 0.5s;
`;

const BgComponent03 = ({ isShow }) => {
    const [objTransform01, setObjTransform01] = useState(200);
    const [objTransform02, setObjTransform02] = useState(240);
    const [objTransform03, setObjTransform03] = useState(100);
    const [objOpacity01, setObjOpacity01] = useState(0);
    const [objOpacity02, setObjOpacity02] = useState(0);
    const [objOpacity03, setObjOpacity03] = useState(0);
    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjTransform01(objTransform01 + 50);
                setObjOpacity01(1);
            }, 0);
            setTimeout(() => {
                setObjTransform02(objTransform02 + 50);
                setObjOpacity02(1);
            }, 100);
            setTimeout(() => {
                setObjTransform03(objTransform03 + 50);
                setObjOpacity03(1);
            }, 200);
        } else {
            setTimeout(() => {
                setObjTransform01(objTransform01 - 50);
                setObjOpacity01(0);
            }, 0);
            setTimeout(() => {
                setObjTransform02(objTransform02 - 50);
                setObjOpacity02(0);
            }, 100);
            setTimeout(() => {
                setObjTransform03(objTransform03 - 50);
                setObjOpacity03(0);
            }, 200);
        }
    }, [isShow]);
    return (
        <>
            <StyledComponent
                style={{
                    bottom: objTransform01,
                    backgroundColor: "pink",
                    opacity: objOpacity01,
                    right: 300,
                }}
                isShow={isShow}
                objTransform01={objTransform01}
                objOpacity01={objOpacity01}
            />
            <StyledComponent
                style={{
                    bottom: objTransform02,
                    backgroundColor: "sandybrown",
                    opacity: objOpacity02,
                    right: 100,
                }}
                isShow={isShow}
                objTransform02={objTransform02}
                objOpacity02={objOpacity02}
            />
            <StyledComponent
                style={{
                    bottom: objTransform03,
                    backgroundColor: "steelblue",
                    opacity: objOpacity03,
                    right: 400,
                }}
                isShow={isShow}
                objTransform02={objTransform02}
                objOpacity02={objOpacity02}
            />
        </>
    );
};

export default BgComponent03;
