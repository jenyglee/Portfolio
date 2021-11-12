import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

    @media ${({ theme }) => theme.size1200} {
        padding-left: 30px;
    }
    @media ${({ theme }) => theme.size320} {
        margin-bottom: 0;
    }
`;

const OneText = styled.span`
    height: 110px;
    font-size: 160px;
    transition: 1s;
    position: relative;
    left: ${({ animationTransform }) => animationTransform}px;
    opacity: ${({ animationOpacity }) => animationOpacity};
    color: ${({ isChangedTheme, isPcBreakPoint })=> isChangedTheme&&!isPcBreakPoint ? "#fff" : "#000"};
    @media ${({ theme }) => theme.size1440} {
        font-size: 140px;
    }
    @media ${({ theme }) => theme.size1200} {
        font-size: 120px;
        opacity : 1;
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
        font-size: 60px;
        height: 40px;
    }
`;

const BtnWrap = styled.div`
    width: ${({ isHover }) => (isHover ? 74 : 30)}px;
    height: 30px;
    border-radius: 50px;
    border: ${({ isHover, theme }) =>`1px solid ${isHover ? theme.btnBackground : theme.whiteThemeBtnStroke}`};
    transition: 0.5s;
    background-color: ${({ isHover, theme, isChangedTheme, isPcBreakPoint }) => {
            if(isHover){
                if(isChangedTheme&&!isPcBreakPoint){
                    return theme.darkThemeBtnBackground
                }else if(!isChangedTheme){
                    return theme.whiteThemeBtnBackground
                }
            } else return null
        }
    };
    display: flex;
    align-items: center;
    opacity: ${({btnAnimationOpacity}) => btnAnimationOpacity};
    transform: ${({btnAnimationTransform}) => `translateY(${btnAnimationTransform}px)`};
    position: absolute;
    top:10px;
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
    border-bottom-color: ${({ isHover, theme, isChangedTheme, isPcBreakPoint }) => {
        if(isHover){
            if(isChangedTheme&&!isPcBreakPoint){
                return theme.darkThemeBtnArrow
            }else if(!isChangedTheme){
                return theme.whiteThemeBtnArrow
            }
        } else if(!isHover){
            if(isChangedTheme&&!isPcBreakPoint){
                return theme.whiteThemeBtnArrow
            }else if(!isChangedTheme){
                return theme.darkThemeBtnArrow
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
        if(isHover){
            if(isChangedTheme&&!isPcBreakPoint){
                return theme.darkThemeBtnText
            }else if(!isChangedTheme){
                return theme.whiteThemeBtnText
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

const Project = ({ projectTitle, textArr, onEnter, onLeave, sectionId, isChangedTheme, isPcBreakPoint }) => {
    // textArr : ['i','n','f','o']
    const [animationTransform, setAnimationTransform] = useState([ -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100 ]);
    const [animationOpacity, setAnimationOpacity] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [btnAnimationTransform, setBtnAnimationTransform] = useState([30])
    const [btnAnimationOpacity, setBtnAnimationOpacity] = useState([0]);


    //  ✨ 마우스오버된 것은 투명도 1, 나머지는 0.4
    useEffect(() => {
        projectTitle.isHover ? 
        setAnimationOpacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) : 
        setAnimationOpacity([ 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4 ]);
    }, [projectTitle.isHover]);

    //  ✨ 한글자씩 나타나는 인터랙션
    useEffect(() => {
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(10, 1, 0)
            copyOpacity.splice(10, 1, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 100);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(9, 2, 0, 0)
            copyOpacity.splice(9, 2, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 200);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(8, 3, 0, 0, 0)
            copyOpacity.splice(8, 3, 0.4, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 300);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(7, 4, 0, 0, 0, 0)
            copyOpacity.splice(7, 4, 0.4, 0.4, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 400);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(6, 5, 0, 0, 0, 0, 0)
            copyOpacity.splice(6, 5, 0.4, 0.4, 0.4, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 500);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(5, 6, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(5, 6, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 600);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(4, 7, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(4, 7, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 700);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(3, 8, 0, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(3, 8, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 800);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(2, 9, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 900);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(1, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(1, 10, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 1000);
        setTimeout(() => {
            const copyTransform = [...animationTransform];
            const copyOpacity = [...animationOpacity];
            copyTransform.splice(0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            copyOpacity.splice(0, 11, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4)
            setAnimationTransform(copyTransform);
            setAnimationOpacity(copyOpacity);
        }, 1100);
        setTimeout(() => {
            setBtnAnimationTransform(0);
            setBtnAnimationOpacity(1);
        }, 1400);
    }, []);

    return (
        <ProjectNameContainer>
            <ProjectName
                isHover={projectTitle.isHover}
                onMouseEnter={() => {onEnter(projectTitle.id, sectionId);}}
                onMouseLeave={() => {onLeave(projectTitle.id, sectionId);}}
                href="#"
            >
                {   
                    // ✨ 한글자 한글자의 움직임이 다른 상태 
                    animationTransform.map((item, index)=>{
                        return (
                        <OneText
                            animationTransform={animationTransform[index]}
                            animationOpacity={animationOpacity[index]}
                            isChangedTheme={isChangedTheme}
                            isPcBreakPoint={isPcBreakPoint}
                        >
                            {textArr[index]}
                        </OneText>
                        )
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
        </ProjectNameContainer>
    );
};

export default Project;
