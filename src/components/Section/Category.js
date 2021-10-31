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
`;

const CategoryText = styled.p`
    font-weight: bold;
    letter-spacing: 8px;
`;

const CategoryImage = styled.img`
    width: 100px;
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
            <CategoryImage src={img} art="logo" />
        </CategoryContainer>
    );
};

export default Category;
