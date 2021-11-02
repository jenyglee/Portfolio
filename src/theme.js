const Size = {
    mobile: "320px",
    tablet: "768px",
    desktop: "1200px",
};

const Colors = {
    grey_01: "#D2D2D2",
    black: "#000000",
    white: "#ffffff",
};

export const theme = {
    // ✨메인 타이틀 버튼
    btnStroke: Colors.grey_01,
    btnBackground: Colors.black,
    btnArrowHover: Colors.white,
    btnText: Colors.white,
    mobile: `(max-width:${Size.mobile})`,
    tablet: `(max-width:${Size.tablet})`,
    desktop: `(max-width:${Size.desktop})`,
};
