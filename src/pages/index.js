import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Layout from "../components/layout";
import Avatar from "@material-ui/core/Avatar";
import profileImage from "../images/ruben.jpg";
import InstagramIcon from "@material-ui/icons/Instagram";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  bigAvatar: {
    width: 200,
    height: 200,
  },
  centerAlign: {
    textAlign: "center",
  },
  centered: {
    margin: "auto",
  },
  button: {
    margin: theme.spacing(1),
  },
});

const IndexPage = ({ classes }) => {
  return (
    <Layout>
      <Container maxWidth="lg" className={classes.centerAlign}>
        <Avatar alt="Ruben Dougall" src={profileImage} className={`${classes.bigAvatar} ${classes.centered}`}/>
        <Typography variant="h4" component="h1">
          Ruben Dougall
        </Typography>
        <Typography variant="subtitle1">
          .NET Developer
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Computer Science graduate from University of Warwick
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<InstagramIcon/>}
          href="https://www.instagram.com/rubendougall/">
          Instagram
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<QueueMusicIcon/>}
          href="https://www.last.fm/user/ruben_rjd">
          Last.fm
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<EqualizerIcon/>}
          href="https://soundcloud.com/ruben-dougall">
          SoundCloud
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<LinkedInIcon/>}
          href="https://www.linkedin.com/in/rubendougall/">
          LinkedIn
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<GitHubIcon/>}
          href="https://github.com/Ruben9922">
          GitHub
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<QuestionAnswerIcon/>}
          href="https://stackoverflow.com/users/3806231/ruben9922">
          Stack Overflow
        </Button>
      </Container>
    </Layout>
  );
};

export default withStyles(styles)(IndexPage);
