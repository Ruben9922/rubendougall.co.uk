import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import CodeIcon from "@material-ui/icons/Code";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/Tooltip";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

export default function Header({ nightMode, setNightMode }) {
  const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
      marginTop: "initial",
      marginBottom: "initial",
    },
  }));
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        {/*<IconButton edge="start" className={classes.menuButton} color="inherit" href="/">*/}
        {/*  <CodeIcon />*/}
        {/*</IconButton>*/}
        <Typography variant="h6" className={classes.title}>
          <Link href="/" color="inherit" underline="none">
            Ruben Dougall
          </Link>
        </Typography>
        <Button color="inherit" href="/projects">Projects</Button>
        {/*<Button color="inherit" href="/tutorials">Tutorials</Button>*/}
        <Button color="inherit" href="/about">About</Button>
        <Tooltip title="GitHub repository">
          <IconButton aria-label="GitHub" href="https://github.com/Ruben9922/rubendougall.co.uk" color="inherit">
            <GitHubIcon/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Toggle night mode">
          <IconButton aria-label="GitHub" onClick={() => setNightMode(nm => !nm)} color="inherit">
            {nightMode ? <Brightness4Icon/> : <Brightness7Icon/>}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
