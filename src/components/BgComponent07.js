import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { bgImages08 } from "images"

const ComponentWrap = styled.div`
    position: fixed;
    transition: 0.5s;
    top: ${({ transform }) => `calc(50% + ${transform}px)`};
    right: ${({ right }) => right}px;
    transform: translateY(-50%);
`

const Image = styled.img`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`

const BgComponent07 = ({ isShow }) => {
    const [objs, setObjs] = useState([
        { translateY: 107, width: 821, height: 538, right: 43, opacity: 0 },
    ])

    useEffect(() => {
        if (isShow) {
            setObjs([
                {
                    translateY: 57,
                    width: 821,
                    height: 538,
                    right: 43,
                    opacity: 1,
                },
            ])
        } else {
            setObjs([
                {
                    translateY: 107,
                    width: 821,
                    height: 538,
                    right: 43,
                    opacity: 0,
                },
            ])
        }
    }, [isShow])
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
                        <Image src={bgImages08[index]} width={obj.width} height={obj.height} />
                    </ComponentWrap>
                )
            })}
        </>
    )
}

export default BgComponent07
