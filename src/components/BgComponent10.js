import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages10 } from "../images";

const ComponentWrap = styled.div`
    position: fixed;
    transition: 0.5s;
    top: ${({ transform }) => `calc(50% + ${transform}px)`};
    transform: translateY(-50%);
`;

const Image = styled.img``;

const BgComponent10 = ({ isShow }) => {
    const [objTransform01, setObjTransform01] = useState(250);
    const [objOpacity01, setObjOpacity01] = useState(0);

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjTransform01(objTransform01 - 50);
                setObjOpacity01(1);
            }, 0);
        } else {
            setTimeout(() => {
                setObjTransform01(objTransform01 + 50);
                setObjOpacity01(0);
            }, 0);
        }
    }, [isShow]);
    return (
        <>
            <ComponentWrap
                style={{
                    opacity: objOpacity01,
                    right: 180,
                }}
                transform={objTransform01}
                isShow={isShow}
            >
                <Image
                    src={bgImages10.Image01}
                    style={{
                        width: 652,
                        height: 1230,
                    }}
                />
            </ComponentWrap>
        </>
    );
};

export default BgComponent10;