import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProjectName = styled.ul`
    font-family: "BLUDHAVEN";
    opacity: 1;
    transition: 0.5;
    z-index: 1;
`;

const ProjectItemWrap = styled.div`
    display:block;
    position:relative;
` 

const ProjectItem = styled.a`
    height:100px;
    font-size: 160px;
    opacity: ${({ isHover }) => (isHover ? "1" : "0.3")};
    // transition: all ease-in-out 0.5s 0s;
    transition: 0.5s;
    position:relative;
    
`;

const Project = ({ projectTitle, onEnter, onLeave, sectionId }) => {
    const [transformX, setTrasnformX] = useState(-100);
    const [opacity, setOpacity] = useState(0);
    const [transformXTwo, setTrasnformXTwo] = useState(-100);
    const [opacityTwo, setOpacityTwo] = useState(0);
    const [transformXThree, setTrasnformXThree] = useState(-100);
    const [opacityThree, setOpacityThree] = useState(0);
    useEffect(()=>{
        setTrasnformX(0)
        setTimeout(()=>{
            setTrasnformXTwo(0)
        },100)
        setTimeout(()=>{
            setTrasnformXThree(0)
        },200)
    },[]) 
    // console.log(projectTitle);

    useEffect(()=>{
        projectTitle[0].isHover ? setOpacity(1) : setOpacity(0.3)
        projectTitle[1].isHover ? setOpacityTwo(1) : setOpacityTwo(0.3)
        projectTitle[2].isHover ? setOpacityThree(1) : setOpacityThree(0.3)
    },[projectTitle[0].isHover,projectTitle[1].isHover,projectTitle[2].isHover])


    return (
        <ProjectName>
            {/* {projectTitle.map((item, index) => {
                return (
                    <ProjectItemWrap>
                    <ProjectItem
                        transformX={transformX}
                        key={index}
                        isHover={item.isHover}
                        onMouseEnter={() => {
                            onEnter(item.id, sectionId);
                        }}
                        onMouseLeave={() => {
                            onLeave(item.id, sectionId);
                        }}
                        href="#"
                    >
                        {item.title}
                    </ProjectItem>
                    </ProjectItemWrap>
                );
            })} */}


            <ProjectItemWrap>
             <ProjectItem
                style={{
                    left:transformX,
                    opacity:opacity
                }}
                transformX={transformX}
                isHover={projectTitle[0].isHover}
                onMouseEnter={() => {
                    onEnter(projectTitle[0].id, sectionId);
                }}
                onMouseLeave={() => {
                    onLeave(projectTitle[0].id, sectionId);
                }}
                href="#"
            >
                {projectTitle[0].title}
            </ProjectItem>
            </ProjectItemWrap>
            <ProjectItemWrap>
            <ProjectItem
                style={{
                    left:transformXTwo,
                    opacity:opacityTwo
                }}
                transformX={transformX}
                isHover={projectTitle[1].isHover}
                onMouseEnter={() => {
                    onEnter(projectTitle[1].id, sectionId);
                }}
                onMouseLeave={() => {
                    onLeave(projectTitle[1].id, sectionId);
                }}
                href="#"
            >
                {projectTitle[1].title}
            </ProjectItem>
            </ProjectItemWrap>
            <ProjectItemWrap>
            <ProjectItem
                style={{
                    left:transformXThree,
                    opacity:opacityThree
                }}
                transformX={transformX}
                isHover={projectTitle[2].isHover}
                onMouseEnter={() => {
                    onEnter(projectTitle[2].id, sectionId);
                }}
                onMouseLeave={() => {
                    onLeave(projectTitle[2].id, sectionId);
                }}
                href="#"
            >
                {projectTitle[2].title}
            </ProjectItem>
            </ProjectItemWrap>
        </ProjectName>
    );
};

export default Project;
