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
    const [objs, setObjs] = useState([
        { translateY: 50, width: 306, height: 554, right: 531, opacity: 0 },
        { translateY: 211, width: 201, height: 285, right: 353, opacity: 0 },
        { translateY: -57, width: 305, height: 222, right: 68, opacity: 0 },
        { translateY: -188, width: 157, height: 133, right: 397, opacity: 0 },
        { translateY: 146, width: 109, height: 148, right: 208, opacity: 0 },
    ]);

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: 0,
                        width: 306,
                        height: 554,
                        right: 531,
                        opacity: 1,
                    },
                    {
                        translateY: 161,
                        width: 201,
                        height: 285,
                        right: 353,
                        opacity: 1,
                    },
                    {
                        translateY: -107,
                        width: 305,
                        height: 222,
                        right: 68,
                        opacity: 1,
                    },
                    {
                        translateY: -238,
                        width: 157,
                        height: 133,
                        right: 397,
                        opacity: 1,
                    },
                    {
                        translateY: 96,
                        width: 109,
                        height: 148,
                        right: 208,
                        opacity: 1,
                    },
                ]);
            }, 0);
        } else {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: 50,
                        width: 306,
                        height: 554,
                        right: 531,
                        opacity: 0,
                    },
                    {
                        translateY: 211,
                        width: 201,
                        height: 285,
                        right: 353,
                        opacity: 0,
                    },
                    {
                        translateY: -57,
                        width: 305,
                        height: 222,
                        right: 68,
                        opacity: 0,
                    },
                    {
                        translateY: -188,
                        width: 157,
                        height: 133,
                        right: 397,
                        opacity: 0,
                    },
                    {
                        translateY: 146,
                        width: 109,
                        height: 148,
                        right: 208,
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
                            src={bgImages04[index]}
                            width={obj.width}
                            height={obj.height}
                        />
                    </ComponentWrap>
                );
            })}
        </>
    );
};

export default BgComponent04;
