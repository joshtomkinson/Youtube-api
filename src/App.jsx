import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Youtube from "./api/Youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  async function handleSubmit(searchTerm) {
    const response = await Youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDGVUZd6AIfdBEd3MK8UEfMdNtE_EduZz0",
        q: searchTerm,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }
  useEffect(() => handleSubmit("homepage"), []);

  return (
    <>
      <motion.h1 animate={{ fontSize: 80, color: "#4a65ff", rotateZ: 720 }}>R V P</motion.h1>
      <motion.h3 whileHover={{scale:2, textShadow:"0px 0px 10px rgb(255, 241, 41)"}}>
        React video player
        </motion.h3>
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={handleSubmit} />
            </Grid>
            <Grid id item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
