import { useEffect, useState } from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    bottom: -50px;
    transition: 1s;
    @media ${({ theme }) => theme.size568} {
        padding-top: 30px;
    }
`;

const CategoryText = styled.p`
    font-family: "AppleSDGothicNeoM";
    font-size: 12px;
    letter-spacing: 5px;
    margin-right: 10px;
    color: ${({ theme, isChangedTheme, isPcBreakPoint }) =>
        isChangedTheme && !isPcBreakPoint
            ? theme.darkThemeText
            : theme.whiteThemeText};
    transition: 0.5s;

    @media ${({ theme }) => theme.size1200} {
        font-size: 12px;
    }
    @media ${({ theme }) => theme.size960} {
        display: none;
        font-size: 12px;
    }
`;

const CategoryImageWrap = styled.div`
    height: 43px;
    position: relative;

    @media ${({ theme }) => theme.size960} {
        height: 28px;
    }
    @media ${({ theme }) => theme.size768} {
        height: 20px;
    }
`;

const CategoryImage = styled.img`
    height: 100%;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: 0.5s;
    position: absolute;
    top: 0;
    left: 0;
`;

const Category = ({ img, isChangedTheme, isPcBreakPoint }) => {
    const [opacity, setOpacity] = useState(0);
    const [tranformY, setTransformY] = useState(-50);
    const [isVisibleBlackImage, setIsVisibleBlackImage] = useState(true); // 블랙 이미지 노출여부
    const [isVisibleWhiteImage, setIsVisibleWhiteImage] = useState(true); // 화이트 이미지 노출여부

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
            setTransformY(0);
        }, 1000);
    }, []);

    useEffect(() => {
        if (isChangedTheme && !isPcBreakPoint) {
            setIsVisibleWhiteImage(true);
            setIsVisibleBlackImage(false);
        } else {
            setIsVisibleWhiteImage(false);
            setIsVisibleBlackImage(true);
        }
    }, [isChangedTheme]);

    return (
        <CategoryContainer style={{ opacity: opacity, bottom: tranformY }}>
            <CategoryText
                isChangedTheme={isChangedTheme}
                isPcBreakPoint={isPcBreakPoint}
            >
                COLLECTION
            </CategoryText>
            <CategoryImageWrap>
                <CategoryImage
                    isVisible={isVisibleBlackImage}
                    src={img.image}
                    art="logo"
                />
                <CategoryImage
                    isVisible={isVisibleWhiteImage}
                    src={img.whiteImage}
                    art="logo"
                />
            </CategoryImageWrap>
        </CategoryContainer>
    );
};

export default Category;
