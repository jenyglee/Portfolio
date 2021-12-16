// ✨ 커서 들어오면 이미지 노출
const itemEnter = ({
    id,
    sectionId,
    projectTitle,
    projectImage,
    setProjectTitle,
    setProjectImage,
    setImgKey,
    setIsChangedTheme,
}) => {
    const copy = [...projectTitle];
    const copyImage = [...projectImage];
    copy[sectionId][id].isHover = true;
    copyImage[sectionId][id].isShow = true;
    setProjectTitle(copy);
    setProjectImage(copyImage);
    setImgKey({ id: id, sectionId: sectionId });
    changeTheme(copy, setIsChangedTheme);
};

// ✨ 커서 나가면 이미지 숨김
const itemLeave = ({
    id,
    sectionId,
    projectTitle,
    projectImage,
    setProjectTitle,
    setProjectImage,
    setImgKey,
    setIsChangedTheme,
}) => {
    const copy = [...projectTitle];
    const copyImage = [...projectImage];
    copy[sectionId][id].isHover = false;
    copyImage[sectionId][id].isShow = false;
    setProjectTitle(copy);
    setProjectImage(copyImage);
    setImgKey({ id: id, sectionId: sectionId });
    changeTheme(copy, setIsChangedTheme);
};

// ✨ 특정 타이틀 마우스오버시 다크테마로 변경
const changeTheme = (projectTitle, setIsChangedTheme) => {
    if (projectTitle[0][2].isHover || projectTitle[2][0].isHover) {
        setIsChangedTheme(true);
    } else if (!projectTitle[0][2].isHover || !projectTitle[2][0].isHover) {
        setIsChangedTheme(false);
    }
};

// ✨ Top버튼 클릭시 상단으로
const handleTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

export { itemEnter, itemLeave, changeTheme, handleTop };
