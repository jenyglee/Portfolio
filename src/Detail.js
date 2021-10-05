import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.css";

const Box = styled.div`
    padding: 20px;
`;

const Title = styled.h4`
    font-size: 25px;
    color: ${(props) => props.color};
`;

function Detail(props) {
    let history = useHistory();
    let { id } = useParams();
    return (
        <div className="container">
            <Box>
                <Title className="title" color="red">
                    상세페이지
                </Title>
            </Box>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://codingapple1.github.io/shop/shoes1.jpg"
                        width="100%"
                    />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shose[id].title}</h4>
                    <p>{props.shose[id].content}</p>
                    <p>{props.shose[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        뒤로가기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
