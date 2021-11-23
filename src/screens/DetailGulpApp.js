import React, { useEffect } from 'react'
import styled from 'styled-components'
import Title from '../components/detailProject/Title'
import MainVisual from '../components/detailProject/MainVisual'
import Accordion from '../components/detailProject/Accodion'

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MainWrap = styled.main`
    min-width: 1200px;
    padding: 260px 20px 0;
    @media ${({theme})=> theme.size1200}{
        min-width: 960px;
        padding: 260px 20px 0;
    }
    @media ${({theme})=> theme.size960}{
        min-width: 768px;
        padding: 190px 20px 0;
    }
    @media ${({theme})=> theme.size768}{
        min-width: 568px;
        padding: 190px 20px 0;
    }
    @media ${({theme})=> theme.size568}{
        min-width: 320px;
        padding: 105px 20px 0;
    }
`

const DetailGulpApp = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    },[])

    return (
        <Wrap>
            <MainWrap>
                <Title number="01" title="어플리케이션" titlePoint="꿀꺽" startDate="202108" endDate="202112" />
                <MainVisual />
                <Accordion number="01" title="View Flow" detailNumber="1" />
                <Accordion number="02" title="WorkPlan" detailNumber="2" />
                <Accordion number="03" title="Functions" detailNumber="3" />
                <Accordion number="04" title="WorkIssue" detailNumber="4" />
                <Accordion number="05" title="Review" detailNumber="5" />
                <Accordion number="06" title="Mission" detailNumber="6" />
            </MainWrap>
        </Wrap>
    )
}

export default DetailGulpApp;