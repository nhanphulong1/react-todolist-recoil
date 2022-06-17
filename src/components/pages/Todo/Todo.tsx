import { Container, Grid, Typography, useTheme } from "@mui/material";
import Spacer from "components/shared/spacer/Spacer";
import React from "react";
import FormTodo from "./formTodo/FormTodo";
import TableTodo from "./tableTodo/TableTodo";

const Todo = () => {
  const { palette } = useTheme();
  return (
    <Container maxWidth="lg">
      <Spacer axis="vertical" size={55} />
      <Typography variant="h2" component="div" textAlign="center" color={palette.error.main}>
        Todos List
      </Typography>
      <Spacer axis="vertical" size={35} />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormTodo></FormTodo>
        </Grid>
        <Grid item xs={9}>
          <TableTodo></TableTodo>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Todo;
