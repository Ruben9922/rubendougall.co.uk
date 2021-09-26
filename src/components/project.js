import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import CodeIcon from "@material-ui/icons/Code";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5),
  },
  cardTitle: {
    marginTop: "initial",
    marginBottom: "initial",
  }
}));

function Project({
  name,
  description,
  tools,
  link,
  sourceCodeLink,
  downloadLink,
  inDevelopment,
}) {
  const classes = useStyles();

  const cardContent = (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
        {name}
      </Typography>
      <Typography paragraph variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
      <Chip
        label={tools.join(", ")}
        icon={<CodeIcon /*style={{ color: '#ffffff' }}*//>}
        color="primary"
        className={classes.chip}
        size="small"
      />
      {inDevelopment && <Chip
        label="In development"
        icon={<HourglassEmptyIcon /*style={{ color: '#ffffff' }}*//>}
        className={classes.chip}
        size="small"
      />}
    </CardContent>
  );

  return (
    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: "100%"}}>
      {link === undefined ? cardContent :
        <CardActionArea href={link}>
          {cardContent}
        </CardActionArea>
      }
      {(sourceCodeLink === undefined && downloadLink === undefined) ||
      <CardActions disableSpacing>
        {sourceCodeLink === undefined ||
          <Tooltip title="GitHub repository">
            <IconButton aria-label="GitHub" href={sourceCodeLink}>
              <GitHubIcon/>
            </IconButton>
          </Tooltip>
        }
        {downloadLink === undefined ||
          <Tooltip title="Download">
            <IconButton aria-label="Download" href={downloadLink}>
              <GetAppIcon/>
            </IconButton>
          </Tooltip>
        }
      </CardActions>
      }
    </Card>
  );
}

export default Project;
