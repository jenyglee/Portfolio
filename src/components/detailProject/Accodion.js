import React, { useState, useEffect } from 'react'
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
    @media ${({theme})=> theme.size768}{
        padding: 20px 0;
    }
`

const TitleWrap = styled.div`
    font-size: 20px;
    display: flex;
    @media ${({theme})=> theme.size568}{
        font-size: 16px;
    }
`

const Number = styled.p`
    margin-right: 70px;
    @media ${({theme})=> theme.size768}{
        margin-right: 16px;
    }
`
const Name = styled.p``

const ArrowImageWrap = styled.div`
    width:23px;
    height: 27px;
    position: relative;
    @media ${({theme})=> theme.size568}{
        width:16px;
        height: 17px;
    }
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

const CommonDetailWrap = styled.div`
    width: 1200px;
    @media ${({theme})=> theme.size1200}{
        width: 960px;
    }
    @media ${({theme})=> theme.size960}{
        width: 768px;
    }
    @media ${({theme})=> theme.size768}{
        width: 568px;
    }
    @media ${({theme})=> theme.size568}{
        width: 320px;
    }
`

const Accordion = ({number, title, detailNumber}) => {
    const [isVisibleDetail, setIsVisibleDetail] = useState(false)
    const [isSize768, setIsSize768] = useState(false)

    useEffect(()=>{
        window.addEventListener("resize", onResize);
        return ()=>{
            window.removeEventListener("resize", onResize);
        }
    }, [])

    const onResize = ()=>{
        if(window.innerWidth <= 768){
            setIsSize768(true);
        }else {
            setIsSize768(false);
        }
    }

    return (
    <AccordionWrap>
        {number === "01" ? <Line /> : null }
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
        <CommonDetailWrap isVisibleDetail={isVisibleDetail}>
            { isVisibleDetail ? <CommonDetail detailNumber={detailNumber} isSize768={isSize768} /> : null }
        </CommonDetailWrap>
        <Line />
    </AccordionWrap>
    )
}

export default Accordion;