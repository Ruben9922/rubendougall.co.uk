import React from "react";
import baseTheme from "../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./header";
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles"
import SEO from "./seo";
import { useMediaQuery } from "@material-ui/core"

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Layout({ children, classes }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [nightMode, setNightMode] = React.useState(prefersDarkMode);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: nightMode ? "dark" : "light",
        },
      }, baseTheme),
    [nightMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <SEO/>
      <CssBaseline/>
      <Header nightMode={nightMode} setNightMode={setNightMode}/>

      {children}

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Layout);
