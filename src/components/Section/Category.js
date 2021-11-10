import { useEffect, useState } from "react";
import styled from "styled-components";
// import Cally from "./../../images/cally.png";

const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 20px;
    position: relative;
    bottom: -50px;
    transition: 1s;

    @media ${({ theme }) => theme.size1200} {
        padding-left: 30px;
        margin-top: 110px;
    }
    @media ${({ theme }) => theme.size960} {
        margin-top: 90px;
    }
    @media ${({ theme }) => theme.size768} {
        margin-top: 70px;
        margin-bottom: 0;
    }
    @media ${({ theme }) => theme.size568} {
        margin-top: 50px;
    }
`;

const CategoryText = styled.p`
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 5px;
    margin-right: 10px;
    
    @media ${({theme})=> theme.size1200}{
        font-size: 12px;
    }
    @media ${({theme})=> theme.size960}{
        display: none;
        font-size: 12px;
    }
`;

const CategoryImage = styled.img`
    width: 285px;
    height: 43px;

    @media ${({theme})=> theme.size960}{
        width: 184px;
        height: 28px;
    }
    @media ${({theme})=> theme.size768}{
        width: 133px;
        height: 20px;
    }
`;

const Category = ({ img }) => {
    const [opacity, setOpacity] = useState(0);
    const [tranformY, setTransformY] = useState(-50);

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
            setTransformY(0);
        }, 1000);
    }, []);
    return (
        <CategoryContainer
            style={{
                opacity: opacity,
                bottom: tranformY,
            }}
        >
            <CategoryText>COLLECTION</CategoryText>
            <CategoryImage src={img.image} art="logo" />
        </CategoryContainer>
    );
};

export default Category;
