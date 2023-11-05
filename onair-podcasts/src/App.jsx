import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useGetPodcastsQuery } from "./services/podcasts.js";
import AudioPlayer from "./components/AudioPlayer.jsx";

function App() {
  const { data, error, loading, isError, isSuccess } = useGetPodcastsQuery();

  return (
    <div className="app">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <AudioPlayer />
      <Footer />
    </div>
  );
}

export default App;
