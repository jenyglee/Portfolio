import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import ProjectViewButton from "components/Section/ProjectViewButton"
import ProjectOneText from "components/Section/ProjectOneText"

const ProjectNameContainer = styled.div`
    display: flex;
    position: relative;
`

const ProjectName = styled.a`
    font-family: "BLUDHAVEN";
    transition: 0.3;
    z-index: 1;
    display: flex;
    position: relative;
    opacity: 1;
    margin-bottom: 30px;

    @media ${({ theme }) => theme.size568} {
        margin-bottom: 10px;
    }
`

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
    ])
    const [animationOpacity, setAnimationOpacity] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [btnAnimationTransform, setBtnAnimationTransform] = useState([30])
    const [btnAnimationOpacity, setBtnAnimationOpacity] = useState([0])

    //  ✨ 마우스오버된 것은 투명도 1, 나머지는 0.4
    useEffect(() => {
        if (scrollX >= 1200) {
            projectTitle.isHover
                ? setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
                : setAnimationOpacity([0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4])
        }
    }, [projectTitle.isHover])

    //  ✨ 한글자씩 나타나는 인터랙션
    useEffect(() => {
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(10, 1, 0)
            copyOpacity.splice(10, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 100)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(9, 2, 0, 0)
            copyOpacity.splice(9, 2, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 200)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(8, 3, 0, 0, 0)
            copyOpacity.splice(8, 3, 1, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 300)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(7, 4, 0, 0, 0, 0)
            copyOpacity.splice(7, 4, 1, 1, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 400)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(6, 5, 0, 0, 0, 0, 0)
            copyOpacity.splice(6, 5, 1, 1, 1, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 500)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(5, 6, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(5, 6, 1, 1, 1, 1, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 600)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(4, 7, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(4, 7, 1, 1, 1, 1, 1, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 700)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(3, 8, 0, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(3, 8, 1, 1, 1, 1, 1, 1, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 800)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 900)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(1, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 1000)
        setTimeout(() => {
            const copyTransform = [...animationTransform]
            const copyOpacity = [...animationOpacity]
            copyTransform.splice(0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(0, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
            setAnimationTransform(copyTransform)
            setAnimationOpacity(copyOpacity)
        }, 1100)

        setTimeout(() => {
            // 모든 글자가 나타난 뒤 opacity를 1 -> 0.4로 변경
            if (scrollX > 1200) {
                setAnimationOpacity([0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4])
            } else {
                setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
            }
            // 'View 버튼' 애니메이션
            setBtnAnimationTransform(0)
            setBtnAnimationOpacity(1)
        }, 1400)
    }, [])

    // 너비 1200 이하에서 글자 opacity 1로 변경
    useEffect(() => {
        if (scrollX > 1200) {
            setAnimationOpacity([0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4])
        } else {
            setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        }
    }, [scrollX])

    return (
        <ProjectNameContainer>
            {sectionId === 0 && (projectTitle.id === 2 || projectTitle.id === 3) ? (
                // 깃허브의 경우 -> 외부링크 열기
                <ProjectName
                    isHover={projectTitle.isHover}
                    onMouseEnter={() => {
                        onEnter(projectTitle.id, sectionId)
                    }}
                    onMouseLeave={() => {
                        onLeave(projectTitle.id, sectionId)
                    }}
                    href={
                        projectTitle.id === 2
                            ? "https://github.com/jenyglee"
                            : "https://jenyglee.tistory.com"
                    }
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
                        onMouseEnter={() => {
                            onEnter(projectTitle.id, sectionId)
                        }}
                        onMouseLeave={() => {
                            onLeave(projectTitle.id, sectionId)
                        }}
                        onClick={() => {
                            onLeave(projectTitle.id, sectionId)
                        }}
                        href="#"
                    >
                        <ProjectOneText
                            animationTransform={animationTransform}
                            animationTransform={animationTransform}
                            animationOpacity={animationOpacity}
                            isChangedTheme={isChangedTheme}
                            isPcBreakPoint={isPcBreakPoint}
                            textArr={textArr}
                        />
                        {/* ✨ 타이틀 옆에 붙어있는 View 버튼 */}
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
    )
}

export default Project
