import React from "react";
import styled from "styled-components";
import WorkPlan from "components/detailProject/WorkPlan";
import Review from "components/detailProject/Review";
import CheckUFunctions from "./CheckUFunctions";
import OlaViewFlow from "../ola/OlaViewFlow";
import GlupViewFlow from "../glupApp/GlupViewFlow";
import CheckUViewFlow from "./CheckUViewFlow";

const workPlanData = {
  goal: "전국 복지 서비스 데이터를 하나로 통합해 제공해주는 서비스 구현",
  team: "프론트엔드 2명, 백엔드 2명",
  stackList: [
    "Next JS",
    "React Query",
    "Mobile Web",
    "Infinite Scroll",
    "Text Editor",
    "React DND",
    "Address API",
    "Kakao Login",
    "Apple Login",
    "NCloud",
    "Github CI/CD",
  ],
};

const reviewData = [
  "프론트앤드로 취업하여 맡았던 첫번째 프로젝트였습니다. 고객사쪽 백엔드 2명과 함께 진행했습니다. MUI 라이브러리를 이용해 컴포넌트를 빠르게 만들고 혼자서 모든 API 연동을 진행했습니다.",
  "디자이너와 백엔드 사이에서 일을 해야하는 만큼 중간에서 진척도를 따라가는 것에 가장 집중을 하였고, 디자이너에게 필요한 시안을 요청하고, 일관성 있는 컴포넌트로 변경할만한 부분은 제안을 했습니다. 더불어 백엔드와 함께 응답 데이터 구조에 대해서 의견을 정리하는 경험을 가졌습니다.",
  "DatePicker, Chart, React Table를 사용해 화면을 구현하면서 외부 라이브러리를 핸들링 하는 것에 많은 경험을 가져볼 수 있었습니다.",
];

const DetailContainer = styled.section`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.size768} {
    padding: 0;
  }
`;

const CheckUDetail = ({ detailNumber, isSize768 }) => {
  return (
    <DetailContainer>
      {detailNumber === "1" ? <WorkPlan data={workPlanData} /> : null}
      {detailNumber === "2" ? <CheckUViewFlow isSize768={isSize768} /> : null}
      {detailNumber === "3" ? <Review content={reviewData} /> : null}
      {/* {detailNumber === "3" ? <CheckUFunctions isSize768={isSize768} /> : null} */}
    </DetailContainer>
  );
};

export default CheckUDetail;
