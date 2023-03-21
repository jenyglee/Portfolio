import React from "react"
import styled from "styled-components"
import OlaViewFlow from "components/detailProject/ola/OlaViewFlow"
import WorkPlan from "components/detailProject/WorkPlan"
import Review from "components/detailProject/Review"
import ServiceArchitecture from "../ServiceArchitecture"
import Erd from "../Erd"
import { olaSources } from "images"

const workPlanData = {
    goal: "관심사로 공유하는 커뮤니티 사이트 제작",
    team: "백엔드 5명",
    stackList: [
        "Java",
        "Springboot",
        "Springdata JPA",
        "QueryDSL",
        "JWT",
        "Redis",
        "Websocket",
        "MySQL",
        "AWS",
        "Github Actions",
        "Code Deploy",
    ],
}

const serviceArchitectureData = {
    techList: [
        "QueryDSL 동적 쿼리문 작성",
        "PresignedURL 이미지 업로드",
        "JWT Access/Refresh Token",
        "Websocket, Socket js, Stomp",
        "OAuth2 카카오 로그인",
        "SMTP 이메일 전송",
        "RDS(MySQL)",
        "Github Action CI/CD 배포자동화",
    ],
    img: olaSources.serviceArchitecture,
}

const reviewData = [
    "스파르타 코딩클럽 부트캠프 최종 프로젝트였습니다. 저희의 목표는 기본의 충실한 것이였기 때문에 최대한 많은 테이블을 연관시켜 심도깊은 쿼리문을 작성하는 것을 목표로 삼았습니다. 심도깊은 쿼리문 작성을 위해 시안에서부터 다양한 조건의 필터를 만들었고, 그만큼 동적 쿼리문을 늘려나갈 수 있었습니다.",
    "다양한 연관관계와 N:N 관계 해결, 그리고 데이터 조회 시 중복조회 문제와 쿼리문을 분리해서 작성 후 합치는 후처리 과정까지, 다양하게 경험해 볼 수 있었습니다.",
    "기본의 충실하기로 한 만큼, 신기술을 적용하는 경험과 성능을 개선하는 연습은 아직 부족하지만, 전반적으로 여러개의 테이블이 유기적으로 얽혀있는 하나의 프로덕트를 설계함으로써 많은 경험을 해볼 수 있었습니다.",
]

const DetailContainer = styled.section`
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${({ theme }) => theme.size768} {
        padding: 0;
    }
`

const OlaDetail = ({ detailNumber, isSize768 }) => {
    return (
        <DetailContainer>
            {detailNumber === "1" ? <OlaViewFlow isSize768={isSize768} /> : null}
            {detailNumber === "2" ? <WorkPlan data={workPlanData} /> : null}
            {detailNumber === "3" ? <ServiceArchitecture data={serviceArchitectureData} /> : null}
            {detailNumber === "4" ? <Erd src={olaSources.erd} /> : null}
            {detailNumber === "5" ? <Review content={reviewData} /> : null}
        </DetailContainer>
    )
}

export default OlaDetail
