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
    const [animationTransform, setAnimationTransform] = useState([
        -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100,
    ]);
    const [animationOpacity, setAnimationOpacity] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    useEffect(() => {
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform[0] = 0;
            copyOpacity[0] = 1;
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 100);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [copyTransform[0], copyTransform[1]] = [0, 0];
            [copyOpacity[0], copyOpacity[1]] = [1, 1];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 200);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            [copyTransform[0], copyTransform[1], copyTransform[2]] = [0, 0, 0];
            [copyOpacity[0], copyOpacity[1], copyOpacity[2]] = [1, 1, 1];
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
                1, 1, 1, 1,
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
            ] = [1, 1, 1, 1, 1];
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
            ] = [1, 1, 1, 1, 1, 1];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 600);
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
                copyTransform[6],
            ] = [0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
            ] = [1, 1, 1, 1, 1, 1, 1];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 700);
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
                copyTransform[6],
                copyTransform[7],
            ] = [0, 0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
                copyOpacity[7],
            ] = [1, 1, 1, 1, 1, 1, 1, 1];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 800);
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
                copyTransform[6],
                copyTransform[7],
                copyTransform[8],
            ] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
                copyOpacity[7],
                copyOpacity[8],
            ] = [1, 1, 1, 1, 1, 1, 1, 1, 1];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 900);
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
                copyTransform[6],
                copyTransform[7],
                copyTransform[8],
                copyTransform[9],
            ] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
                copyOpacity[7],
                copyOpacity[8],
                copyOpacity[9],
            ] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 1000);
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
                copyTransform[6],
                copyTransform[7],
                copyTransform[8],
                copyTransform[9],
                copyTransform[10],
            ] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            [
                copyOpacity[0],
                copyOpacity[1],
                copyOpacity[2],
                copyOpacity[3],
                copyOpacity[4],
                copyOpacity[5],
                copyOpacity[6],
                copyOpacity[7],
                copyOpacity[8],
                copyOpacity[9],
                copyOpacity[10],
            ] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 1100);
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
                    left: animationTransform[10],
                    opacity: animationOpacity[10],
                }}
            >
                {textArr[0]}
            </OneText>
            <OneText
                style={{
                    left: animationTransform[9],
                    opacity: animationOpacity[9],
                }}
            >
                {textArr[1]}
            </OneText>
            <OneText
                style={{
                    left: animationTransform[8],
                    opacity: animationOpacity[8],
                }}
            >
                {textArr[2]}
            </OneText>
            <OneText
                style={{
                    left: animationTransform[7],
                    opacity: animationOpacity[7],
                }}
            >
                {textArr[3]}
            </OneText>
            <OneText
                style={{
                    left: animationTransform[6],
                    opacity: animationOpacity[6],
                }}
            >
                {textArr[4]}
            </OneText>
            <OneText
                style={{
                    left: animationTransform[5],
                    opacity: animationOpacity[5],
                }}
            >
                {textArr[5]}
            </OneText>
            {/* 🍎 */}
            <OneText
                style={{
                    left: animationTransform[4],
                    opacity: animationOpacity[4],
                }}
            >
                {textArr[6]}
            </OneText>
            <OneText
                style={{
                    left: animationTransform[3],
                    opacity: animationOpacity[3],
                }}
            >
                {textArr[7]}
            </OneText>
            <OneText
                style={{
                    left: animationTransform[2],
                    opacity: animationOpacity[2],
                }}
            >
                {textArr[8]}
            </OneText>
            <OneText
                style={{
                    left: animationTransform[1],
                    opacity: animationOpacity[1],
                }}
            >
                {textArr[9]}
            </OneText>
            <OneText
                style={{
                    left: animationTransform[0],
                    opacity: animationOpacity[0],
                }}
            >
                {textArr[10]}
            </OneText>
        </ProjectName>
    );
};

export default Project;
