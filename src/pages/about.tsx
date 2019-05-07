import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Resume from "../assets/documents/GS9_Color_Management.pdf";
import Image from "../components/image";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Code from "@material-ui/icons/Code";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PaletteOutlined from "@material-ui/icons/PaletteOutlined";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";
import {
  React as ReactIcon,
  Vuejs,
  AppleIos,
  Android,
  Nodejs,
  LanguageRubyOnRails,
  DotNet,
  Firebase,
  Database,
  Aws,
  Azure,
  LanguagePython
} from "mdi-material-ui";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
// import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  mIcon: {
    color: "black"
  },
  header: {
    color: "white !important",
    textAlign: "center"
  },
  centerer: {
    justifyContent: "center"
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.container}
        style={{
          backgroundColor: "orange",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "10%",
            paddingLeft: "10%",
            alignItems: "center"
          }}
        >
          <Typography component="h1" variant="h4" className={classes.header}>
            Meet the co-founders of _______
          </Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue"
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            alignSelf: "stretch",
            flexGrow: "1",
            // backgroundColor: "red",
            padding: "2% 5% 2% 5%",
            margin: "2% 5% 2% 5%",
            maxHeight: "30%",
            fontSize: "8em"
          }}
        >
          <Typography component="h4" variant="h4">
            Jeremy Tong
          </Typography>
          <Code fontSize="inherit" className={classes.mIcon} />
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            Jeremy Tong is a recent graduate of Brown University who
            double-majored in Computer Science and Economics with a focus on
            UI/UX design, Data Analytics, Behaviorial Economics, and Finance.
            Most recently, Jeremy worked as a Venture for America fellow for
            Juggle, a startup that is best described as the Uber-for
            Babysitting. There, he assumed the role of interim CTO, handling all
            aspects of the business related to Juggle's technology and mobile
            app. In his time there, he rebuilt much of the software platform
            from scratch that then served over 5000 monthly users and generated
            $200k in revenue in 2018, an 8x increase over 2017, with a projected
            increase of 2x in 2019. Jeremy has had 4+ years of full-stack
            experience developing web and mobile applications, and is most
            passionate about intelligent data-driven design. Outside of work,
            Jeremy loves rock-climbing, playing jazz piano, and hip-hop dance.
          </Typography>
          <Button href={Resume} variant="outlined" color="secondary">
            View CV
          </Button>
        </Card>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            alignSelf: "stretch",
            flexGrow: "1",
            // backgroundColor: "red",
            padding: "2% 5% 2% 5%",
            margin: "0% 5% 2% 5%",
            maxHeight: "30%",
            fontSize: "8em"
          }}
        >
          <Typography component="h4" variant="h4">
            Thomas Clark
          </Typography>
          <PaletteOutlined fontSize="inherit" className={classes.mIcon} />
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            Hi, I'm an asshole.
          </Typography>
        </Card>
      </div>
    </>
  );
};

export default AboutPage;
