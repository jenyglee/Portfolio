import React, { useState } from 'react'
import styled from 'styled-components'
import ViewFlow from './ViewFlow'
import WorkPlan from './WorkPlan'
import Functions from './Functions'

const DetailContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CommonDetail = ({detailNumber}) => {
    return (
    <DetailContainer>
        {detailNumber === "1" ? <ViewFlow /> : null}
        {detailNumber === "2" ? <WorkPlan /> : null}
        {detailNumber === "3" ? <Functions /> : null}
    </DetailContainer>
    )
}

export default CommonDetail;