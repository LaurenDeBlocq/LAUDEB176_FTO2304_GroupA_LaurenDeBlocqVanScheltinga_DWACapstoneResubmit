// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from "../client.js";



// Define a service using a base URL and expected endpoints
export const databaseApi = createApi({
    reducerPath: 'databaseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://usoblofyaksrhhooaimp.supabase.co/rest/v1/',
        prepareHeaders:async (headers) => {
            const { data: { session: { access_token } } } = await supabase.auth.getSession()
            if (access_token) {
                headers.set('authorization', `Bearer ${access_token}`)
                headers.set('apiKey', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzb2Jsb2Z5YWtzcmhob29haW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNTEwMTQsImV4cCI6MjAxMzkyNzAxNH0.CzIIgW87jhhC7acvrblPdM3BeSihXUBJK-Cm_H3cdg4`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        getFavourites: builder.query({
            query: (user_id) => `favourites?select=*&user_id=eq.${user_id}`,
        }),
        getAudioSession: builder.query({
            query: (user_id) => `audio_session?select=*&user_id=eq.${user_id}`,
        }),

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFavouritesQuery, useGetAudioSessionQuery } = databaseApi
