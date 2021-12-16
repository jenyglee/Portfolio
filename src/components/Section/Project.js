import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import Sticker from "./../Sticker";
import ProjectViewButton from "./ProjectViewButton";
import ProjectOneText from "./ProjectOneText";

const ProjectNameContainer = styled.div`
    display: flex;
    position: relative;
`;

const ProjectName = styled.a`
    font-family: "BLUDHAVEN";
    transition: 0.3;
    z-index: 1;
    display: flex;

    position: relative;
    opacity: 1;
    margin-bottom: 30px;

    @media ${({ theme }) => theme.size1200} {
    }
    @media ${({ theme }) => theme.size568} {
        padding-left: 20px;
        margin-bottom: 10px;
    }
`;

const OneText = styled.span`
    height: 110px;
    font-size: 160px;
    transition: 1s;
    position: relative;
    left: ${({ animationTransform }) => animationTransform}px;
    opacity: ${({ animationOpacity }) => animationOpacity};
    color: ${({ isChangedTheme, isPcBreakPoint }) =>
        isChangedTheme && !isPcBreakPoint ? "#fff" : "#000"};
    @media ${({ theme }) => theme.size1440} {
        font-size: 140px;
    }
    @media ${({ theme }) => theme.size1200} {
        font-size: 120px;
        /* opacity : 1; */
        height: 90px;
    }
    @media ${({ theme }) => theme.size960} {
        font-size: 100px;
        height: 70px;
    }
    @media ${({ theme }) => theme.size768} {
        font-size: 80px;
        height: 50px;
    }
    @media ${({ theme }) => theme.size568} {
        font-size: 40px;
        height: 40px;
    }
`;

