import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Spacer from "components/shared/spacer/Spacer";
import { useEffect, useState } from "react";
import { useTodoList } from "stores/Todos";

const FormTodo = () => {
  const { palette } = useTheme();
  const [data, setData] = useState({ name: "", status: "new" });
  const [update, setUpdate] = useState(false);
  const { sTodo, addTodo, callUpdate, updateTodo } = useTodoList();

  const handleChange = (e: any) => {
    setData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    addTodo(data.name, data.status);
    setData({ name: "", status: "new" });
  };

  const handleUpdate = () => {
    updateTodo(sTodo.id, data.name, data.status);
    setUpdate(false);
    setData({ name: "", status: "new" });
  };

  const handleCancel = () => {
    setUpdate(false);
    setData({ name: "", status: "new" });
  };

  useEffect(() => {
    if (sTodo.id !== "") {
      setUpdate(true);
      setData({ name: sTodo.name, status: sTodo.status });
    }
  }, [sTodo]);

  return (
    <Box sx={{ border: "1px solid #ddd", padding: "1em 0.5em", position: "relative" }}>
      <Typography
        variant="h6"
        color={palette.primary.main}
        sx={{
          position: "absolute",
          fontWeight: "bold",
          top: "-20px",
          left: "50%",
          transform: "translatex(-50%)",
          backgroundColor: "white",
        }}
      >
        {update ? "CẬP NHẬT" : "THÊM MỚI"}
      </Typography>
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
      <Box display="flex">
        {update ? (
          <>
            <Button variant="contained" color="warning" onClick={handleUpdate}>
              Cập nhật
            </Button>
            <Spacer size={15} />
            <Button variant="contained" color="secondary" onClick={handleCancel}>
              Hủy
            </Button>
          </>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Thêm
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default FormTodo;
