import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages06 } from "../images";

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

const BgComponent06 = ({ isShow }) => {
    const [objs, setObjs] = useState([
        { translateY: 112, width: 387, height: 640, right: 211, opacity: 0 },
        { translateY: 48, width: 387, height: 640, right: 382, opacity: 0 },
    ]);

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: 62,
                        width: 387,
                        height: 640,
                        right: 211,
                        opacity: 1,
                    },
                    {
                        translateY: -2,
                        width: 387,
                        height: 640,
                        right: 382,
                        opacity: 1,
                    },
                ]);
            }, 0);
        } else {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: 112,
                        width: 387,
                        height: 640,
                        right: 211,
                        opacity: 0,
                    },
                    {
                        translateY: 48,
                        width: 387,
                        height: 640,
                        right: 382,
                        opacity: 0,
                    },
                ]);
            }, 0);
        }
    }, [isShow]);
    return (
        <>
            {objs.map((obj, index) => {
                return (
                    <ComponentWrap
                        style={{
                            opacity: obj.opacity,
                        }}
                        right={obj.right}
                        transform={obj.translateY}
                        isShow={isShow}
                    >
                        <Image
                            src={bgImages06[index]}
                            width={obj.width}
                            height={obj.height}
                        />
                    </ComponentWrap>
                );
            })}
        </>
    );
};

export default BgComponent06;
