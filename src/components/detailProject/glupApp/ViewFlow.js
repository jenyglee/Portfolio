import React, { useState } from 'react'
import styled from 'styled-components'
import {glupAppSources} from "./../../../images"

const ContentWrap = styled.div`
    margin: 30px 0 85px 0;
`

const VideoWrap = styled.div`
    width: 272px;
    height: 572px;
`
const Video = styled.img`
    width: 100%;
`

const ViewFlow = ({}) => {
    return (
        <ContentWrap>
            <VideoWrap>
                <Video src={glupAppSources.video} />
            </VideoWrap>
        </ContentWrap>
    )
}

export default ViewFlow;