import React, { useState } from 'react'
import styled from 'styled-components'
import { icons } from '../../images'
import Detail01 from "./../detailProject/glupApp/Detail01"


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
`

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({theme})=> theme.detailLine};
`
const Accordion = ({}) => {
    const [isVisibleDetail01, setIsVisibleDetail01] = useState(false)
    return (
    <AccordionWrap>
        <BtnWrap onClick={()=>{
            setIsVisibleDetail01(!isVisibleDetail01)
        }}>
            <TitleWrap>
                <Number>/01</Number>
                <Name>View Flow</Name>
            </TitleWrap>
            <ArrowImageWrap>
                <ArrowImage src={icons.accordionArrow} />
            </ArrowImageWrap>
        </BtnWrap>
        { isVisibleDetail01 ? <Detail01 /> : null }
        <Line />
    </AccordionWrap>
    )
}

export default Accordion;