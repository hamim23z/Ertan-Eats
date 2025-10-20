import React from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import DisplayYoutubeShort from "./DisplayVideo";

export default function DialogCard({ open, handleClose, data }) {
  const restaurantId = data?.id;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          height: "80vh",
          maxHeight: "90vh",
        },
      }}
    >
      <DialogTitle
        variant="h4"
        sx={{
          textAlign: "center",
          fontFamily: "Bitcount Grid Double",
          fontWeight: "bold",
        }}
      >
        Video + Food Ordered
      </DialogTitle>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        {/**left side of screen */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: { xs: "center", md: "left" },
            px: 2,
            py: { xs: 10, md: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontFamily: "Bitcount Grid Double", fontWeight: "bold" }}
          >
            Instagram Video
          </Typography>

          {restaurantId !== undefined && restaurantId !== null ? (
            <DisplayYoutubeShort restaurantId={restaurantId} />
          ) : null}
        </Box>

        {/**right side of screen */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
            width: { xs: "100%", md: "40%" },
            pl: { md: 2 },
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              justifyContent: "center",
              fontFamily: "Bitcount Grid Double",
              fontWeight: "bold",
            }}
          >
            Food Ordered
          </Typography>

          {/**in here will probably be another database listing what was ordered + ratings */}
        </Box>
      </Box>

      <DialogContent>
        <DialogContentText></DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
