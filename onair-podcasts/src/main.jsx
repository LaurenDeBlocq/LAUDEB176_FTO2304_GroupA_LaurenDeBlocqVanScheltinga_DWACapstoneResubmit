import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import ErrorPage from "./error-page";

export const supabase = createClient(
  "https://usoblofyaksrhhooaimp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzb2Jsb2Z5YWtzcmhob29haW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNTEwMTQsImV4cCI6MjAxMzkyNzAxNH0.CzIIgW87jhhC7acvrblPdM3BeSihXUBJK-Cm_H3cdg4"
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App store={store} supabase={supabase} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      //   {
      //     path: "show/:showId",
      //     element: <Show />,
      //   },
      //   {
      //     path: "show/:showId/season/:seasonId",
      //     element: <SeasonPage />,
      //   },
      //   {
      //     path: "favourites/",
      //     element: <FavouritesPage />,
      //   },
    ],
  },
]);

function Authentication() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "facebook", "twitter"]}
      />
    );
  } else {
    return (
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication />
  </React.StrictMode>
);
