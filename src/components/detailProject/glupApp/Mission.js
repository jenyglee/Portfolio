import React, { useState } from 'react'
import styled from 'styled-components'
import { pcGlupAppMission, moGlupAppMission } from "../../../images"

const ContentWrap = styled.div`
    margin: 35px 20px 50px;
    @media ${({theme}) => theme.size1200}{
        max-width: 920px;
    }
    @media ${({theme}) => theme.size960}{
        max-width: 768px;
    }
    @media ${({theme}) => theme.size768}{
        max-width: 568px;
    }
    @media ${({theme}) => theme.size568}{
        max-width: 320px;
    }
`

const DescriptionWrap = styled.div`
    width: 920px;
    display: flex;
    flex-flow: row wrap;
    @media ${({theme}) => theme.size1200}{
        width: 920px;
    }
    @media ${({theme}) => theme.size960}{
        width: 728px;
        font-size: 18px;
    }
    @media ${({theme}) => theme.size768}{
        width: 528px;
        font-size: 16px;
    }
    @media ${({theme}) => theme.size568}{
        width: 280px;
        font-size: 13px;
    }
`

const Description = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
    line-height: 26px;
    word-break: keep-all;
    display: block;
    @media ${({theme}) => theme.size960}{
        font-size: 18px;
    }
    @media ${({theme}) => theme.size768}{
        font-size: 16px;
    }
    @media ${({theme}) => theme.size568}{
        font-size: 13px;
    }
`

const Point = styled.span`
    color: ${({theme})=> theme.gulpAppFrimary};
`

const ImageWrap = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledImage = styled.img`
    margin-bottom: 60px;
    max-width: 857px;
`

const Mission = ({isSize768}) => {
    return (
        <ContentWrap>
            <DescriptionWrap>
                <Description>
                    초기 구현목표는 복용 알람과 더불어 ‘영양제 추천’과 ‘커뮤니티’ 기능이였습니다. 
                </Description>
            </DescriptionWrap>
        <ImageWrap>
            {
                pcGlupAppMission.map((item, index) => {
                    return <StyledImage src={isSize768 ? moGlupAppMission[index] : pcGlupAppMission[index]} isSize768={isSize768} />
                })
            }
        </ImageWrap>
        <DescriptionWrap>
            <Description>
                위 기능들은 아직 경험이 부족이 많이 부족하기 때문에 바로 구현에 들어가기엔 역량이 부족하다고 판단하였고, 
                비슷한 개발 래퍼런스 조사에 버거움이 있어 <Point>추후 고도화 예정</Point>에 있습니다.
            </Description>
        </DescriptionWrap>
        </ContentWrap>
    )
}

export default Mission;