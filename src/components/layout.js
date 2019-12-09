import React from "react";
import theme from "../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./header";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Layout({ children, classes }) {
  return (
    <ThemeProvider theme={theme} className={classes.root}>
      <CssBaseline/>
      <Header/>

      {children}

      {/*TODO: Replace this with Ubuntu font*/}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Layout);
