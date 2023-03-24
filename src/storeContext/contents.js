import React from "react"

const ContentsContext = React.createContext()

const ContentsStore = (props) => {
    const Contents = {
        // ✨ Home
        projects: [
            [
                { id: 0, title: "Info", isHover: false },
                { id: 1, title: "Ability", isHover: false },
                { id: 2, title: "Github", isHover: false },
                { id: 3, title: "Blog", isHover: false },
            ],

            [
                { id: 0, title: "Ola", isHover: false },
                { id: 1, title: "Visual OMS", isHover: false },
                { id: 2, title: "Gulp App", isHover: false },
            ],

            [
                { id: 0, title: "Avn", isHover: false },
                { id: 1, title: "Musinsa", isHover: false },
                { id: 2, title: "ConsultKit", isHover: false },
            ],
        ],
        projectBgImages: [
            [
                { id: 0, isShow: false },
                { id: 1, isShow: false },
                { id: 2, isShow: false },
                { id: 3, isShow: false },
            ],
            [
                { id: 0, isShow: false },
                { id: 1, isShow: false },
                { id: 2, isShow: false },
            ],
            [
                { id: 0, isShow: false },
                { id: 1, isShow: false },
                { id: 2, isShow: false },
                { id: 3, isShow: false },
            ],
        ],

        // ✨ Info
        descriptionData: [
            "          I started as a UX/UI designer, worked for 3 years, and transitioned to a front-end developer for 1 year. As a designer, when I was collaborating on development within a team, there were often cases where I couldn't properly deliver what I imagined while designing to the developer, or it was difficult to implement because of more considerations than I thought. As this happened from time to time, I felt that I was lacking in not producing satisfactory results due to the limitations of my knowledge, so I started studying development by self-study.",
            "          It took a lot of time since I started studying development by self-study without a clear goal, but I think that the experiences of learning how to do it on my own and the numerous experiences of successfully implementing it even after a long time made me braver. Later, I got an opportunity to study backend development. Currently, as much as my skills are growing, there are more and more things I don't know. With an attitude that always wants to learn and a personality that doesn't give up, I will grow hard to make a great contribution to the company.",
            "          저는 3년동안 UX/UI 디자이너로 재직활동을 했습니다. 팀 내에서 디자인과 개발 협업을 하다보면 제가 디자인하며 상상했던 것들을 개발자에게 제대로 전달하지 못하거나, 생각보다 많은 고려사항들 때문에 구현이 어려웠던 경우가 종종 있었습니다. 수시로 이런 일이 발생하다 보니 제 지식의 한계로 만족스러운 결과가 나오지 않는 것에 부족함이 느껴졌고 독학으로 개발공부를 시작했습니다.",
            "          뚜렷한 방향 없이 무작정 독학으로 개발공부를 시작해서 많은 시간이 걸렸지만 그만큼 스스로 방법을 터득했던 경험들과, 오랜시간이 걸려도 결국엔 구현에 성공했던 수많은 삽질의 경험들이 저를 더 단단하게 만들어주었다고 생각합니다. 그러고 나서 기회가 생겨 백엔드 개발까지 공부하게 되었습니다. 현재는 실력이 성장하는 만큼 모르는 것들만 점점 더 늘어가는 상태입니다. 항상 배움에 메말라있는 자세와, 시작했으면 끝장을 보는 제 성격으로 회사에 큰 기여를 할 수 있도록 빠르게 배우고 성장하겠습니다.",
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
                company: "다름 커뮤니케이션",
                title: "SKT Application 영문버전 디자인",
                detailCareer: ["SKT 글로벌 고객 전용 App UI/UX 시안 제작"],
            },
            {
                id: 3,
                from: 22,
                to: 22,
                company: "메타업",
                title: "물류센터 주문 플랫폼 프론트엔드 개발",
                detailCareer: ["물류센터 기반 온라인 주문연동 플랫폼 개발"],
            },
        ],

        // ✨Ability
        titleData: [
            "SPRINGBOOT",
            "JPA",
            "QUERY DSL",
            "OAUTH2",
            "JWT",
            "AWS",
            "MySQL",
            "Github Actions",
            "NEXT JS",
            "TYPESCRIPT",
            "REACT NATIVE",
            "LIFE CYCLE",
            "AXIOS",
            "REDUX",
            "REDUX THUNK",
            "MOB X",
        ],

        abilityData: [
            {
                id: 0,
                name: "Spring",
                gauge: 50,
                gaugeColor: "#62AA37",
            },
            {
                id: 1,
                name: "QueryDSL",
                gauge: 50,
                gaugeColor: "#1065C0",
            },
            {
                id: 2,
                name: "AWS",
                gauge: 60,
                gaugeColor: "#FF9900",
            },
            {
                id: 3,
                name: "OAuth2",
                gauge: 40,
                gaugeColor: "#484848",
            },
            {
                id: 4,
                name: "React",
                gauge: 80,
                gaugeColor: "#00CFF5",
            },
            {
                id: 5,
                name: "Next JS",
                gauge: 60,
                gaugeColor: "#000000",
            },
            {
                id: 6,
                name: "Typescript",
                gauge: 80,
                gaugeColor: "#3178C6",
            },
            {
                id: 7,
                name: "React Native",
                gauge: 60,
                gaugeColor: "#00CFF5",
            },
            {
                id: 8,
                name: "Axios/Fetch API",
                gauge: 80,
                gaugeColor: "#0A99E0",
            },
            {
                id: 9,
                name: "Redux",
                gauge: 60,
                gaugeColor: "#7649BB",
            },
            {
                id: 10,
                name: "Git",
                gauge: 70,
                gaugeColor: "#1B1F23",
            },
            {
                id: 11,
                name: "Figma",
                gauge: 80,
                gaugeColor: "#A259FF",
            },
            // {
            //     id: 2,
            //     name: "MySQL",
            //     gauge: 40,
            //     gaugeColor: "#5D87A1",
            // },
            // {
            //     id: 2,
            //     name: "Firebase",
            //     gauge: 60,
            //     gaugeColor: "#F5820C",
            // },
            // {
            //     id: 1,
            //     name: "HTML/CSS",
            //     gauge: 90,
            //     gaugeColor: "#E44F26",
            // },
            // {
            //     id: 0,
            //     name: "PhotoShop",
            //     gauge: 100,
            //     gaugeColor: "#1E73B1",
            // },
            // {
            //     id: 1,
            //     name: "Illustrator",
            //     gauge: 100,
            //     gaugeColor: "#FF9A00",
            // },
        ],
    }

    return <ContentsContext.Provider value={Contents}>{props.children}</ContentsContext.Provider>
}
export { ContentsContext, ContentsStore }

// 그외 스크롤값도 여기에
