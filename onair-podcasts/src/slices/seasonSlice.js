import { createSlice } from "@reduxjs/toolkit";

const seasonSlice = createSlice({
    name: "season",
    initialState: {
        seasonSelected: null,
        episodesInSeason: [],
    },
    reducers: {
        setSeasonSelected: (state, action) => {
            state.seasonSelected = action.payload
        },
        loadShow: (state, action) => {
            state.episodesInSeason.push(action.payload)
        },

    }
})

export const {setSeasonSelected, loadShow} = seasonSlice.actions
export default seasonSlice.reducer