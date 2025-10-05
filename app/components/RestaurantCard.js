"use client";
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function RestaurantCard({ data }) {
  return (
    <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3, background: "linear-gradient(241deg,rgba(81, 13, 97, 1) 0%, rgba(200, 81, 207, 1) 100%)" }}>
      {data.image_url && (
        <CardMedia
          component="img"
          height="140"
          image={data.image_url}
          alt={data.name}
        />
      )}
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{
            textAlign: "center",
            fontFamily: "Bitcount Grid Double",
            fontWeight: 700,
          }}
        >
          {data.name}
        </Typography>
        <Typography variant="body2" >Located At: {data.address}</Typography>
        <br></br>
        <Typography variant="body2" >Cuisine: {data.type_of_cuisine}</Typography>
        <Typography variant="body2">
          Michelin Stars: {data.michelin_star}
        </Typography>

        <Typography
          component="a"
          href={data.website}
          target="_blank"
          sx={{
            textDecoration: "none",
            color: "blue",
            fontFamily: "Bitcount Grid Double",
            fontWeight: 400,
          }}
        >
          Visit Website
        </Typography>
      </CardContent>
    </Card>
  );
}
