import React from 'react'
import styled from 'styled-components'
import Title from '../components/detailProject/Title'
import MainVisual from '../components/detailProject/MainVisual'
import Accordion from '../components/detailProject/Accodion'

const MainWrap = styled.main`
    width: 1200px;
    margin: 0 auto;
    padding-top: 260px;
`

const DetailGulpApp = () => {
    return (
        <MainWrap>
            <Title number="01" title="어플리케이션" titlePoint="꿀꺽" startDate="202108" endDate="202112" />
            <MainVisual />
            <Accordion number="01" title="View Flow" detailNumber="1" />
            <Accordion number="02" title="WorkPlan" detailNumber="2" />
            <Accordion number="03" title="Functions" detailNumber="3" />
        </MainWrap>
    )
}

export default DetailGulpApp;