import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Layout from "../components/layout";

const styles = theme => ({});

function TutorialsPage({ classes }) {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4">
          Tutorials
        </Typography>
        <Typography paragraph>
        </Typography>
      </Container>
    </Layout>
  );
}

export default withStyles(styles)(TutorialsPage);
