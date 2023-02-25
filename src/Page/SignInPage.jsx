import "../App.css";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="sign-in-container">
        <Container maxWidth="sm">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: 5,
                borderRadius: 5,
                bgcolor: "rgb(191, 191, 191)",
              }}
            >
              <Grid container direction="column" spacing={2}>
                <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                  <HttpsRoundedIcon sx={{ fontSize: 40 }} />
                </Grid>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid item>
                    <Box sx={{ p: 3 }}>
                      <TextField
                        type="email"
                        fullWidth
                        label="Enter your email id"
                        placeholder="Enter email id"
                        variant="outlined"
                        autoFocus
                        {...register("email", {
                          required: "Required",
                          pattern: {
                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                            message: "Invalid email address",
                          },
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                      ></TextField>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box sx={{ p: 3 }}>
                      <TextField
                        type="password"
                        fullWidth
                        label="Enter your password"
                        placeholder="Enter password"
                        variant="outlined"
                        autoFocus
                        {...register("password", {
                          required: "Required",
                          pattern: {
                            value:
                              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/i,
                            message: "weak password",
                          },
                        })}
                        error={!!errors?.password}
                        helperText={
                          errors?.password ? errors.password.message : null
                        }
                      ></TextField>
                    </Box>
                  </Grid>
                  <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ p: 3 }}>
                      <Button
                        type="submit"
                        color="success"
                        variant="contained"
                        startIcon={<DoneSharpIcon />}
                        sx={{
                          bgcolor: "rgb(51, 102, 255)",
                          color: "black",
                        }}
                      >
                        Sign in
                      </Button>
                    </Box>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default SignInPage;
