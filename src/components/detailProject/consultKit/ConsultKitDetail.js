import React, { useState } from 'react'
import styled from 'styled-components'
import Concept from './Concept'

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ConsultKitDetail = ({detailNumber, isSize768}) => {
    return (
    <DetailContainer>
        {/* <div style={{
            width:1000,
            height: 1000,
            backgroundColor:"red"
        }}> 나는 빡빡이다! </div> */}
        {detailNumber === "1" ? <Concept /> : null}
        {/* {detailNumber === "1" ? <ViewFlow /> : null}
        {detailNumber === "2" ? <WorkPlan /> : null}
        {detailNumber === "3" ? <Functions isSize768={isSize768} /> : null}
        {detailNumber === "4" ? <WorkIssue /> : null}
        {detailNumber === "5" ? <Review /> : null}
        {detailNumber === "6" ? <Mission isSize768={isSize768} /> : null} */}
    </DetailContainer>
    )
}

export default ConsultKitDetail;