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
  const [user, setUser] = useState([
    {
      name: "John Doe",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      repositories: "",
      followers: "",
      following: "",
      github: "",
    },
  ]);
  const [userRepos, setUserRepos] = useState([]);

  const { username } = useParams();

  console.log(username);

  const userEndpoint = `https://api.github.com/users/${username}`;
  const repoEndpoint = `https://api.github.com/users/${username}/repos`;

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(userEndpoint);
        setUser({
          name: data.name,
          avatar_url: data.avatar_url,
          followers: data.followers,
          repositories: data.public_repos,
          following: data.following,
          github: data.html_url,
        });
      } catch (error) {
        console.error(error);
      }
    };

    const getRepos = async () => {
      try {
        const { data } = await axios.get(repoEndpoint);
        const repositories = data.map((data) => ({
          name: data.name,
          update: new Date(data.updated_at).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
        }));
        setUserRepos(repositories);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
    getRepos();
  }, []);

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
          <Avatar alt="Remy Sharp" src={user.avatar_url} />
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
            {username}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "370px",
            }}
          >
            <Typography>{user.repositories}</Typography>
            <Typography>{user.followers}</Typography>
            <Typography>{user.following}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              mb: 2.5,
              width: "300px",
            }}
          >
            <Typography>Repositories</Typography>
            <Typography>Followers</Typography>
            <Typography>Following</Typography>
          </Box>
          <Button
            variant="contained"
            href={user.github}
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
              {userRepos.map((repo) => (
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
                        {repo.name}
                      </Typography>
                      <Typography
                        sx={{
                          mr: 2,
                        }}
                      >
                        {repo.update}
                      </Typography>
                    </Box>
                    <Typography>{repo.about}</Typography>
                  </Box>
                </Item>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default User;
