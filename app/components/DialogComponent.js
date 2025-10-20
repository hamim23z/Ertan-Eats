import React from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";

export default function DialogCard({ open, handleClose, data }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
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
