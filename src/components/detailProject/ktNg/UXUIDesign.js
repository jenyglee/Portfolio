import React, { useState } from 'react'
import styled from 'styled-components'
import UXUIDesignSection from './UXUIDesignSection'
import { ktNgSources } from '../../../images'

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

const UXUIDesign = () => {
    return (
        <ContentWrap>
            <Container>
                <UXUIDesignSection 
                    img={ktNgSources.UXUIDesign01} 
                    title="매거진과 스토어로" 
                    pointTitle=" 컨텐츠 분리" 
                    description=
                    "사용자 목적에 따라 컨텐츠를 크게 두가지로 나누어, 복잡한 UX를 정리, 신규 사용자의 진입장벽 저하를 기대. 매거진/스토어는 상단 네비게이션을 통해 언제든지 자유롭게 이동이 가능." 
                />
                <UXUIDesignSection 
                    img={ktNgSources.UXUIDesign02} 
                    title="쇼핑 서비스" 
                    pointTitle=" UX 단순화" 
                    description=
                    "상품의 성격에 따라 구성되었던 랭킹, 업데이트, 타임세일, 단독 상품을 접근 우선순위에 따라 나열하여 복잡한 탭 구성 없이 횡스크롤 설계." 
                />
                <UXUIDesignSection 
                    img={ktNgSources.UXUIDesign03} 
                    title="매거진" 
                    pointTitle="컨텐츠 통합" 
                    description=
                    "현재 가장 이슈가 되는 정보를 상단에 노출하고, 컨텐츠의 관심도에 따라 UX를 정리. 좌우 스크롤링을 줄여 접근방식을 통일하였고, ‘더보기’ 버튼을 추가하여 편하게 냐리며 볼 수 있도록 설계. 런위이는 한 스틸컷이 아닌 무드보드 형태로 쇼의 컨셉까지 한눈에 파악할 수 있도록 UX를 재설계" 
                />
            </Container>
        </ContentWrap>
    )
}

export default UXUIDesign;