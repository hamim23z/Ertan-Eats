"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function RestaurantCard({ data }) {
  return (
    <Card
      sx={{
        width: 400,
        height: "100%",
        borderRadius: 3,
        boxShadow: 3,
        background:
          "linear-gradient(241deg, rgba(81, 13, 97, 1) 0%, rgba(200, 81, 207, 1) 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6,
        },
      }}
    >
      {data.image_url && (
        <CardMedia
          component="img"
          image={data.image_url}
          alt={data.name}
          sx={{
            height: 180,
            objectFit: "cover",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
            fontFamily: "Bitcount Grid Double",
            fontWeight: 700,
            color: "white",
          }}
        >
          {data.name}
        </Typography>

        <Typography variant="body2" sx={{ color: "white" }}>
          Located At: {data.address}
        </Typography>

        <Typography variant="body2" sx={{ color: "white" }}>
          Cuisine: {data.type_of_cuisine}
        </Typography>

        <Typography variant="body2" sx={{ color: "white" }}>
          Michelin Stars: {data.michelin_star}
        </Typography>

        {/**box for buttons in the card*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            href={data.website}
            target="_blank"
            component="a"
            sx={{
              textDecoration: "none",
              color: "#b3e5fc",
              fontFamily: "Bitcount Grid Double",
              fontWeight: 400,
              display: "block",
              mt: 1,
              marginRight: "30px",
            }}
          >
            Visit Website
          </Button>

          <Button
            variant="text"
            component="a"
            sx={{
              textDecoration: "none",
              color: "#b3e5fc",
              fontFamily: "Bitcount Grid Double",
              fontWeight: 400,
              display: "block",
              mt: 1,
            }}
          >
            Read + View More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
