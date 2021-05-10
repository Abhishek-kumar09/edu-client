import React, { useEffect, useState } from "react";
import MediaCard from "../../components/SmallCourseCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "../../utils/mockaxios";

const data = Array(10).fill({
  id: 1,
  image: "https://img.mobiscroll.com/demos/worms3.png",
  title: "Worms 3",
  level: "Beginner",
  length: "35",
  price: 94,
});

const useStyles = makeStyles({
  container: {
    marginBottom: "2rem",
    marginLeft: "-1rem",
    padding: "1rem 0",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    overflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  mainHeading: {
    marginTop: "1rem",
    fontSize: "1rem",
  },
});

function Recommended() {
  const classes = useStyles();
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    axios
      .get("/api/courses/all")
      .then((result) => {
        setCourses(result.data);
        console.log(Object.values(result.data.foundation));
      })
      .catch((e) => {
        console.log("result error", e);
      });
  }, []);

  if (courses === null) {
    console.log(courses);
    return "";
  }

  return (
    <>
      <Typography className={classes.mainHeading} gutterBottom variant="h5" component="h2">
        Recommended Courses
      </Typography>
      <div className={classes.container}>
        {Object.values(courses.foundation).map((item, i) => (
          <MediaCard key={i} data={item} />
        ))}
      </div>

      <Typography className={classes.mainHeading} gutterBottom variant="h5" component="h2">
        Top Courses
      </Typography>
      <div className={classes.container}>
        {data.map((item, i) => (
          <MediaCard key={i} data={item} />
        ))}
      </div>

      <Typography className={classes.mainHeading} gutterBottom variant="h5" component="h2">
        Upcoming Courses
      </Typography>
      <div className={classes.container}>
        {data.map((item, i) => (
          <MediaCard key={i} data={item} />
        ))}
      </div>
    </>
  );
}

export default Recommended;
