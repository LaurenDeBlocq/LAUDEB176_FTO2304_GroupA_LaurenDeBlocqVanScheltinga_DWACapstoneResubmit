import { createSlice } from "@reduxjs/toolkit";
import { useGetFavouritesQuery } from "../services/database";

const { data, isLoading } = useGetFavouritesQuery();

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favouriteEpisodes: data,
    favouriteEpisodesData: [],
  },
  reducers: {
    addFavouriteEpisode: (state, action) => {
      state.seasonSelected = action.payload;
    },
    loadShow: (state, action) => {
      state.episodesInSeason.push(action.payload);
    },
  },
});

export const { setSeasonSelected, loadShow } = seasonSlice.actions;
export default favouritesSlice.reducer;
