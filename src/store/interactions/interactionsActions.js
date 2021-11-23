import { actionsInteractions } from './interactionsSlice.js';

const actions = {
    // interactionsUpdate: () => (dispatch) => {
    //     dispatch(actionsInteractions.interactionsUpdate([{
    //     name: '김유신',
    //     age: 40
    //     }]));
    // }

    // ✨ 커서 들어오면 이미지 노출
    // itemEnter : (id, sectionId, projectTitle, projectImage, setProjectImage, setImgKey, changeTheme) => (dispatch) => {
    //     // console.log(projectTitle, projectImage)
    //     const copy = [...projectTitle];
    //     const copyImage = [...projectImage];
    //     projectTitle[sectionId][id].isHover = !projectTitle[sectionId][id].isHover;
    //     copyImage[sectionId][id].isShow = !copyImage[sectionId][id].isShow;
    //     setProjectTitle(copy);
    //     setProjectImage(copyImage);
    //     setImgKey({ id: id, sectionId: sectionId });
    //     changeTheme(copy)
    // },
};

export default actions;
