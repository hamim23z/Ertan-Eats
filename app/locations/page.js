import { createClient } from "../utils/supabase/server";
import RestaurantCard from "../components/RestaurantCard";
import { Box, Typography } from "@mui/material";

export default async function LocationsPage() {
  const supabase = await createClient();

  const { data: restaurants, error } = await supabase
    .from("restaurant")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Supabase fetch error:", error);
    return <Typography>Error loading restaurants.</Typography>;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          backgroundColor: "black",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontFamily: "Bitcount Grid Double",
            paddingTop: "50px",
            fontWeight: "bold",
            textAlign: { xs: "center", md: "center", lg: "center" },
          }}
        >
          Fine Dining in New York City
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          backgroundColor: "black",
          py: 10,
          px: { xs: 2, sm: 4 },
          minHeight: "100vh",
        }}
      >
        {restaurants?.map((r) => (
          <RestaurantCard key={r.id} data={r} />
        ))}
      </Box>
    </>
  );
}
