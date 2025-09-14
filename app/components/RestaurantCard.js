import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function RestaurantCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
      {data.image_url && (
        <CardMedia
          component="img"
          height="140"
          image={data.image_url}
          alt={data.name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2">
          {data.address}
        </Typography>
        <Typography variant="body2">
          {data.type_of_cuisine}
        </Typography>
        <Typography variant="body2">
          {data.michelin_star}
        </Typography>
      </CardContent>
      <CardActions>
        {data.website && (
          <Button
            size="small"
            onClick={() => window.open(data.website, "_blank")}
          >
            Visit Website
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
