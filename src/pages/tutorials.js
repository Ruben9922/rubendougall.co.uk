import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Layout from "../components/layout";

function TutorialsPage() {
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

export default TutorialsPage;