const Project = ({
    projectTitle,
    textArr,
    onEnter,
    onLeave,
    sectionId,
    isChangedTheme,
    isPcBreakPoint,
    scrollX,
}) => {
    // textArr : ['i','n','f','o']
    const [animationTransform, setAnimationTransform] = useState([
        -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100,
    ]);
    const [animationOpacity, setAnimationOpacity] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const [btnAnimationTransform, setBtnAnimationTransform] = useState([30]);
    const [btnAnimationOpacity, setBtnAnimationOpacity] = useState([0]);
    const [section, setSection] = useState("");
    const [project, setProject] = useState("");

    //  ✨ 마우스오버된 것은 투명도 1, 나머지는 0.4
    // 🪲 1200 이하에서도 발동되는게 문제!
    useEffect(() => {
        if (scrollX >= 1200) {
            projectTitle.isHover
                ? setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
                : setAnimationOpacity([
                      0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4,
                  ]);
        }
    }, [projectTitle.isHover]);

    //  ✨ 한글자씩 나타나는 인터랙션
    useEffect(() => {
        // 다른 페이지에서 돌아왔을 때 기존 글자 위치와
        // setAnimationTransform([
        //     -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100,
        // ]);
        // setAnimationOpacity([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(10, 1, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(10, 1, 1);
            } else {
                copyOpacity.splice(10, 1, 0.4);
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 100);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(9, 2, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(9, 2, 1, 1);
            } else {
                copyOpacity.splice(9, 2, 0.4, 0.4);
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 200);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(8, 3, 0, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(8, 3, 1, 1, 1);
            } else {
                copyOpacity.splice(8, 3, 0.4, 0.4, 0.4);
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 300);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(7, 4, 0, 0, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(7, 4, 1, 1, 1, 1);
            } else {
                copyOpacity.splice(7, 4, 0.4, 0.4, 0.4, 0.4);
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 400);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(6, 5, 0, 0, 0, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(6, 5, 1, 1, 1, 1, 1);
            } else {
                copyOpacity.splice(6, 5, 0.4, 0.4, 0.4, 0.4, 0.4);
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 500);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(5, 6, 0, 0, 0, 0, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(5, 6, 1, 1, 1, 1, 1, 1);
            } else {
                copyOpacity.splice(5, 6, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4);
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 600);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(4, 7, 0, 0, 0, 0, 0, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(4, 7, 1, 1, 1, 1, 1, 1, 1);
            } else {
                copyOpacity.splice(4, 7, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4);
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 700);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(3, 8, 0, 0, 0, 0, 0, 0, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(3, 8, 1, 1, 1, 1, 1, 1, 1, 1);
            } else {
                copyOpacity.splice(
                    3,
                    8,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4
                );
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 800);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1);
            } else {
                copyOpacity.splice(
                    2,
                    9,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4
                );
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 900);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(1, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
            } else {
                copyOpacity.splice(
                    1,
                    10,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4
                );
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 1000);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            if (window.innerWidth <= 1200) {
                copyOpacity.splice(0, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
            } else {
                copyOpacity.splice(
                    0,
                    11,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4,
                    0.4
                );
            }
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 1100);

        // 'View 버튼' 애니메이션
        setTimeout(() => {
            setBtnAnimationTransform(0);
            setBtnAnimationOpacity(1);
        }, 1400);

        setSection(sectionId);
        setProject(projectTitle.id);
    }, []);

    // 너비 1200 이하에서 글자 opacity 1로 변경
    useEffect(() => {
        const copyOpacity = [...animationOpacity];
        if (window.innerWidth <= 1200) {
            copyOpacity.splice(0, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        } else {
            copyOpacity.splice(
                0,
                11,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4
            );
        }
        setAnimationOpacity(copyOpacity);
    }, [window.innerWidth]);

    return (
        <ProjectNameContainer>
            {sectionId === 0 && projectTitle.id === 2 ? (
                // 깃허브의 경우 -> 외부링크 열기
                <ProjectName
                    isHover={projectTitle.isHover}
                    onMouseEnter={() => {
                        onEnter(projectTitle.id, sectionId);
                    }}
                    onMouseLeave={() => {
                        onLeave(projectTitle.id, sectionId);
                    }}
                    href="https://github.com/jenyglee"
                    target="_blank"
                >
                    <ProjectOneText
                        animationTransform={animationTransform}
                        animationTransform={animationTransform}
                        animationOpacity={animationOpacity}
                        isChangedTheme={isChangedTheme}
                        isPcBreakPoint={isPcBreakPoint}
                        textArr={textArr}
                    />
                    {/* ✨ 타이틀 옆에 붙어있는 버튼 */}
                    <ProjectViewButton
                        projectTitle={projectTitle}
                        isChangedTheme={isChangedTheme}
                        isPcBreakPoint={isPcBreakPoint}
                        btnAnimationTransform={btnAnimationTransform}
                        btnAnimationOpacity={btnAnimationOpacity}
                    />
                </ProjectName>
            ) : (
                <Link to={`/${sectionId}/${projectTitle.id}`}>
                    <ProjectName
                        isHover={projectTitle.isHover}
                        // 🥸✨ 너비값을 가져온 뒤
                        onMouseEnter={() => {
                            onEnter(projectTitle.id, sectionId);
                        }}
                        onMouseLeave={() => {
                            onLeave(projectTitle.id, sectionId);
                        }}
                        onClick={() => {
                            onLeave(projectTitle.id, sectionId);
                        }}
                        href="#"
                    >
                        {section === 1 && project === 0 ? <Sticker /> : null}

                        <ProjectOneText
                            animationTransform={animationTransform}
                            animationTransform={animationTransform}
                            animationOpacity={animationOpacity}
                            isChangedTheme={isChangedTheme}
                            isPcBreakPoint={isPcBreakPoint}
                            textArr={textArr}
                        />
                        {/* ✨ 타이틀 옆에 붙어있는 버튼 */}
                        <ProjectViewButton
                            projectTitle={projectTitle}
                            isChangedTheme={isChangedTheme}
                            isPcBreakPoint={isPcBreakPoint}
                            btnAnimationTransform={btnAnimationTransform}
                            btnAnimationOpacity={btnAnimationOpacity}
                        />
                    </ProjectName>
                </Link>
            )}
        </ProjectNameContainer>
    );
};

export default Project;
