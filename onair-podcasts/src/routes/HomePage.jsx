import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { hasLoaded, loadShow } from "../slices/showsSlice";
import { useGetPodcastsQuery } from "../services/podcasts";
import { useDispatch } from "react-redux";
import CarouselPage from "../components/Carousel";

function HomePage() {
  const { data, isLoading } = useGetPodcastsQuery();
  const dispatch = useDispatch;
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  // useEffect(() => {
  //   dispatch(loadShow(data));
  // }, []);

  const previewCards = data.map((show) => {
    return <Card key={show.id} showData={show} />;
  });
  const carouselDetails = [
    data[Math.floor(Math.random() * data.length)],
    data[Math.floor(Math.random() * data.length)],
    data[Math.floor(Math.random() * data.length)],
  ];

  return (
    <>
      <CarouselPage details={carouselDetails} />
      {previewCards}
    </>
  );
}

export default HomePage;
