import { configureStore } from "@reduxjs/toolkit";
import audioReducer from './slices/audioSlice'
import showsReducer from "./slices/showsSlice";

export const store= configureStore({
    reducer: {
        audio: audioReducer,
        shows: showsReducer
    }
})