import React, { useState } from 'react'
import styled from 'styled-components'
import ViewFlow from './ViewFlow'
import WorkPlan from './WorkPlan'
import Functions from './Functions'
import WorkIssue from './WorkIssue'
import Review from './Review'
import Mission from './Mission'

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CommonDetail = ({detailNumber, isSize768}) => {
    return (
    <DetailContainer>
        {detailNumber === "1" ? <ViewFlow /> : null}
        {detailNumber === "2" ? <WorkPlan /> : null}
        {detailNumber === "3" ? <Functions isSize768={isSize768} /> : null}
        {detailNumber === "4" ? <WorkIssue /> : null}
        {detailNumber === "5" ? <Review /> : null}
        {detailNumber === "6" ? <Mission isSize768={isSize768} /> : null}
    </DetailContainer>
    )
}

export default CommonDetail;