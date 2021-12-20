import React from "react";

const ContentsContext = React.createContext();

const ContentsStore = (props) => {
    const Contents = {
        // ✨ Home
        projects: [
            [
                { id: 0, title: "Info", isHover: false },
                { id: 1, title: "Ability", isHover: false },
                { id: 2, title: "Github", isHover: false },
            ],

            [{ id: 0, title: "Gulp App", isHover: false }],

            [
                { id: 0, title: "Avn", isHover: false },
                { id: 1, title: "Musinsa", isHover: false },
                { id: 2, title: "Kt&g", isHover: false },
                { id: 3, title: "ConsultKit", isHover: false },
                { id: 4, title: "Kyobo", isHover: false },
                { id: 5, title: "Beotherm", isHover: false },
            ],
        ],
        projectBgImages: [
            [
                { id: 0, isShow: false },
                { id: 1, isShow: false },
                { id: 2, isShow: false },
            ],
            [{ id: 0, isShow: false }],
            [
                { id: 0, isShow: false },
                { id: 1, isShow: false },
                { id: 2, isShow: false },
                { id: 3, isShow: false },
                { id: 4, isShow: false },
                { id: 5, isShow: false },
                { id: 6, isShow: false },
            ],
        ],

        // ✨ Info
        descriptionData: [
            "          I WORKED AS A UX/UI DESIGNER FOR 3 YEARS. DESIGNING AND COLLABORATING WITHIN A TEAM, I OFTEN FOUND IT DIFFICULT TO CONVEY THE THINGS I IMAGINED TO THE DEVELOPER. I ALSO HAD DIFFICULTY IMPLEMENTING IT BECAUSE THERE WERE MUCH MORE CONSIDERATIONS THAN I THOUGHT. AS THIS HAPPENED FREQUENTLY, I FELT THAT IT WAS NOT ENOUGH TO PRODUCE SATISFACTORY RESULTS DUE TO THE LIMITATIONS OF MY KNOWLEDGE, AND I STARTED STUDYING DEVELOPMENT ON MY OWN.",
            "          IT TOOK ME A LOT OF TIME BECAUSE I STARTED BLINDLY WITHOUT A CLEAR DIRECTION. ONCE I STARTED SOMETHING, I TRIED TO SEE IT TO THE FINISH ON THE VERY DAY. I THINK THE EXPERIENCES OF LEARNING ON MY OWN AND THE COUNTLESS EXPERIENCES OF TRIALS AND ERRORS MADE ME STRONGER. I’M NOT SURE HOW WELL I WOULD BE ABLE TO PERFORM AT THE COMPANY, BUT I CAN ASSURE YOU THAT I’M ALWAYS WILLING TO LEARN AND GROW QUICKLY SO THAT I CAN MAKE A BIG CONTRIBUTION TO THE COMPANY. THANK YOU.",
            "          저는 3년동안 UX/UI 디자이너로 재직활동을 했습니다. 팀 내에서 디자인과 개발 협업을 하다보면 제가 디자인하며 상상했던 것들을 개발자에게 제대로 전달하지 못하거나, 생각보다 많은 고려사항들 때문에 구현이 어려웠던 경우가 종종 있었습니다. 수시로 이런 일이 발생하다 보니 제 지식의 한계로 만족스러운 결과가 나오지 않는 것에 부족함이 느껴졌고 독학으로 개발공부를 시작했습니다.",
            "          뚜렷한 방향 없이 무작정 시작하여 생각보다 많은 시간이 걸렸지만 그만큼 스스로 방법을 터득했던 경험들과, 오랜시간이 걸려도 결국엔 구현에 성공했던 수많은 삽질의 경험들이 저를 더 단단하게 만들어주었다고 생각합니다.아직도 제 수준을 확실히 몰라 회사에서 얼만큼의 퍼포먼스를 내게 될지 장담이 불가능하지만 항상 배움에 메말라있는 자세와, 시작했으면 끝장을 보는 제 성격으로 회사에 큰 기여를 할 수 있도록 빠르게 배우고 성장하겠습니다.",
        ],
        careerList: [
            {
                id: 0,
                from: 17,
                to: 18,
                company: "미디어포스원",
                title: "EPSON & KT&G 복지재단&사회공헌 운영디자인",
                detailCareer: [
                    "제품 카탈로그 web/mobile UI 제작",
                    "EPSON 프로모션 페이지 제작",
                    "Main page UI 개선",
                    "Blog 컨셉 활동 뉴스레터 제작",
                ],
            },
            {
                id: 1,
                from: 18,
                to: 20,
                company: "게리온",
                title: "자사 브랜드 홈페이지 UI/UX 디자인",
                detailCareer: [
                    "노블인베스트먼트 web/mobile UI/UX 제작",
                    "크레타 web/mobile UI/UX 제작",
                    "한국주식연구소 web/mobile UI/UX 제작",
                    "컨설킷 web/mobile UI/UX 제작",
                    "사내 운영 디자인건",
                ],
            },
            {
                id: 2,
                from: 20,
                to: 20,
                company: "9px",
                title: "AI 자동차 그래픽 연구원",
                detailCareer: [
                    "차세대 자동차 클러스터, avn 그래픽 시안 제작",
                    "오픽 솔루션 앱 랜딩페이지 제작",
                    "토익 스피킹 앱 랜딩페이지 제작",
                ],
            },
            {
                id: 3,
                from: 20,
                to: 20,
                company: "다름 커뮤니케이션즈",
                title: "SKT Application 영문버전 디자인",
                detailCareer: ["SKT 글로벌 고객 전용 App UI/UX 시안 제작"],
            },
        ],

        // ✨Ability
        titleData: [
            "REACT NATIVE",
            "ASYNC STORAGE",
            "USECONTEXT",
            "LIFE CYCLE",
            "STACK",
            "BOTTOM TABS",
            "NAVIGATION",
            "AXIOS",
            "REDUX",
            "REDUX THUNK",
            "MOB X",
            "FIREBASE",
            "DATA HANDLING",
        ],

        abilityData: [
            {
                id: 0,
                name: "React Native",
                gauge: 80,
                gaugeColor: "#00CFF5",
            },
            {
                id: 1,
                name: "React",
                gauge: 70,
                gaugeColor: "#00CFF5",
            },
            {
                id: 2,
                name: "MySQL",
                gauge: 40,
                gaugeColor: "#5D87A1",
            },
            {
                id: 0,
                name: "Axios/Fetch API",
                gauge: 50,
                gaugeColor: "#0A99E0",
            },
            {
                id: 1,
                name: "Redux",
                gauge: 50,
                gaugeColor: "#7649BB",
            },
            {
                id: 2,
                name: "Firebase",
                gauge: 60,
                gaugeColor: "#F5820C",
            },
            {
                id: 0,
                name: "Git",
                gauge: 40,
                gaugeColor: "#1B1F23",
            },
            {
                id: 1,
                name: "HTML/CSS",
                gauge: 90,
                gaugeColor: "#E44F26",
            },
            {
                id: 2,
                name: "Figma",
                gauge: 80,
                gaugeColor: "#A259FF",
            },
            {
                id: 0,
                name: "PhotoShop",
                gauge: 100,
                gaugeColor: "#1E73B1",
            },
            {
                id: 1,
                name: "Illustrator",
                gauge: 100,
                gaugeColor: "#FF9A00",
            },
        ],
    };

    return (
        <ContentsContext.Provider value={Contents}>
            {props.children}
        </ContentsContext.Provider>
    );
};
export { ContentsContext, ContentsStore };

// 그외 스크롤값도 여기에
