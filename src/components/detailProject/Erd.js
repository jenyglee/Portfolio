import { olaSources } from "images"
import React from "react"
import styled from "styled-components"

const ImgWrap = styled.div`
    max-width: 1112px;
    margin-bottom: 60px;
`
const Img = styled.img`
    width: 100%;
`

const Erd = ({ src }) => {
    return (
        <ImgWrap>
            <Img src={src} />
        </ImgWrap>
    )
}

export default Erd
