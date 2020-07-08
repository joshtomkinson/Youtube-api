import React from "react";
import { Grid } from "@material-ui/core";
import VideoPreview from "./VideoPreview";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVids = videos.map((video, id) => (
    <VideoPreview key={id} video={video} onVideoSelect={onVideoSelect} />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVids}
    </Grid>
  );
};

export default VideoList;
