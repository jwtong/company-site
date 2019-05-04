import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Layout from "../components/layout";
import Image from "../components/image";
import {
  Firebase,
  LanguageRubyOnRails,
  React as ReactIcon,
  Nodejs
} from "mdi-material-ui";
// import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  mIcon: {
    color: "white"
  },
  faIcon: {
    fontSize: "3vh"
  },
  header: {
    color: "white"
  },
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.container} style={{ backgroundColor: "red" }}>
        <h1 className={classes.header}>
          Coders for hire. Progressive Web and Mobile Development. No BS.
        </h1>
      </div>
      <div className={classes.container} style={{ backgroundColor: "blue" }}>
        <h1 className={classes.header}>The best technologies for you</h1>
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-around",
            fontSize: "100px"
          }}
        >
          <Firebase fontSize="inherit" className={classes.mIcon} />
          <ReactIcon fontSize="inherit" className={classes.mIcon} />
          <LanguageRubyOnRails fontSize="inherit" className={classes.mIcon} />
          <Nodejs fontSize="inherit" className={classes.mIcon} />
        </div>
      </div>
    </Layout>
  );
};

// <FontAwesomeIcon
//   className={classes.faIcon}
//   icon={faReact}
//   color="white"
// />
// <FontAwesomeIcon icon={faNode} color="white" />
// <ReactIcon className={classes.devicon} height="90px" width="90px" />
// <NodeIcon className={classes.devicon} height="90px" width="90px" />
// <AwsIcon className={classes.devicon} height="90px" width="90px" />
// <RailsIcon className={classes.devicon} height="90px" width="90px" />

export default IndexPage;
