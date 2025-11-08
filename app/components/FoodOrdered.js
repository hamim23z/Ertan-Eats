"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import { createClient } from "../utils/supabase/client";

export default function FoodOrdered({ restaurantId }) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (restaurantId === undefined || restaurantId === null) {
      setOrders([]);
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const supabase = createClient();

        const { data, error } = await supabase
          .from("food_ordered")
          .select("id, item_name, rating, restaurant_id")
          .eq("restaurant_id", restaurantId)
          .order("id", { ascending: true });

        if (error) throw error;

        setOrders(data || []);
      } catch (err) {
        console.error("Error:", err);
        setError(
          err.message ||
            "Could not get the food ordered. Please watch the video instead."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [restaurantId]);

  if (error)
    return (
      <Typography color="error" sx={{ py: 2 }}>
        Error: {error}
      </Typography>
    );

  return (
    <Box sx={{ mt: 1, width: "100%" }}>
      {orders.map((order) => (
        <Box
          key={order.id}
          sx={{
            mb: 1.5,
            borderRadius: 2,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontFamily: "Bitcount Grid Double",
            }}
          >
            {order.item_name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "black",
              fontFamily: "Quantico",
              fontSize: "14px",
            }}
          >
            Rating: {order.rating}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
