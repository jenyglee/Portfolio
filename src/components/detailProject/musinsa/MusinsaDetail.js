import React, { useState } from 'react'
import styled from 'styled-components'
import Components from './Components'
import UXUIDesign from './UXUIDesign'

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MusinsaDetail = ({detailNumber, isSize768}) => {
    return (
    <DetailContainer>
        {detailNumber === "1" ? <UXUIDesign /> : null}
        {detailNumber === "2" ? <Components /> : null}
    </DetailContainer>
    )
}

export default MusinsaDetail;