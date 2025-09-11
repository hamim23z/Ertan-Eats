import { Typography, Box, Button } from "@mui/material";
import "@fontsource/bitcount-grid-double";

const floatingWords = [
  "I'm about to dog this down.",
  "Let's see how expensive...",
  "Alright, I just got out of work...",
  "Fine Dining.",
  "Michelin Starred Restaurant.",
  "Thank you.",
  "Leave a tip.",
  "This smells good",
  "10 out of 10",
  "9 out of 10",
  "Oh wow, this is amazing.",
  "",
];

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "center", md: "center" },
        alignItems: { xs: "center", md: "center" },
        height: "100vh",
        background: "black",
        textAlign: { xs: "center", md: "center" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Bitcount Grid Double",
          fontWeight: "bold",
          color: "#fbb833	",
          justifyContent: { xs: "center", md: "center" },
          mx: "auto",
        }}
      >
        Ertan Eats
      </Typography>

      <Button
        type="a"
        href="/locations"
        variant="contained"
        sx={{
          fontFamily: "Bitcount Grid Double",
          fontSize: "23px",
          background: "#1e3d6d",
          marginTop: "10px",
        }}
      >
        Enter Here
      </Button>
    </Box>
  );
}
