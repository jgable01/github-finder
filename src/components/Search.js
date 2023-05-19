import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";
import { Button, Typography } from "@mui/material";

function Search() {
  return (
    <div className="wrapper">
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",            
          }}
        >
          <Typography variant="h1" component="div" gutterBottom sx={
            {
              fontSize: "3rem",
              fontWeight: "600",
              mb: 2.5,
            }
          }>
            Github Finder
          </Typography>
          <Box sx={
            {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          }>
          <TextField id="outlined-basic" label="Profile" variant="outlined" size="small" />
          <Button variant="contained" sx={{ 
            ml: 2,
            height: "40px",
            width: "135px",
            }}>
            Search
          </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Search;
