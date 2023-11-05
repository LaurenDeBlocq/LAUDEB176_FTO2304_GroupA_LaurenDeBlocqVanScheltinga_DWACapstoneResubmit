import React from "react";
import Card from "../components/Card";
import { useGetPodcastsQuery } from "../services/podcasts";
import CarouselPage from "../components/Carousel";

function HomePage() {
  const { data, isLoading } = useGetPodcastsQuery();
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
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
