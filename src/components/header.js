import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import CodeIcon from "@material-ui/icons/Code";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

export default function Header() {
  const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2.5),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <CodeIcon edge="start" className={classes.menuButton} color="inherit"/>
        <Typography variant="h6" className={classes.title}>
          <Link href="/" color="inherit">
            Ruben Dougall
          </Link>
        </Typography>
        <Button color="inherit" href="/projects">Projects</Button>
        <Button color="inherit" href="/tutorials">Tutorials</Button>
        <Button color="inherit" href="/about">About</Button>
      </Toolbar>
    </AppBar>
  );
};
