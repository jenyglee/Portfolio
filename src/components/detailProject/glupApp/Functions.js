import React, { useState } from 'react'
import styled from 'styled-components'
import {glupAppSources} from "../../../images"

const ContentWrap = styled.div`
`
const FunctionImageWrap = styled.div`
    width: 100%;
    /* background-color: red; */
`
const FunctionImage = styled.img`
    width: 100%;
`

const Functions = ({}) => {
    return (
        <ContentWrap>
            <FunctionImageWrap>
                <FunctionImage src={glupAppSources.function01} />
            </FunctionImageWrap>
            <FunctionImageWrap>
                <FunctionImage src={glupAppSources.function02} />
            </FunctionImageWrap>
            <FunctionImageWrap>
                <FunctionImage src={glupAppSources.function03} />
            </FunctionImageWrap>
            <FunctionImageWrap>
                <FunctionImage src={glupAppSources.function04} />
            </FunctionImageWrap>
        </ContentWrap>
    )
}

export default Functions;