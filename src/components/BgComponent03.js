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
    const [objs, setObjs] = useState([
        { translateY: 39, width: 233, height: 193, right: 400, opacity: 0 },
        { translateY: 2, width: 56, height: 71, right: 837, opacity: 0 },
        { translateY: 179, width: 56, height: 71, right: 699, opacity: 0 },
        { translateY: -97, width: 56, height: 71, right: 614, opacity: 0 },
        { translateY: 217, width: 56, height: 71, right: 367, opacity: 0 },
        { translateY: -59, width: 56, height: 71, right: 222, opacity: 0 },
    ]);
    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: -11,
                        width: 233,
                        height: 193,
                        right: 400,
                        opacity: 1,
                    },
                    {
                        translateY: -48,
                        width: 56,
                        height: 71,
                        right: 837,
                        opacity: 1,
                    },
                    {
                        translateY: 129,
                        width: 56,
                        height: 71,
                        right: 699,
                        opacity: 1,
                    },
                    {
                        translateY: -147,
                        width: 56,
                        height: 71,
                        right: 614,
                        opacity: 1,
                    },
                    {
                        translateY: 167,
                        width: 56,
                        height: 71,
                        right: 367,
                        opacity: 1,
                    },
                    {
                        translateY: -109,
                        width: 56,
                        height: 71,
                        right: 222,
                        opacity: 1,
                    },
                ]);
            }, 0);
        } else {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: 39,
                        width: 233,
                        height: 193,
                        right: 400,
                        opacity: 0,
                    },
                    {
                        translateY: 2,
                        width: 56,
                        height: 71,
                        right: 837,
                        opacity: 0,
                    },
                    {
                        translateY: 179,
                        width: 56,
                        height: 71,
                        right: 699,
                        opacity: 0,
                    },
                    {
                        translateY: -97,
                        width: 56,
                        height: 71,
                        right: 614,
                        opacity: 0,
                    },
                    {
                        translateY: 217,
                        width: 56,
                        height: 71,
                        right: 367,
                        opacity: 0,
                    },
                    {
                        translateY: -59,
                        width: 56,
                        height: 71,
                        right: 222,
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
                            src={bgImages03[index]}
                            width={obj.width}
                            height={obj.height}
                        />
                    </ComponentWrap>
                );
            })}
        </>
    );
};

export default BgComponent03;
