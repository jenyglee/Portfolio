import { createSlice } from "@reduxjs/toolkit";

export const interactionsSlice = createSlice({
    name: "interactions",
    initialState: {
        projectTitle: [
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
        tempImage: [
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
        // interactions: [{
        //     name: '홍길동',
        //     age: 20
        // }, {
        //     name: '춘향이',
        //     age: 16
        // }]
    },
    reducers: {
        setProjectTitle: (state, action) => {
            state.projectTitle = action.payload;
        },
        // interactionsUpdate: (state, action) => {
        //     state.interactions = action.payload;
        // }
    },
});

export const stateInteractions = (state) => state.interactions;
export const actionsInteractions = interactionsSlice.actions;

export default interactionsSlice.reducer;
