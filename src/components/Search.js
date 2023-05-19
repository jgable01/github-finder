import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import User from "./User";


function Search() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [error, setError] = useState(null);
  const valueRef = useRef(null);

  const handleUser = async (event) => {
    event.preventDefault();
    const input = valueRef.current.value.trim();
    console.log(input);
    if (input) {
      try {
        const token = 'ghp_Do4qqiJxgv4jw9stOB319yJm2SK8aB0a5ggo';
        const options = {headers: { Authorization: `Bearer ${token}`}};
        const userUrl = `https://api.github.com/users/${input}`;

        const response = await axios.get(userUrl);
        if (response.status === 200) {
          console.log("testing");
          setUser(input);
        }
        else {
          setError('Invalid username');
        }
      } catch (error) {
        setTimeout(() => {
          setError('Invalid username');
        }, 1500);
      };
      event.target.value = "";
    }
    else {
      setError('Please enter a username');
    }
  };
  useEffect(() => {
    if (user) {
      navigate(`/user/${user}`);
    }
  }, [user]);

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
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            sx={{
              fontSize: "3rem",
              fontWeight: "600",
              mb: 2.5,
            }}
          >
            Github Finder
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleUser}>
              <TextField
                id="outlined-basic"
                label="Profile"
                variant="outlined"
                size="small"
                name="user"
                inputRef={valueRef}
              />
              <Button
                variant="contained"
                onClick={handleUser}
                sx={{
                  ml: 2,
                  height: "40px",
                  width: "100px",
                }}
                type="submit"
              >
                Search
              </Button>
              {error && <Alert severity="error" sx={
                {
                  mt: 1
                }
              }>{error}</Alert>}
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Search;
