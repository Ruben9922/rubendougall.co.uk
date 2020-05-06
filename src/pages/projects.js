import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Project from "../components/project";
import Layout from "../components/layout";

const styles = theme => ({
});

function ProjectsPage({ classes }) {
  let desktopApps = {
    name: "Desktop Apps",
    projects: [
      {
        name: "Automaton Tool",
        description: "Educational tool for finite automata, developed for my third year project at university. It's certainly one of the most sizable projects I've worked on. I'll create a more modern (possibly web-based) remake of this at some point.",
        tools: ["Java", "JavaFX"],
      },
      {
        name: "RPN Calculator",
        description: "Simple RPN calculator that evaluates a given postfix (RPN) expression and converts it to infix and prefix (PN) notation.",
        tools: ["Java", "JavaFX"],
        sourceCodeLink: "https://github.com/Ruben9922/rpn-calculator",
        downloadLink: "https://github.com/Ruben9922/rpn-calculator/releases",
      },
      {
        name: "Snake Command-Line Game",
        description: "Command-line version of the classic Snake game.",
        tools: ["C++"],
        sourceCodeLink: "https://github.com/Ruben9922/snake-cmd",
        inDevelopment: true,
      },
    ],
  };
  let webApps = {
    name: "Web Apps",
    projects: [
      {
        name: "Fast Click Game",
        description: "Simple fast click game.",
        tools: ["JS", "React"],
        link: "https://rubendougall.co.uk/projects/fast-click-game/",
        sourceCodeLink: "https://github.com/Ruben9922/fast-click-game",
      },
      {
        name: "Unix Permissions Calculator",
        description: "Convert between different notations for Unix permissions.",
        tools: ["JS", "React"],
        link: "https://rubendougall.co.uk/projects/permissions-calculator/",
        sourceCodeLink: "https://github.com/Ruben9922/permissions-calculator",
      },
      {
        name: "Click Game",
        description: "Incremental game in which you build up your score by pressing a button or purchasing in-game items.",
        tools: ["JS", "React"],
        link: "https://rubendougall.co.uk/projects/click-game/",
        sourceCodeLink: "https://github.com/Ruben9922/click-game",
      },
      {
        name: "Wordsearch Generator",
        description: "Generate a wordsearch from a list of words.",
        tools: ["JS", "React"],
        link: "https://rubendougall.co.uk/projects/wordsearch/",
        sourceCodeLink: "https://github.com/Ruben9922/wordsearch",
      },
    ],
  };
  let storeApps = {
    name: "Store Apps",
    projects: [
      {
        name: "Binary Converter",
        description: "Convert between different numeral systems (decimal, binary, octal, hex or any other between base 2 and base 36).",
        tools: ["Java"],
        link: "https://play.google.com/store/apps/details?id=com.ruben9922.binaryconverter",
      },
      {
        name: "Super Click (Android)",
        description: "Simple fast click game.",
        tools: ["Java"],
        link: "https://play.google.com/store/apps/details?id=com.ruben9922.superclick",
      },
      {
        name: "Super Click (Windows)",
        description: "Simple fast click game.",
        tools: ["C#"],
        link: "https://www.microsoft.com/en-gb/p/super-click/9wzdncrfjtrq",
      },
    ],
  };
  let otherApps = {
    name: "Other",
    projects: [
      {
        name: "Bill Splitter",
        description: "Bill splitting application, built as part of a web development module in my first year at university.",
        tools: ["PHP", "SQLite"],
      },
      {
        name: "Quadratic Equation Solver",
        description: "Find the solution of quadratic equations. I'll make a modern version of this at some point.",
        tools: ["PHP"],
      },
    ],
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
        <Typography paragraph>
          This page lists some of the main projects I have been working on. For some projects, more information can be found in the README of the GitHub repository. A more complete list, including many unfinished projects, can be found on <Link href="https://github.com/Ruben9922">GitHub</Link>.
        </Typography>
        {[desktopApps, webApps, storeApps, otherApps].map((projects, index1) =>
          <div key={index1}>
            <Typography variant="h5" component="h2" gutterBottom>
              {projects.name}
            </Typography>
            <Grid container spacing={3}>
              {projects.projects.map((project, index2) =>
                <Project
                  key={index2}
                  name={project.name}
                  description={project.description}
                  tools={project.tools}
                  link={project.link}
                  sourceCodeLink={project.sourceCodeLink}
                  downloadLink={project.downloadLink}
                  inDevelopment={project.inDevelopment}
                />)}
            </Grid>
          </div>,
        )}
      </Container>
    </Layout>
  );
}

export default withStyles(styles)(ProjectsPage);
