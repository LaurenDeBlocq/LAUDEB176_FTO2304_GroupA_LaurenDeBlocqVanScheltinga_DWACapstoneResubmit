import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { hasLoaded, loadShow } from "../slices/showsSlice";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setLoadedShows(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
}

export default HomePage;
