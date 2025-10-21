"use client";
import React, { useState, useEffect } from "react";
import { Box, Card } from "@mui/material";
import { createClient } from "../utils/supabase/client";

export default function DisplayYoutubeShort({ restaurantId }) {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (restaurantId === undefined || restaurantId === null) return;

    const fetchVideos = async () => {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("youtube_short")
        .select("id, video_id")
        .eq("restaurant_id", restaurantId);

      if (error) {
        console.error("Error fetching videos:", error);
        setError(error.message);
      } else {
        setVideos(data);
      }
    };

    fetchVideos();
  }, [restaurantId]);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={2}
      p={2}
    >
      {videos.map((video) => (
        <Card
          key={video.id}
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Box
            component="iframe"
            width="100%"
            height="550px"
            src={`https://www.youtube.com/embed/${video.video_id}`}
            title="American Turk on YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Card>
      ))}
    </Box>
  );
}
