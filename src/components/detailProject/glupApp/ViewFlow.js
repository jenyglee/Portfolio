import React, { useState } from 'react'
import styled from 'styled-components'
import {glupAppSources} from "./../../../images"

const ContentWrap = styled.div`
    margin: 30px 0 85px 0;
    @media ${({ theme }) => theme.size1200} {
        margin: 20px 0 50px 0;
    }
`

const VideoWrap = styled.div`
    width: 272px;
    height: 572px;
    @media ${({ theme }) => theme.size1200} {
        display: block;
        width: 189px;
        height: 398px;
    }
`
const Video = styled.img`
    width: 100%;
`

const ViewFlow = () => {
    return (
        <ContentWrap>
            <VideoWrap>
                <Video src={glupAppSources.video} />
            </VideoWrap>
        </ContentWrap>
    )
}

export default ViewFlow;