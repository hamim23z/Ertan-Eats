import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";

export default function DialogCard({ open, handleClose, data }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Testing to see if Dialog actually opens.</DialogTitle>
      <DialogContent>
        <DialogContentText>Test test 123</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
