import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages01 } from "../images";

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

const BgComponent01 = ({ isShow }) => {
    const [objs, setObjs] = useState([
        { translateY: 50, width: 398, height: 535, right: 350, opacity: 0 },
    ]);

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: 0,
                        width: 398,
                        height: 535,
                        right: 350,
                        opacity: 1,
                    },
                ]);
            }, 0);
        } else {
            setTimeout(() => {
                setObjs([
                    {
                        translateY: 50,
                        width: 398,
                        height: 535,
                        right: 350,
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
                            src={bgImages01[index]}
                            width={obj.width}
                            height={obj.height}
                        />
                    </ComponentWrap>
                );
            })}
        </>
    );
};

export default BgComponent01;
