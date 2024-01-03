"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };
  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1 mr-1"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("NO TRAILER FOR THIS ANIME")}
        />
      </div>
    );
  };

  const MunculkanTrailer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded fixed bottom-5 right-5 text-color-dark bg-color-primary text-xl hover:bg-color-accent transition-all shadow-xl p-1"
      >
        Watch Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <MunculkanTrailer />;
};

export default VideoPlayer;
