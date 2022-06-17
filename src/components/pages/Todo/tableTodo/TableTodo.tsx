import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Badge from "components/shared/badge/Badge";
import { useTodoList } from "stores/Todos";

const TableTodo = () => {
  const { todo, deleteTodo } = useTodoList();

  const getItem = (status: string) => {
    switch (status) {
      case "new":
        return <Badge color="new">{status}</Badge>;
      case "update":
        return <Badge color="update">{status}</Badge>;
      default:
        return <Badge color="complete">{status}</Badge>;
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you delete?")) deleteTodo(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={10}>STT</TableCell>
            <TableCell align="left">name</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todo?.map((item) => (
            <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" align="center" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="center">{getItem(item.status)}</TableCell>
              <TableCell align="center">
                <span>
                  <EditIcon color="warning" />
                </span>
                <span onClick={() => handleDelete(item.id)}>
                  <DeleteIcon color="error" />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTodo;
