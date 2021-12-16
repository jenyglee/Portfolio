import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages09 } from "../images";

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

const BgComponent09 = ({ isShow }) => {
    const [objs, setObjs] = useState([
        { translateY: 270, width: 652, height: 1101, right: 100, opacity: 0 },
    ]);

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: 220,
                        width: 652,
                        height: 1101,
                        right: 100,
                        opacity: 1,
                    },
                ]);
            }, 0);
        } else {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: 270,
                        width: 652,
                        height: 1101,
                        right: 100,
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
                            src={bgImages09[index]}
                            width={obj.width}
                            height={obj.height}
                        />
                    </ComponentWrap>
                );
            })}
        </>
    );
};

export default BgComponent09;
