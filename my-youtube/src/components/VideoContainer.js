import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API, GOOGLE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  console.log("checking the api key", process.env.GOOGLE_API_KEY);
  console.log("checking my name", process.env.REACT_APP_NAME);
  //we are updating our state variable so that it can trigger the recociliation process.//
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);

    const json = await data.json();

    console.log("checking the json data", json);

    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
