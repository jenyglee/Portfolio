import { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
`;

const Wrap = styled.div`
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`;

const LogoWrap = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

const Gnb = styled.ul`
    font-family: "Open Sans", sans-serif;
    width: 20%;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    font-size: 14px;
`;

const Header = () => {
    const menu = [
        { id: 0, title: "ABOUT ME" },
        { id: 1, title: "PROJECT" },
    ];

    return (
        <HeaderContainer>
            <Wrap>
                <LogoWrap>
                    <h1>#Jenyglee</h1>
                </LogoWrap>
                <Gnb>
                    {menu.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href="#">{item.title}</a>
                            </li>
                        );
                    })}
                </Gnb>
            </Wrap>
        </HeaderContainer>
    );
};

export default Header;
