import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
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
import { Link as GatsbyLink } from "gatsby";

export default function Header({ darkMode, toggleDarkMode }) {
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
          <Link to="/" color="inherit" underline="none" component={GatsbyLink}>
            Ruben Dougall
          </Link>
        </Typography>
        <Button color="inherit" to="/projects" component={GatsbyLink}>Projects</Button>
        {/*<Button color="inherit" href="/tutorials">Tutorials</Button>*/}
        <Button color="inherit" to="/about" component={GatsbyLink}>About</Button>
        <Tooltip title="GitHub repository">
          <IconButton aria-label="GitHub" href="https://github.com/Ruben9922/rubendougall.co.uk" color="inherit">
            <GitHubIcon/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Toggle dark mode">
          <IconButton aria-label="GitHub" onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
