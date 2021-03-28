import React from "react";
import baseTheme from "../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./header";
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles"
import SEO from "./seo";
import { blue, pink } from "@material-ui/core/colors"
import useDarkMode from "use-dark-mode";

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Layout({ children, classes }) {
  // Setting onChange to empty function to prevent default behaviour of automatically setting the <body> element's class
  const darkMode = useDarkMode(false, { onChange: () => {} });

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode.value ? "dark" : "light",
          primary: {
            main: darkMode.value ? blue[800] : blue[900],
          },
          secondary: {
            main: darkMode.value ? pink[200] : "#dc004e",
          },
        },
      }, baseTheme),
    [darkMode.value],
  );

  return (
    <ThemeProvider theme={theme}>
      <SEO/>
      <CssBaseline/>
      <Header darkMode={darkMode.value} toggleDarkMode={darkMode.toggle}/>

      {children}

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Layout);
