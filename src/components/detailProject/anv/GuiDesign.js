import React, { useState } from 'react'
import styled from 'styled-components'
import { avnSources } from '../../../images'
import GuiDesignSection from './GuiDesignSection'

const ContentWrap = styled.div`
    width: 100%;
    margin-top: 35px;
    margin-bottom: 90px;
    padding: 0 20px;
    @media ${({ theme }) => theme.size768} {
        margin-bottom: 70px;
        padding: 0;
    }
    @media ${({ theme }) => theme.size568} {
        margin-bottom: 50px;
    }
`
const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const GuiDesign = () => {
    return (
        <ContentWrap>
            <Container>
                <GuiDesignSection 
                    img={avnSources.GuiDesign01} 
                    pointTitle="Cluster MAIN" 
                    title=" GUI" 
                    description="네온 라이트의 입체적인 계단식 디자인으로 운전자와의 감성 상호작용을 더욱 깊이있게 해줍니다." 
                />
                <GuiDesignSection 
                    img={avnSources.GuiDesign02} 
                    pointTitle="AUTONOMOUS" 
                    title=" VEHICLES GUI" 
                    description="앞으로 대중화 될 자율주행 기능을 통하여 경로 설정과 센서감지 시스템으로 주변 환경을 감지하여 GUI로 나타냅니다." 
                />
                <GuiDesignSection 
                    img={avnSources.GuiDesign03} 
                    pointTitle="AVN INFORTAINMENT" 
                    title=" GUI" 
                    description="AVN 영역에 차량 내부 제어 시스템과 더불어 음악, 소셜 컨텐츠 등 미디어 영역을 추가해 인포테이먼트 GUI를 구성하였습니다." 
                />
                <GuiDesignSection 
                    img={avnSources.GuiDesign04} 
                    pointTitle="CLIMATE" 
                    title=" GUI" 
                    description="공조 시스템에서는 운전석과 조수석의 풍향을 각각 3가지의 방향으로 터치하여 시동시킬 수 있도록 직관적인 GUI를 설계하였습니다." 
                />
                <GuiDesignSection 
                    img={avnSources.GuiDesign05} 
                    pointTitle="MUSIC CONTENTS" 
                    title=" UX" 
                    description="뮤직 화면에서는 음악목록, 재생화면, 가사 컨텐츠로 UX를 설계하였고, 커버사진을 통한 배경과 LP판 디자인 컨셉으로 감성적인 GUI를 구성하였습니다." 
                />
                <GuiDesignSection 
                    img={avnSources.GuiDesign06} 
                    pointTitle="MUSIC CONTENTS" 
                    title=" UX" 
                    description="뮤직 화면 내에 재생(>)버튼을 터치하여 해당 뮤직비디오를
                    재생할 수 있습니다.  익숙한 UX 환경으로 편리성을 높였습니다." 
                    isLast
                />
            </Container>
        </ContentWrap>
    )
}

export default GuiDesign;