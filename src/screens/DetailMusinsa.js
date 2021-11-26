import React, { useEffect } from 'react'
import styled from 'styled-components'
import Title from '../components/detailProject/Title'
import MainVisualMusinsa from '../components/detailProject/musinsa/MainVisualMusinsa'
import Accordion from '../components/detailProject/Accodion'

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${({theme})=> theme.size1200}{
        max-width: 960px;
    }
    @media ${({theme})=> theme.size960}{
        max-width: 768px;
    }
    @media ${({theme})=> theme.size768}{
        max-width: 568px;
    }
    @media ${({theme})=> theme.size568}{
        max-width: 320px;
    }
`

const MainWrap = styled.main`
    width: 100%;
    padding-top: 260px;
    padding-left: 20px;
    padding-right: 20px;
    @media ${({theme})=> theme.size960}{
        padding-top: 190px;
    }
    @media ${({theme})=> theme.size568}{
        padding-top: 105px;
    }
`

const DetailMusinsa = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    },[])

    return (
        <Wrap>
            <MainWrap>
                <Title number="03" title="컨셉디자인 무신사" titlePoint="" startDate="202108" endDate="202112" />
                <MainVisualMusinsa />
                <Accordion projectNumber="03" number="01" title="UX/UI Design" detailNumber="1" />
                <Accordion projectNumber="03" number="02" title="Component" detailNumber="2" />
            </MainWrap>
        </Wrap>
    )
}

export default DetailMusinsa;