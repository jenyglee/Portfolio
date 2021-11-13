import React, { useState } from 'react'
import styled from 'styled-components'
import { icons } from '../../images'
import CommonDetail from "./glupApp/CommonDetail"


const AccordionWrap = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const BtnWrap = styled.div`
    font-family: "BLUDHAVEN";
    width: 100%;
    padding: 30px 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TitleWrap = styled.div`
    font-size: 20px;
    display: flex;
`

const Number = styled.p`
    margin-right: 70px;
`
const Name = styled.p``

const ArrowImageWrap = styled.div`
    width:23px;
    height: 27px;
    position: relative;
`
const ArrowImage = styled.img`
    width: 100%;
    height: 100%;
    transform: ${({isVisibleDetail})=> isVisibleDetail ? `rotate(180deg)` : `rotate(0deg)`};
`

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({theme})=> theme.detailLine};
`
const Accordion = ({number, title, detailNumber}) => {
    const [isVisibleDetail, setIsVisibleDetail] = useState(false)
    return (
    <AccordionWrap>
        <BtnWrap onClick={()=>{
            setIsVisibleDetail(!isVisibleDetail)
        }}>
            <TitleWrap>
                <Number>/{number}</Number>
                <Name>{title}</Name>
            </TitleWrap>
            <ArrowImageWrap>
                <ArrowImage src={icons.accordionArrow} isVisibleDetail={isVisibleDetail} />
            </ArrowImageWrap>
        </BtnWrap>
        { isVisibleDetail ? <CommonDetail detailNumber={detailNumber} /> : null }
        <Line />
    </AccordionWrap>
    )
}

export default Accordion;