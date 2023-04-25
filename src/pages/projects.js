import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Project from "../components/project"
import Layout from "../components/layout"
import SEO from "../components/seo"

function ProjectsPage() {
  const projectTypes = [
    {
      name: "Command-Line Apps",
      projects: [
        {
          name: "Snake Game",
          description: "Command-line version of the classic Snake game.",
          tools: ["Python"],
          sourceCodeLink: "https://github.com/Ruben9922/snake-cmd",
        },
      ],
    },
    {
      name: "Desktop Apps",
      projects: [
        {
          name: "Automaton Tool",
          description: <span>Educational tool for <Link href='https://en.wikipedia.org/wiki/Finite-state_machine' color="secondary">finite automata</Link> (FAs), developed for my third year project at university. Features include: running an FA, determinising an FA, minimising a DFA using Hopcroft's algorithm and drawing the state-transition diagram.</span>,
          tools: ["Java", "JavaFX"],
        },
        {
          name: "RPN Calculator",
          description: "Simple RPN calculator that evaluates a given postfix (RPN) expression and converts it to infix and prefix (PN) notation.",
          tools: ["Java", "JavaFX"],
          sourceCodeLink: "https://github.com/Ruben9922/rpn-calculator",
          downloadLink: "https://github.com/Ruben9922/rpn-calculator/releases",
        },
      ],
    },
    {
      name: "Web Apps",
      projects: [
        {
          name: "Automaton Tool (React)",
          description: "Educational tool for finite automata. React rewrite of my third-year project from university.",
          tools: ["TypeScript", "React", "Material UI"],
          sourceCodeLink: "https://github.com/Ruben9922/automaton-tool-react",
          inDevelopment: true,
        },
        {
          name: "Wordsearch Generator",
          description: "Generate a wordsearch from a list of words. Developed the wordsearch generation algorithm from first principles.",
          tools: ["TypeScript", "React", "Material UI"],
          link: "https://rubendougall.co.uk/projects/wordsearch/",
          sourceCodeLink: "https://github.com/Ruben9922/wordsearch",
        },
        {
          name: "Flags Quiz",
          description: "Simple flags quiz game.",
          tools: ["TypeScript", "React", "Chakra UI"],
          link: "https://rubendougall.co.uk/projects/flags-quiz",
          sourceCodeLink: "https://github.com/Ruben9922/flags-quiz",
          inDevelopment: true,
        },
        {
          name: "Click Game",
          description: "Incremental game in which you build up your score by clicking repeatedly or purchasing in-game items.",
          tools: ["TypeScript", "React", "Semantic UI"],
          link: "https://rubendougall.co.uk/projects/click-game/",
          sourceCodeLink: "https://github.com/Ruben9922/click-game",
        },
        {
          name: "Binary Converter",
          description: "Convert between different numeral systems (e.g. binary, decimal, hex, octal).",
          tools: ["TypeScript", "React", "Chakra UI"],
          link: "https://rubendougall.co.uk/projects/binary-converter",
          sourceCodeLink: "https://github.com/Ruben9922/binary-converter",
        },
        {
          name: "Unix Permissions Calculator",
          description: "Convert between different notations for Unix permissions.",
          tools: ["JS", "React", "Semantic UI"],
          link: "https://rubendougall.co.uk/projects/permissions-calculator/",
          sourceCodeLink: "https://github.com/Ruben9922/permissions-calculator",
        },
        {
          name: "Fast Click Game",
          description: "Simple fast click game I built to help me learn React.",
          tools: ["JS", "React", "Bootstrap"],
          link: "https://rubendougall.co.uk/projects/fast-click-game/",
          sourceCodeLink: "https://github.com/Ruben9922/fast-click-game",
        },
      ],
    },
    {
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
    },
    {
      name: "Libraries",
      projects: [
        {
          name: "Python Console Utilities",
          description: "Simple utility functions for command-line applications.",
          tools: ["Python"],
          sourceCodeLink: "https://github.com/Ruben9922/python-console-utilities",
        },
      ],
    },
    {
      name: "Past Projects",
      projects: [
        {
          name: "Bill Splitter",
          description: "Bill splitting application, built as part of a web development module in my first year at university.",
          tools: ["PHP", "SQLite"],
        },
        {
          name: "Hair Salon Booking System",
          description: "Booking system for a local hair salon, built for my A-level Computing project.",
          tools: ["C#", "WPF", "MySQL"],
        },
        {
          name: "Quadratic Equation Solver",
          description: "Find the solution of quadratic equations.",
          tools: ["PHP"],
        },
      ],
    },
  ];

  return (
    <Layout>
      <SEO title="Projects"/>
      <Container maxWidth="lg">
        <Typography variant="h4">
          Projects
        </Typography>
        <Typography paragraph>
          This page lists the main projects I have been working on. For some projects, more information can be found in the README of the GitHub repository. A more complete list, including many unfinished projects, can be found on <Link href="https://github.com/Ruben9922" color="secondary">GitHub</Link>.
        </Typography>
        {projectTypes.map((projectType, projectTypeIndex) =>
          <div key={projectTypeIndex}>
            <Typography variant="h5">
              {projectType.name}
            </Typography>
            <Grid container spacing={3}>
              {projectType.projects.map((project, projectIndex) =>
                <Grid item sm={6} md={4} key={projectIndex} style={{display: "flex", width: "100%"}}>
                  <Project
                    name={project.name}
                    description={project.description}
                    tools={project.tools}
                    link={project.link}
                    sourceCodeLink={project.sourceCodeLink}
                    downloadLink={project.downloadLink}
                    inDevelopment={project.inDevelopment}
                  />
                </Grid>
              )}
            </Grid>
          </div>,
        )}
      </Container>
    </Layout>
  );
}

export default ProjectsPage;
