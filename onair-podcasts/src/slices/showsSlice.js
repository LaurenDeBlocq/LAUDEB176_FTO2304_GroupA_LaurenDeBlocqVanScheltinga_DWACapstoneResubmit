import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
    name: "shows",
    initialState: {
        loadedShows: [],
        isLoading: true,
    },
    reducers: {
        hasLoaded: (state) => {
            state.isLoading = false
        },
        loadShow: (state, action) => {
            state.loadedShows.push(action.payload)
        },

    }
})

export const {hasLoaded, loadShow} = showsSlice.actions
export default showsSlice.reducer