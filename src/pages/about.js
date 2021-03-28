import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Layout from "../components/layout";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ListSubheader from "@material-ui/core/ListSubheader";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import SEO from "../components/seo";
import { Link as GatsbyLink } from "gatsby";

function AboutPage() {
  return (
    <Layout>
      <SEO title="About"/>
      <Container maxWidth="lg">
        <Typography variant="h4">
          About
        </Typography>
        <Typography paragraph>
          I'm a Computer Science graduate from the University of Warwick and .NET Developer at an automotive consulting company.
        </Typography>
        <Typography variant="h5">
          University
        </Typography>
        <Typography paragraph>
          Graduated from the University of Warwick in MEng Computer Science.
        </Typography>
        <Typography paragraph>
          Third-year project: <i>Educational Tool for Automata and Formal Languages</i>. Fourth-year project: <i>Analysis and Implementation of Smart Contracts Using Blockchain Technology</i>.
        </Typography>
        <Typography paragraph>
          I worked as a tutor in lab sessions for Java and Haskell programming modules, assisting first-year students and answering their questions regarding exercises and coursework, as well as Java, Haskell, Git and Linux in general. I was also a Computer Science "Cousin", giving advice to first-year students and answering their questions about the department and university life in general.
        </Typography>
        <Typography paragraph>
          I participated in the J.P. Morgan Code for Good 2017 and UKIEPC 2016 & 2017 programming contests.
        </Typography>
        <Typography variant="h5">
          Computing
        </Typography>
        <Typography paragraph>
          I enjoy programming and work on numerous software projects in my spare time. My main languages are TypeScript/JavaScript (ES6, React), Python, C# and Java, but I am also experienced in C/C++, PHP, MATLAB, SQL and others. Much of my programming knowledge is self-taught.
        </Typography>
        <Typography paragraph>
          I have always been a power user of computers. As a daily Linux user, I have made use of various command-line tools to configure a system and perform specific tasks. I enjoy completing various computing projects to improve my daily computing life&mdash;for example, setting up my own Ubuntu cloud storage server using a low-budget PC.
        </Typography>
        <Typography paragraph>
          Check out my projects on the <Link to="/projects" color="secondary" component={GatsbyLink}>projects page</Link>!
        </Typography>
        <Typography variant="h5">
          Music
        </Typography>
        <Typography paragraph>
          Outside of computing, I love house music, though recently I've been listening to a wide range of genres. I produce music recreationally and have taught myself how to DJ.
        </Typography>
      </Container>
    </Layout>
  );
}

export default AboutPage;
