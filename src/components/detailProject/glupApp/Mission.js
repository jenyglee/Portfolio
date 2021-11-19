import React, { useState } from 'react'
import styled from 'styled-components'
import { glupAppSources } from "../../../images"

const ContentWrap = styled.div`
    padding: 50px 60px;
`
const Description = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
`
const StyledImage = styled.img`
    margin-bottom: 60px;
`

const Mission = ({}) => {
    return (
        <ContentWrap>
            <Description>
                초기 구현목표는 복용 알람과 더불어 ‘영양제 추천’과 ‘커뮤니티’ 기능이였습니다. 
            </Description>
            <StyledImage 
                src={glupAppSources.mission01} 
                style={{
                    width: 857,
                    height: 570,
                }}
            />
            <StyledImage 
                src={glupAppSources.mission02} 
                style={{
                    width: 857,
                    height: 535,
                }}
            />
        </ContentWrap>
    )
}

export default Mission;