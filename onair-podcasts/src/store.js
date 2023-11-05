import { configureStore } from "@reduxjs/toolkit";
import audioReducer from './slices/audioSlice'
import showsReducer from "./slices/showsSlice";
import seasonReducer from "./slices/seasonSlice.js";
import { podcastApi } from "./services/podcasts.js";
import { databaseApi } from "./services/database.js";


export const store= configureStore({
    reducer: {
        audio: audioReducer,
        shows: showsReducer,
        season: seasonReducer,
        [podcastApi.reducerPath]: podcastApi.reducer,
        [databaseApi.reducerPath]: databaseApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(podcastApi.middleware, databaseApi.middleware),
})
