import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import MenuIcon from "@material-ui/icons/Menu";
import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import blue from "@material-ui/core/colors/blue";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Ubuntu",
      "Roboto",
      "\"Helvetica Neue\"",
      "Arial",
      "sans-serif",
      "\"Apple Color Emoji\"",
      "\"Segoe UI Emoji\"",
      "\"Segoe UI Symbol\"",
    ].join(","),
    fontSize: 13,
  },
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
    //width: 275,
  },
}));

export default function() {
  const classes = useStyles();

  let Project = class {
    constructor(name, description, tools, link = null, sourceCodeLink = null, downloadLink = null, status = null) {
      this.name = name;
      this.description = description;
      this.tools = tools;
      this.link = link;
      this.sourceCodeLink = sourceCodeLink;
      this.downloadLink = downloadLink;
      this.status = status;
    }

    card(index, height) {
      let cardContent = (
        <CardContent style={{height: this.sourceCodeLink == null && this.downloadLink == null ? height + "px" : (height - 62.2812) + "px" }}>
          <Typography gutterBottom variant="h6" component="h2">
            {this.name}
          </Typography>
          <Typography paragraph variant="body2" color="textSecondary" component="p">
            {this.description}
          </Typography>
          <Chip
            label={this.tools.join(", ")}
            icon={<CodeIcon /*style={{ color: '#ffffff' }}*//>}
            // color="primary"
            // style={{ backgroundColor: blue[900], color: "#ffffff" }}
          />
        </CardContent>
      );

      return (
        <Grid item md={3}>
          <Card key={index} className={classes.card}>
            {this.link == null ? cardContent : (
              <CardActionArea href={this.link}>
                {cardContent}
              </CardActionArea>
            )}
            {(this.sourceCodeLink == null && this.downloadLink == null) || (
              <CardActions disableSpacing>
                {this.sourceCodeLink == null || (
                  <IconButton aria-label="GitHub" href={this.sourceCodeLink}>
                    <GitHubIcon/>
                  </IconButton>
                )}
                {this.downloadLink == null || (
                  <IconButton aria-label="Download" href={this.downloadLink}>
                    <GetAppIcon/>
                  </IconButton>
                )}
              </CardActions>
            )}
          </Card>
        </Grid>
      );
    }
  };
  let desktopApps = [
    new Project(
      "Automaton Tool",
      "Educational tool for finite automata, developed for my third year project at university. It's certainly one of the most sizable projects I've worked on. I'll create a more modern (possibly web-based) remake of this at some point.",
      ["Java", "JavaFX"],
    ),
    new Project(
      "RPN Calculator",
      "Simple RPN calculator that evaluates a given postfix (RPN) expression and converts it to infix and prefix (PN) notation.",
      ["Java", "JavaFX"],
      null,
      "https://github.com/Ruben9922/rpn-calculator",
      "https://github.com/Ruben9922/rpn-calculator/releases",
    ),
    new Project(
      "Snake Command-Line Game",
      "Command-line version of the classic Snake game.",
      ["C++"],
      null,
      "https://github.com/Ruben9922/snake-cmd",
      null,
      "In development",
    ),
  ];
  let webApps = [
    new Project(
      "Fast Click Game",
      "Simple fast click game.",
      ["JS", "React"],
      "https://rubendougall.co.uk/projects/fast-click-game/",
      "https://github.com/Ruben9922/fast-click-game",
    ),
    new Project(
      "Unix Permissions Calculator",
      "Convert between different notations for Unix permissions.",
      ["JS", "React"],
      "https://rubendougall.co.uk/projects/permissions-calculator/",
      "https://github.com/Ruben9922/permissions-calculator",
    ),
    new Project(
      "Click Game",
      "Incremental game in which you build up your score by pressing a button or purchasing in-game items.",
      ["JS", "React"],
      "https://rubendougall.co.uk/projects/click-game/",
      "https://github.com/Ruben9922/click-game",
    ),
    new Project(
      "Wordsearch Generator",
      "Generate a wordsearch from a list of words.",
      ["JS", "React"],
      "https://rubendougall.co.uk/projects/wordsearch/",
      "https://github.com/Ruben9922/wordsearch",
    ),
  ];
  let storeApps = [
    new Project(
      "Binary Converter",
      "Convert between different numeral systems (decimal, binary, octal, hex or any other between base 2 and base 36).",
      ["Java"],
      "https://play.google.com/store/apps/details?id=com.ruben9922.binaryconverter"
    ),
    new Project(
      "Super Click (Android)",
      "Simple fast click game.",
      ["Java"],
      "https://play.google.com/store/apps/details?id=com.ruben9922.superclick"
    ),
    new Project(
      "Super Click (Windows)",
      "Simple fast click game.",
      ["C#"],
      "https://www.microsoft.com/en-gb/p/super-click/9wzdncrfjtrq"
    ),
  ];
  let otherApps = [
    new Project(
      "Bill Splitter",
      "Bill splitting application, built as part of a web development module in my first year at university.",
      ["PHP", "SQLite"],
    ),
    new Project(
      "Quadratic Equation Solver",
      "Find the solution of quadratic equations. I'll make a modern version of this at some point.",
      ["PHP"],
    ),
  ];

  return (
    <ThemeProvider theme={theme} className={classes.root}>
      <CssBaseline/>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ruben Dougall
          </Typography>
          <Button color="inherit" href="/projects">Projects</Button>
          <Button color="inherit" href="/tutorials">Tutorials</Button>
          <Button color="inherit" href="/about">About</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" style={{ fontWeight: "bold" }} gutterBottom>
          Projects
        </Typography>
        <Typography paragraph>
          This page lists some of the main projects I have been working on. For some projects, more information can be found in the README of the GitHub repository. A more complete list, including many unfinished projects, can be found on <Link href="https://github.com/Ruben9922">GitHub</Link>.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Desktop Apps
        </Typography>
        <Grid container spacing={4} /*style={{ backgroundColor: "#f5f5f5"}}*/>
          {desktopApps.map((project, index) => project.card(index, 250))}
        </Grid>
        <Typography variant="h5" component="h2" gutterBottom>
          Web Apps
        </Typography>
        <Grid container spacing={4} /*style={{ backgroundColor: "#f5f5f5"}}*/>
          {webApps.map((project, index) => project.card(index, 250))}
        </Grid>
        <Typography variant="h5" component="h2" gutterBottom>
          Store Apps
        </Typography>
        <Grid container spacing={4} /*style={{ backgroundColor: "#f5f5f5"}}*/>
          {storeApps.map((project, index) => project.card(index, 200))}
        </Grid>
        <Typography variant="h5" component="h2" gutterBottom>
          Other
        </Typography>
        <Grid container spacing={4} /*style={{ backgroundColor: "#f5f5f5"}}*/>
          {otherApps.map((project, index) => project.card(index, 200))}
        </Grid>
      </Container>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </ThemeProvider>
  );
}
