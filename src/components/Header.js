import { useState } from "react";
import styled from "styled-components";
import CallyIntroduce from "./../images/cally_introduce.png"

const FixedContainer = styled.div`
    width: 100%;
    position: fixed;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
`

const HeaderContainer = styled.header`
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${({ theme }) => theme.size1200} {
        
    }
`;

const LogoWrap = styled.div`
    font-size: 25px;
    font-weight: bold;

    @media ${({ theme }) => theme.size1200} {
        position: absolute;
        top: 20px;
        left: 30px;
    }
`;

const Gnb = styled.ul`
    font-family: "Open Sans", sans-serif;
    width: 27%;
    font-weight: bold;
    justify-content: space-between;
    display: flex;

    @media ${({ theme }) => theme.size1200} {
        display: none;
    }
`;

const GnbList = styled.li`
    font-size: 16px;
`

const MenuButton = styled.a`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 30px;
    display: none;

    @media ${({ theme }) => theme.size1200} {
        display: block;
    }
`

const MenuLineObj = styled.span`
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    top: ${({top})=> top};
    opacity: ${({opacity}) => opacity};
    transform: ${({rotate})=> rotate};
    transition: 0.5s;
`

const MenuContainer = styled.div`
    width: 100%;
    height: 220px;
    background-color: #fff;
    position: absolute;
    top: -220px;
    transition: 0.5s;
    padding-top: 63px;
    transform: ${({translateY})=> translateY};
`

const TitleContainer = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom : ${({marginBottom}) => marginBottom}px;
    position: relative;
`

const ButtonArea = styled.div`
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
`

const CallyImg = styled.img`
    width: 84px;
    height: 28px;
    margin-right: 12px;
`

const MenuTitle = styled.p`
    font-size: 12px;
    display: inline-block;
`

const Line = styled.div`
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    background-color: ${({theme})=> theme.line};
    display: ${({display}) => display};
`

const Header = () => {
    const menu = [
        { id: 0, title: "INTRODUCE", koreanTitle:"소개" },
        { id: 1, title: "DEVELOPMENT", koreanTitle:"개발 프로젝트" },
        { id: 2, title: "DESIGN", koreanTitle:"디자인 프로젝트" },
    ];
    const [isMenuEntered, setIsMenuEntered] = useState(false)

    return (
        <FixedContainer>
        <HeaderContainer>
            <MenuContainer translateY={isMenuEntered ? "translateY(220px)" : "0"}>
                {
                    menu.map((item)=>{
                        if(item.id = 2){
                            console.log(item.id = 2)
                        }
                        return (
                            <TitleContainer>
                                <ButtonArea>
                                    <CallyImg src={CallyIntroduce} />
                                    <MenuTitle>{item.koreanTitle}</MenuTitle>
                                </ButtonArea>
                                <Line display={item.id=2 ? "block" : "none"} />
                            </TitleContainer>
                        )
                    })
                }
            </MenuContainer>
            <LogoWrap>
                <h1>#Jenyglee</h1>
            </LogoWrap>
            <Gnb>
                {menu.map((item) => {
                    return (
                        <GnbList key={item.id}>
                            <a href="#">{item.title}</a>
                        </GnbList>
                    );
                })}
            </Gnb>
            <MenuButton onClick={()=>{setIsMenuEntered(!isMenuEntered)}} href='#' >
                <MenuLineObj top={isMenuEntered ? `50%` : `0`} rotate={isMenuEntered ? `rotate(45deg)` : `rotate(0)`}/>
                <MenuLineObj top={`50%`} opacity={isMenuEntered ? 0 : 1}/>
                <MenuLineObj top={isMenuEntered ? `50%` : `100%`} rotate={isMenuEntered ? `rotate(-45deg)` : `rotate(0)`}/>
            </MenuButton>
        </HeaderContainer>
        </FixedContainer>
    );
};

export default Header;
