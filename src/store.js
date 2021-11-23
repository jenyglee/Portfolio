import { configureStore } from '@reduxjs/toolkit';
import interactionsReducer from './store/interactions/interactionsSlice.js';
import ReduxThunk from 'redux-thunk';

export default configureStore({
    reducer: {
        interactions: interactionsReducer
    },
    middleware: [
        ReduxThunk
    ]
});



