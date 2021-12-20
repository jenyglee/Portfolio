const Colors = {
    grey_01: "#D2D2D2",
    grey_02: "#f5f5f5",
    grey_03: "#eeeeee",
    black: "#000000",
    white: "#ffffff",
    main: "#1E34FF",
    gulpAppGreen: "#27C47D",
};

export const theme = {
    // ✨라인
    line: Colors.grey_02,

    // ✨ 화이트테마
    whiteThemeBackgroud: Colors.grey_02,
    whiteThemeText: Colors.black,
    whiteThemeBtnBackground: Colors.black,
    whiteThemeBtnArrow: Colors.white,
    whiteThemeBtnText: Colors.white,
    whiteThemeBtnStroke: Colors.grey_01,

    // ✨ 다크테마
    darkThemeBackgroud: Colors.black,
    darkThemeText: Colors.white,
    darkThemeBtnBackground: Colors.white,
    darkThemeBtnArrow: Colors.black,
    darkThemeBtnText: Colors.black,

    // ✨ 디테일페이지 공통
    detailLine: Colors.black,
    detailWhiteText: Colors.white,
    detailTagBorder: Colors.grey_01,
    detailDisable: Colors.grey_01,
    detailPoint: Colors.main,
    detailBoxBackground: Colors.grey_03,

    // ✨ GulpApp 포인트컬러
    gulpAppFrimary: Colors.gulpAppGreen,

    size320: `(max-width:320px)`,
    size568: `(max-width:568px)`,
    size768: `(max-width:768px)`,
    size960: `(max-width:960px)`,
    size1200: `(max-width:1200px)`,
    size1440: `(max-width:1440px)`,
};
