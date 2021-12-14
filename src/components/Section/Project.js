import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";

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

const BtnWrap = styled.div`
    width: ${({ isHover }) => (isHover ? 74 : 30)}px;
    height: 30px;
    border-radius: 50px;
    border: ${({ isHover, theme }) =>
        `1px solid ${
            isHover ? theme.btnBackground : theme.whiteThemeBtnStroke
        }`};
    transition: 0.5s;
    background-color: ${({
        isHover,
        theme,
        isChangedTheme,
        isPcBreakPoint,
    }) => {
        if (isHover) {
            if (isChangedTheme && !isPcBreakPoint) {
                return theme.darkThemeBtnBackground;
            } else if (!isChangedTheme) {
                return theme.whiteThemeBtnBackground;
            }
        } else return null;
    }};
    display: flex;
    align-items: center;
    opacity: ${({ btnAnimationOpacity }) => btnAnimationOpacity};
    transform: ${({ btnAnimationTransform }) =>
        `translateY(${btnAnimationTransform}px)`};
    position: absolute;
    top: 10px;
    left: 100%;

    @media ${({ theme }) => theme.size1200} {
        display: none;
    }
`;
const BtnArrow = styled.span`
    width: 10px;
    height: 10px;
    display: block;
    transition: 0.5s;
    border-top: 0 solid transparent;
    border-bottom-width: 12px;
    border-bottom-style: solid;
    border-bottom-color: ${({
        isHover,
        theme,
        isChangedTheme,
        isPcBreakPoint,
    }) => {
        if (isHover) {
            if (isChangedTheme && !isPcBreakPoint) {
                return theme.darkThemeBtnArrow;
            } else if (!isChangedTheme) {
                return theme.whiteThemeBtnArrow;
            }
        } else if (!isHover) {
            if (isChangedTheme && !isPcBreakPoint) {
                return theme.whiteThemeBtnArrow;
            } else if (!isChangedTheme) {
                return theme.darkThemeBtnArrow;
            }
        }
    }};
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    margin-bottom: 1px;
    margin-left: 7px;
    margin-right: 5px;
    transform: ${({ isHover }) => `rotate(${isHover ? 90 : 0}deg)`};
`;

const BtnTextWrap = styled.div`
    transition: 0.5s;
    width: ${({ isHover }) => (isHover ? 100 : 0)}px;
    color: ${({ isHover, theme, isChangedTheme, isPcBreakPoint }) => {
        if (isHover) {
            if (isChangedTheme && !isPcBreakPoint) {
                return theme.darkThemeBtnText;
            } else if (!isChangedTheme) {
                return theme.whiteThemeBtnText;
            }
        }
    }};
    overflow: hidden;
`;

const BtnText = styled.p`
    font-family: sans-serif;
    font-size: 16px;
    padding-top: 2px;
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
                    {
                        // ✨ 한글자 한글자의 움직임이 다른 상태
                        animationTransform.map((item, index) => {
                            return (
                                <OneText
                                    animationTransform={
                                        animationTransform[index]
                                    }
                                    animationOpacity={animationOpacity[index]}
                                    isChangedTheme={isChangedTheme}
                                    isPcBreakPoint={isPcBreakPoint}
                                    key={index}
                                >
                                    {textArr[index]}
                                </OneText>
                            );
                        })
                    }

                    {/* ✨ 타이틀 옆에 붙어있는 버튼 */}
                    <BtnWrap
                        isHover={projectTitle.isHover}
                        isChangedTheme={isChangedTheme}
                        isPcBreakPoint={isPcBreakPoint}
                        btnAnimationTransform={btnAnimationTransform}
                        btnAnimationOpacity={btnAnimationOpacity}
                    >
                        <BtnArrow
                            isHover={projectTitle.isHover}
                            isChangedTheme={isChangedTheme}
                            isPcBreakPoint={isPcBreakPoint}
                        />
                        <BtnTextWrap
                            isHover={projectTitle.isHover}
                            isChangedTheme={isChangedTheme}
                            isPcBreakPoint={isPcBreakPoint}
                        >
                            <BtnText>View</BtnText>
                        </BtnTextWrap>
                    </BtnWrap>
                </ProjectName>
            </Link>
        </ProjectNameContainer>
    );
};

export default Project;
