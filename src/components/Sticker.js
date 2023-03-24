import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { sticker } from "images"

const StickerWrap = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ textColor }) => textColor};
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotate(-10deg);
`
const StickerText = styled.p`
    font-family: ${({ strong }) => (strong ? "AppleSDGothicNeoB" : "AppleSDGothicNeoL")};
    font-size: 20px;
`

const Sticker = ({ data }) => {
    return (
        <StickerWrap bgColor={data.bgColor} textColor={data.color}>
            <div>
                {data.content.map((item, index) => (
                    <StickerText key={index} strong={item.strong}>
                        {item.text}
                    </StickerText>
                ))}
            </div>
        </StickerWrap>
    )
}

export default Sticker
