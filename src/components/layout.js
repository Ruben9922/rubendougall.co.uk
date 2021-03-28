import React from "react";
import baseTheme from "../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./header";
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles"
import SEO from "./seo";
import { useMediaQuery } from "@material-ui/core"
import { blue, pink } from "@material-ui/core/colors"

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Layout({ children, classes }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? blue[800] : blue[900],
          },
          secondary: {
            main: darkMode ? pink[200] : "#dc004e",
          },
        },
      }, baseTheme),
    [darkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <SEO/>
      <CssBaseline/>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      {children}

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Layout);
