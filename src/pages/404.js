import React from "react";
import SEO from "../components/seo";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link as GatsbyLink } from "gatsby";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const styles = theme => ({
  container: {
    textAlign: "center",
  },
  icon: {
    fontSize: "1.6em",
    position: "relative",
    top: "0.245em",
    // height: "1em",
    // width: "1em",
    // display: "inline-flex",
    // alignSelf: "center",
  },
  subtitle: {
    marginTop: 0,
  },
  bodyText: {
    marginBottom: "2em",
  },
});

function NotFoundPage({ classes }) {
  return (
    <Layout>
      <SEO title="Not Found"/>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h1">
          404
        </Typography>
        <Typography variant="h6" component="h2" className={classes.subtitle}>
          Page Not Found
        </Typography>
        <Typography variant="body1" paragraph className={classes.bodyText}>
          The page you are looking for could not be found.
        </Typography>
        <Button to="/" color="secondary" component={GatsbyLink}>
          Go to Home
        </Button>
      </Container>
    </Layout>
  );
}

export default withStyles(styles)(NotFoundPage);
