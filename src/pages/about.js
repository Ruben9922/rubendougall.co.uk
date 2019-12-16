import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Layout from "../components/layout";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ListSubheader from "@material-ui/core/ListSubheader";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

function AboutPage({ classes }) {
  const [open, setOpen] = React.useState(Array(4).fill(false));

  const handleClick = index => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  const modulesByYear = [
    {
      name: "First Year",
      modules: [
        "Programming for Computer Scientists",
        "Design of Information Structures",
        "Mathematics for Computer Scientists I",
        "Mathematics for Computer Scientists II",
        "Computer Organisation and Architecture",
        "Professional Skills",
        "Web Development Technologies",
        "Computer Security",
      ],
    },
    {
      name: "Second Year",
      modules: [
        "Operating Systems and Computer Networks",
        "Database Systems",
        "Formal Languages",
        "Algorithms",
        "Software Engineering",
        "Logic and Verification",
        "Artificial Intelligence",
        "Functional Programming",
      ],
    },
    {
      name: "Third Year",
      modules: [
        "Project: \"Educational Tool for Automata and Formal Languages\"",
        "Project Management for Computer Scientists",
        "Computer Graphics",
        "Compiler Design",
        "Advanced Databases",
        "Principles of Programming Languages",
        "Digital Forensics",
      ],
    },
    {
      name: "Fourth Year",
      modules: [
        "Group project: \"Analysis and Implementation of Smart Contracts on Blockchain Technology\"",
        "High-Performance Computing",
        "Formal Systems Development",
        "Computational Biology",
        "Data Mining",
        "Foundations of Data Analytics",
        "Advanced Computer Security",
      ],
    },
  ];

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          About
        </Typography>
        <Typography paragraph>
          I'm a Computer Science graduate from University of Warwick and .NET Developer at a local automotive consulting company.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          University
        </Typography>
        <Typography paragraph>
          Graduated from University of Warwick in MEng Computer Science.
        </Typography>
        <Typography paragraph>
          I worked as a tutor in lab sessions for the Programming for Computer Scientists and Functional Programming modules, assisting first-year students and answering their questions regarding exercises and coursework as well as Java, Haskell, Git and Linux in general.
        </Typography>
        <Typography paragraph>
          I participated in the J.P. Morgan Code for Good 2017 and UKIEPC 2016 & 2017 programming contests.
        </Typography>
        <Typography paragraph>
          During my time here, I have gained a detailed understanding of various areas of computer science, covering both theoretical and practical aspects.
        </Typography>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Completed modules
            </ListSubheader>
          }
          className={classes.root}>
          {modulesByYear.map((year, index1) => [
            <ListItem key={index1} button onClick={() => handleClick(index1)}>
              <ListItemText primary={year.name}/>
              {open[index1] ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>,
            <Collapse key={index1} in={open[index1]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {year.modules.map((module, index2) =>
                  <ListItem key={index2} className={classes.nested}>
                    <ListItemText primary={module}/>
                  </ListItem>,
                )}
              </List>
            </Collapse>,
          ])}
        </List>
        <Typography paragraph>
          My course involved completing numerous pieces of coursework. Some allowed me to put into practice the theory learnt during lectures; others involved researching further into the topic and forming my own ideas. They often involved writing a technical report which enabled me to perfect expressing complex processes in a clear, succinct way. Significant pieces of coursework included:
          {/* TODO: Finished adding links - e.g. wiki pages for algorithms
          TODO: Sort out card heights
          TODO: Add screenshots to projects page
          */}
          <ul>
            <li>Implementing data mining techniques, e.g., classification, dimensionality reduction, neural networks and parameter tuning (grid search), using NumPy, Scikit-Learn, Matplotlib and Keras in Python;</li>
            <li>Specifying and implementing abstract machines using <Link href="https://www.atelierb.eu/en/">Atelier B</Link>;</li>
            <li>Parallelising C++ programs using OpenMP and MPI;</li>
            <li>Preprocessing a resting-state fMRI data set using <Link href="http://rfmri.org/dpabi">DPABI</Link>;</li>
            <li>Analysing fMRI data of different brain regions by computing the Granger causality in MATLAB;</li>
            <li>Implementing sequence analysis algorithms, e.g., Needleman-Wunsch, neighbour joining, suffix tree generation, CLUSTALW and t-SNE;</li>
            <li>Using MATLAB to implement digital forensics techniques, e.g., watermarking, compression-based forensics, copy-move forgery detection and source identification.</li>
          </ul>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Computing
        </Typography>
        <Typography paragraph>
          I enjoy programming and work on numerous software projects in my spare time. I have strong software development skills and experience with a number of languages, frameworks and tools. My main languages are C#, Java, Python and JavaScript, but I'm also highly proficient with many others such as C/C++ and MATLAB. I'm also a daily Linux user, so I'm experienced with command-line tools, package managers and Bash scripting.
        </Typography>
        <Typography paragraph>
          I'm interested in pretty much all kinds of software, including command-line, GUI, web and 3D graphics applications. You may wish to visit the Projects page. I'm also interested in learning more about machine learning in Python and full-stack web applications in Django, having used these in my last year at university.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Music
        </Typography>
        <Typography paragraph>
          Outside of computing, I love house music, especially house, tech house and deep house, but like other genres too. I produce music recreationally and have taught myself how to DJ.
        </Typography>
      </Container>
    </Layout>
  );
}

export default withStyles(styles)(AboutPage);
