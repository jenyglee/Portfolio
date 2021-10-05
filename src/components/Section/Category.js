import styled from "styled-components";
// import Cally from "./../../images/cally.png";

const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 20px;
`;

const CategoryText = styled.p`
    font-weight: bold;
    letter-spacing: 8px;
`;

const CategoryImage = styled.img`
    width: 100px;
`;

const Category = ({ img }) => {
    return (
        <CategoryContainer>
            <CategoryText>COLLECTION</CategoryText>
            <CategoryImage src={img} art="logo" />
        </CategoryContainer>
    );
};

export default Category;
