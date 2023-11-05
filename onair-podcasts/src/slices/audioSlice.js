import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
    name: 'audio',
    initialState: {
        isPlaying: {value: false},
        whatIsPlaying: {title: "", episode: 0, season:0, podcast_id:0, file: "",timestamp:0}

    },
    reducers: {
        startPlaying: (state) => {
            state.isPlaying = true
        }, 
        setWhatIsPlaying: (state, action) => {
            state.whatIsPlaying = action.payload
        }
    }
})

export const { startPlaying,whatIsPlaying , setWhatIsPlaying } = audioSlice.actions

export default audioSlice.reducer
