"use client";
import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DialogCard from "./DialogComponent";

export default function RestaurantCard({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          sx={{
            textAlign: "center",
            fontFamily: "Bitcount Grid Double",
            fontWeight: 700,
            color: "white",
          }}
        >
          {data.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "white", fontFamily: "Quantico", pb: "3px" }}
        >
          Address: {data.address}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", fontFamily: "Quantico", pb: "3px" }}
        >
          Cuisine: {data.type_of_cuisine}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", fontFamily: "Quantico", pb: "3px" }}
        >
          Michelin Stars: {data.michelin_star}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
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
              mr: 3,
            }}
          >
            Visit Website
          </Button>

          <Button
            variant="text"
            onClick={handleOpen}
            sx={{
              textDecoration: "none",
              color: "#b3e5fc",
              fontFamily: "Bitcount Grid Double",
              fontWeight: 400,
            }}
          >
            Read + View More
          </Button>
        </Box>
      </CardContent>

      <DialogCard open={open} handleClose={handleClose} data={data} />
    </Card>
  );
}
