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
  "I don't have a reservation.",
  "Hard to get restaurant in NYC...",
  "Alright I'm in the middle of my shift...",
  "Cab driver.",
  "Solo lunch.",
  "Solo dinner.",
  "Ertan.",
  "Let's take off the hat.",
  "Gotta show some respect.",
  "The hospitality was...",
  "Tacos, steak, duck...",
  "Thank you so much.",
  "My name's Ertan.",
  "No pork.",
  "I'm from Turkey.",
  "This smells mad good",
];

export default function HomePage() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "black",
        overflow: "hidden",
      }}
    >
      {/**floating words content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {floatingWords.map((word, i) => (
          <Typography
            key={i}
            sx={{
              position: "absolute",
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 80}%`,
              fontFamily: "Bitcount Grid Double",
              fontSize: "18px",
              color: "white",
              opacity: 0.3,
              animation: `floatAround ${
                6 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {word}
          </Typography>
        ))}
      </Box>

      {/**main content */}
      <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Bitcount Grid Double",
            fontWeight: "bold",
            color: "#fbb833",
          }}
        >
          Ertan Eats
        </Typography>

        <Button
          href="/locations"
          variant="contained"
          sx={{
            fontFamily: "Bitcount Grid Double",
            fontSize: "23px",
            background: "#1e3d6d",
            marginTop: "10px",
            marginRight: "15px",
          }}
        >
          Enter Here
        </Button>

        <Button
          href="https://www.instagram.com/newyorkturk/"
          target="_blank"
          variant="contained"
          sx={{
            fontFamily: "Bitcount Grid Double",
            fontSize: "23px",
            background: "#1e3d6d",
            marginTop: "10px",
          }}
        >
          Instagram
        </Button>
      </Box>
    </Box>
  );
}
