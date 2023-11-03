import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
    'name': 'audio',
    initialState: {
        isPlaying: {value: false},
        whatIsPlaying: {title: "", description: "", episode: 0, file: "",}
    },
    reducer: {
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