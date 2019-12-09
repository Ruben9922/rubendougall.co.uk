import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#66b4ff",
      main: "#2185d0",
      dark: "#00599e",
      contrastText: "#000000",
    },
  },
});

export default theme;