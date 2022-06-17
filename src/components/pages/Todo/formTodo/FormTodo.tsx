import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Spacer from "components/shared/spacer/Spacer";
import React, { ChangeEvent, useState } from "react";
import { useTodoList } from "stores/Todos";

const FormTodo = () => {
  const [data, setData] = useState({ name: "", status: "new" });
  const { addTodo } = useTodoList();

  const handleChange = (e: any) => {
    setData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    addTodo(data.name, data.status);
    setData({ name: "", status: "new" });
  };

  return (
    <Box sx={{ border: "1px solid #ddd", padding: "1em 0.5em" }}>
      <TextField
        type={"text"}
        label="Todo name"
        size="small"
        name="name"
        fullWidth
        value={data.name}
        onChange={handleChange}
      />
      <Spacer axis="vertical" size={20} />
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="status"
          value={data.status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="update">Update</MenuItem>
          <MenuItem value="complete">Complete</MenuItem>
        </Select>
      </FormControl>
      <Spacer axis="vertical" size={10} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Thêm
      </Button>
    </Box>
  );
};

export default FormTodo;
