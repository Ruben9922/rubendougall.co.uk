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

const styles = theme => ({});

function TutorialsPage({ classes }) {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Tutorials
        </Typography>
        <Typography paragraph>
        </Typography>
      </Container>
    </Layout>
  );
}

export default withStyles(styles)(TutorialsPage);
