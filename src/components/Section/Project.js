import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProjectName = styled.a`
    font-family: "BLUDHAVEN";
    opacity: 1;
    transition: 0.5;
    z-index: 1;
    display: block;
    position: relative;
`;

const OneText = styled.a`
    height: 100px;
    font-size: 160px;
    opacity: ${({ isHover }) => (isHover ? "1" : "0.3")};
    transition: 1s;
    position: relative;
`;

const Project = ({ projectTitle, textArr, onEnter, onLeave, sectionId }) => {
    // textArr : ['i','n','f','o']
    const [transformX, setTrasnformX] = useState(-100);
    const [opacity, setOpacity] = useState(0);
    const [transformXTwo, setTrasnformXTwo] = useState(-100);
    const [opacityTwo, setOpacityTwo] = useState(0);
    const [transformXThree, setTrasnformXThree] = useState(-100);
    const [opacityThree, setOpacityThree] = useState(0);

    // const [letterObj, setLetterObj] = useState([]);
    // {id: 0, text: 'I', opacity: 0, transformX: -100}
    // {id: 1, text: 'n', opacity: 0, transformX: -100}
    // {id: 2, text: 'f', opacity: 0, transformX: -100}
    // {id: 3, text: 'o', opacity: 0, transformX: -100}
    const [animationTransform, setAnimationTransform] = useState([
        -100, -100, -100, -100, -100, -100,
    ]);
    const [animationOpacity, setAnimationOpacity] = useState([
        0, 0, 0, 0, 0, 0,
    ]);
    useEffect(() => {
        // setTrasnformX(0);
        // setOpacity(0.3);
        // const copy = [...animationTransform];
        // copy[0] = 0;
        // setAnimationTransform(copy);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform[0] = 0;
            copyOpacity[0] = 0.3;
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 100);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [copyTransform[0], copyTransform[1]] = [0, 0];
            [copyOpacity[0], copyOpacity[1]] = [0.3, 0.3];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 200);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [copyTransform[0], copyTransform[1], copyTransform[2]] = [0, 0, 0];
            [copyOpacity[0], copyOpacity[1], copyOpacity[2]] = [0.3, 0.3, 0.3];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 300);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
            ] = [0, 0, 0, 0];
            [copyOpacity[0], copyOpacity[1], copyOpacity[2], copyOpacity[3]] = [
                0.3, 0.3, 0.3, 0.3,
            ];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 400);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
                copyTransform[4],
            ] = [0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
            ] = [0.3, 0.3, 0.3, 0.3, 0.3];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 500);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [
                copyTransform[0],
                copyTransform[1],
                copyTransform[2],
                copyTransform[3],
                copyTransform[4],
                copyTransform[5],
            ] = [0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
            ] = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 600);
    }, []);

    // useEffect(() => {
    //     projectTitle[0].isHover ? setOpacity(1) : setOpacity(0.3);
    //     projectTitle[1].isHover ? setOpacityTwo(1) : setOpacityTwo(0.3);
    //     projectTitle[2].isHover ? setOpacityThree(1) : setOpacityThree(0.3);
    // }, [
    //     projectTitle[0].isHover,
    //     projectTitle[1].isHover,
    //     projectTitle[2].isHover,
    // ]);

    return (
        <ProjectName
            isHover={projectTitle.isHover}
            onMouseEnter={() => {
                onEnter(projectTitle.id, sectionId);
            }}
            onMouseLeave={() => {
                onLeave(projectTitle.id, sectionId);
            }}
            href="#"
        >
            {/* {textArr.map((item, index) => {
                // {id: 0, text: 'I', opacity: 0, transformX: -100}
                return (
                    <OneText
                        style={{
                            // left: transformX,
                            // opacity: opacity,
                            left: animationTransform[0],
                            opacity: 0.3,
                        }}
                    >
                        {item}
                    </OneText>
                );
            })} */}

            <OneText
                style={{
                    // left: transformX,
                    // opacity: opacity,
                    left: animationTransform[5],
                    opacity: animationOpacity[5],
                }}
            >
                {textArr[0]}
            </OneText>
            <OneText
                style={{
                    // left: transformX,
                    // opacity: opacity,
                    left: animationTransform[4],
                    opacity: animationOpacity[4],
                }}
            >
                {textArr[1]}
            </OneText>
            <OneText
                style={{
                    // left: transformX,
                    // opacity: opacity,
                    left: animationTransform[3],
                    opacity: animationOpacity[3],
                }}
            >
                {textArr[2]}
            </OneText>
            <OneText
                style={{
                    // left: transformX,
                    // opacity: opacity,
                    left: animationTransform[2],
                    opacity: animationOpacity[2],
                }}
            >
                {textArr[3]}
            </OneText>
            <OneText
                style={{
                    // left: transformX,
                    // opacity: opacity,
                    left: animationTransform[1],
                    opacity: animationOpacity[1],
                }}
            >
                {textArr[4]}
            </OneText>
            <OneText
                style={{
                    // left: transformX,
                    // opacity: opacity,
                    left: animationTransform[0],
                    opacity: animationOpacity[0],
                }}
            >
                {textArr[5]}
            </OneText>
        </ProjectName>
    );
};

export default Project;
