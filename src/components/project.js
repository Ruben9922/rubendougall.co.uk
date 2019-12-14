import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import CodeIcon from "@material-ui/icons/Code";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import { withStyles } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
    //width: 275,
  },
  cardContent: {
    height: props => {
      const {
        height,
        sourceCodeLink,
        downloadLink,
      } = props;
      const contentHeight = sourceCodeLink === undefined && downloadLink === undefined ? height : (height - 62.2812);
      return contentHeight + "px";
    },
  },
  toolsChip: {
    backgroundColor: blue[900],
    color: "#ffffff",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
});

class Project extends React.Component {
  render() {
    const {
      classes,
      index,
      height = 300,
      name,
      description,
      tools,
      link,
      sourceCodeLink,
      downloadLink,
      inDevelopment,
    } = this.props;

    const cardContent = (
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h6" component="h2">
          {name}
        </Typography>
        <Typography paragraph variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Chip
          label={tools.join(", ")}
          icon={<CodeIcon /*style={{ color: '#ffffff' }}*//>}
          color="secondary"
          className={`${classes.toolsChip} ${classes.chip}`}
        />
        {inDevelopment && <Chip
          label="In development"
          icon={<HourglassEmptyIcon /*style={{ color: '#ffffff' }}*//>}
          className={classes.chip}
        />}
      </CardContent>
    );

    return (
      <Grid item md={3}>
        <Card key={index} className={classes.card}>
          {link === undefined ? cardContent :
            <CardActionArea href={link}>
              {cardContent}
            </CardActionArea>
          }
          {(sourceCodeLink === undefined && downloadLink === undefined) ||
          <CardActions disableSpacing>
            {sourceCodeLink === undefined ||
            <IconButton aria-label="GitHub" href={sourceCodeLink}>
              <GitHubIcon/>
            </IconButton>
            }
            {downloadLink === undefined ||
            <IconButton aria-label="Download" href={downloadLink}>
              <GetAppIcon/>
            </IconButton>
            }
          </CardActions>
          }
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(Project);
