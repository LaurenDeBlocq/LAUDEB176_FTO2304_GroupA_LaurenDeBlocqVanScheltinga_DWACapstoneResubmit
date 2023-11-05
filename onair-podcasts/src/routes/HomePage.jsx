import React from "react";
import Fuse from "fuse.js";
import Card from "../components/Card";
import { useGetPodcastsQuery } from "../services/podcasts";
import CarouselPage from "../components/Carousel";
import Filter from "../components/Filter";

function HomePage() {
  const { data, isLoading, refetch } = useGetPodcastsQuery();
  const [loadedShows, setLoadedShows] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterType, setFilterType] = React.useState("Default");
  React.useEffect(() => {
    if (data) {
      setLoadedShows(data);
    }
  }, [data]);

  const filterShows = () => {
    if (!data) {
      return;
    }
    const fuse = new Fuse(JSON.parse(JSON.stringify(data)), {
      includeScore: true,
      keys: ["title"],
    });
    let filtered =
      searchTerm !== ""
        ? fuse.search(searchTerm)
        : JSON.parse(JSON.stringify(data));
    if (filterType === "Default" && searchTerm !== "") {
      filtered.sort((a, b) => {
        b.score - a.score;
      });
    }
    if (searchTerm !== "") {
      filtered = filtered.map((item) => item.item);
    }
    if (filterType === "A-Z") {
      filtered.sort((a, b) => {
        let nameA = a.title.toLowerCase();
        let nameB = b.title.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
    if (filterType === "Z-A") {
      filtered.sort((a, b) => {
        let nameA = a.title.toLowerCase();
        let nameB = b.title.toLowerCase();

        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    }
    if (filterType === "Oldest") {
      filtered.sort((a, b) => {
        let dateA = new Date(a.updated);
        let dateB = new Date(b.updated);

        return dateA - dateB;
      });
    }
    if (filterType === "Newest") {
      filtered.sort((a, b) => {
        let dateA = new Date(a.updated);
        let dateB = new Date(b.updated);

        return dateB - dateA;
      });
    }
    setLoadedShows(filtered);
  };

  React.useEffect(() => {
    filterShows();
  }, [searchTerm, filterType]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  let filterSearchTimeout;
  const handleFilterSearch = (event) => {
    clearTimeout(filterSearchTimeout);
    filterSearchTimeout = setTimeout(() => {
      setSearchTerm(event.target.value);
    }, 300);
  };

  const handleFilterSelect = (event) => {
    const filter = event.target.value;
    setFilterType(filter);
  };
  const previewCards = loadedShows.map((show) => {
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
      <Filter
        handleFilterSelect={handleFilterSelect}
        handleFilterSearch={handleFilterSearch}
      />
      {previewCards}
    </>
  );
}

export default HomePage;
