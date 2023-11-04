import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useGetPodcastsQuery } from "./services/podcasts.js";
function App() {
  const { data, error, loading, isError, isSuccess } = useGetPodcastsQuery();
  return (
    <>
      <Header />

      <Footer />
    </>
  );
}

export default App;
