import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";
import { Avatar, Button, Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Container2 = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function User() {
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{
              fontSize: "2rem",
              fontWeight: "600",
              mb: 2.5,
            }}
          >
            Name
          </Typography>
          <Box sx={{}}>
            <Typography>RepoNum FollowNum FollowingNum</Typography>
            <Typography>Repositories Followers Following</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              height: "40px",
              width: "135px",
            }}
          >
            GO TO GITHUB
          </Button>
          <Box
            sx={{
              mt: 2,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "600",
                mb: 2.5,
                mt: 2,
              }}
            >
              My Repositories
            </Typography>
            <Stack
              spacing={2}
              sx={{
                width: "100%",
              }}
            >
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: "#068c49",
                        mb: 1,
                      }}
                    >
                      RepoName
                    </Typography>
                    <Typography
                      sx={{
                        mr: 2,
                      }}
                    >
                      Test
                    </Typography>
                  </Box>
                  <Typography>Repo Description</Typography>
                </Box>
              </Item>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: "#068c49",
                        mb: 1,
                      }}
                    >
                      RepoName
                    </Typography>
                    <Typography
                      sx={{
                        mr: 2,
                      }}
                    >
                      Test
                    </Typography>
                  </Box>
                  <Typography>Repo Description</Typography>
                </Box>
              </Item>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: "#068c49",
                        mb: 1,
                      }}
                    >
                      RepoName
                    </Typography>
                    <Typography
                      sx={{
                        mr: 2,
                      }}
                    >
                      Test
                    </Typography>
                  </Box>
                  <Typography>Repo Description</Typography>
                </Box>
              </Item>
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default User;
