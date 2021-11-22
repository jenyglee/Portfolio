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
                <FunctionImage src={glupAppSources.pcFunction01} />
            </FunctionImageWrap>
            <FunctionImageWrap>
                <FunctionImage src={glupAppSources.pcFunction02} />
            </FunctionImageWrap>
            <FunctionImageWrap>
                <FunctionImage src={glupAppSources.pcFunction03} />
            </FunctionImageWrap>
            <FunctionImageWrap>
                <FunctionImage src={glupAppSources.pcFunction04} />
            </FunctionImageWrap>
            <FunctionImageWrap>
                <FunctionImage src={glupAppSources.pcFunction05} />
            </FunctionImageWrap>
            <FunctionImageWrap>
                <FunctionImage src={glupAppSources.pcFunction06} />
            </FunctionImageWrap>
        </ContentWrap>
    )
}

export default Functions;