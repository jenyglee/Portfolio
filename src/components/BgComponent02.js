import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages02 } from "../images";

const ComponentWrap = styled.div`
    position: fixed;
    transition: 0.5s;
    top: ${({ transform }) => `calc(50% + ${transform}px)`};
    transform: translateY(-50%);
`;

const Image = styled.img``;

const BgComponent02 = ({ isShow }) => {
    const [objTransform01, setObjTransform01] = useState(68);
    const [objOpacity01, setObjOpacity01] = useState(0);

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjTransform01(18);
                setObjOpacity01(1);
            }, 0);
        } else {
            setTimeout(() => {
                setObjTransform01(68);
                setObjOpacity01(0);
            }, 0);
        }
    }, [isShow]);
    return (
        <>
            <ComponentWrap
                style={{
                    opacity: objOpacity01,
                    right: 210,
                }}
                transform={objTransform01}
                isShow={isShow}
            >
                <Image
                    src={bgImages02.Image01}
                    style={{
                        width: 616,
                        height: 589,
                    }}
                />
            </ComponentWrap>
        </>
    );
};

export default BgComponent02;
