import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3AB0FF",
      contrastText: "white",
    },
    secondary: {
      main: "#DDDDDD",
      contrastText: "black",
    },
    warning: {
      main: "#FFC54D",
      contrastText: "black",
    },
  },
  shape: {
    // borderRadius: 0,
  },
  typography: {
    fontFamily: `"Nunito","Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 15,
    h2: {
      accentColor: "red",
      alignItems: "center",
      fontSize: 35,
      fontWeight: 700,
    },
  },
});

export default theme;
