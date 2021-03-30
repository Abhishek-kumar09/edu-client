import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  //   Avatar,
} from "@material-ui/core";
import clsx from "clsx";
import LabelImportantSharpIcon from "@material-ui/icons/LabelImportantSharp";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {},
  margin: {
    margin: theme.spacing(2, 0),
  },
  afterCourse: {
    color: "#4C0098",
  },
  prerequisites: {
    color: "#4C0098",
  },
}));

const Perks = ({ perks, afterCourse, prerequisites }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={clsx(classes.heading, classes.margin)}>
        Course Perks
      </Typography>
      <Box mb={2}>
        <List dense={true}>
          {perks.map((perk, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <LabelImportantSharpIcon />
              </ListItemAvatar>
              <ListItemText>{perk}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography variant="h5" className={classes.afterCourse}>
        After Course
      </Typography>
      <Typography variant="h2">What you Are and can do</Typography>
      <Box mb={2}>
        <List dense={true}>
          {afterCourse.map((item, index) => (
            <ListItem key={index}>
              <ListItemText>
                <Typography variant="body1">{item}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography variant="h5" className={classes.prerequisites}>
        Prerequisites
      </Typography>
      <Typography variant="h2">What you should know before this course?</Typography>
      <Typography variant="body1" className={clsx(classes.margin)}>
        {prerequisites}
      </Typography>
      <Typography variant="body2" className={""}>
        We have same course in beginner and advanced level.
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="caption" className={classes.margin}>
          <Link href="#" color="textPrimary">
            Checkout Now
          </Link>
        </Typography>
        <ArrowForwardIosIcon fontSize="small" color="primary" />
      </Box>
    </div>
  );
};

export default Perks;