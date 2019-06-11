import React from "react";
import _ from "lodash";
import { graphql } from "gatsby";
import { Typography, withStyles, createStyles } from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import SampleWorkTemplate from "../../components/sample_work_template";
import roles from "../../utils/roles";
import SubtitleDivider from "../../components/subtitle_divider";

const styles = theme =>
  createStyles({
    divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      }
    },
    topBottomImageWrapper: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3)
    },
    designImage: {
      width: "60%",
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    diagramImage: {
      width: "70%",
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    diagramImage2Wrapper: {
      width: "100%",
      overflow: "hidden",
      [theme.breakpoints.up("xs")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    },
    diagramImage2: {
      width: "70%",
      [theme.breakpoints.down("xs")]: {
        width: "480px"
      }
    },
    applicationImage: {
      width: "80%",
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    }
  });

class ZicPage extends React.Component {
  public render() {
    const { classes, data } = this.props;
    const zicRoles = [roles[0], roles[1], roles[2], roles[3]];
    const zicTechnologies = [
      "HTML / CSS",
      "Javascript / JQuery",
      "Java (Spark)"
    ];

    const images = data.images.edges.map((e: { node: any }) => e.node);

    return (
      <SampleWorkTemplate
        title={"Zic Web Jukebox"}
        subtitle={"A collaborative playlist maker and music player"}
        roles={zicRoles}
        technologies={zicTechnologies}
      >
        <SubtitleDivider
          text={"Overview"}
          otherProps={{ className: classes.divider }}
        />
        <Typography variant="subtitle1" gutterBottom>
          A full-stack web application that allows one user to host a playlist
          on their computer, which other users can connect to and add songs of
          their choice from the SoundCloud library. As songs are added, the host
          can simultaneously sort, manage, and playback the playlist.
        </Typography>
        <SubtitleDivider
          text={"Design"}
          otherProps={{ className: classes.divider }}
        />
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.designImage}
            fluid={
              _.find(images, (d: { name: string }) => d.name === "zic1")
                .childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          The first step was to diagram the business-logic features and
          user-interactions of this multi-faceted program.
        </Typography>
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.diagramImage}
            fluid={
              _.find(images, (d: { name: string }) => d.name === "zic2")
                .childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          Once drafted, these considerations were translated into UML diagram
          that better defined how the features would be translated to code and
          data.
        </Typography>
        <div className={classes.topBottomImageWrapper}>
          <div className={classes.diagramImage2Wrapper}>
            <Img
              className={classes.diagramImage2}
              fluid={
                _.find(images, (d: { name: string }) => d.name === "zic3")
                  .childImageSharp.fluid
              }
            />
          </div>
        </div>
        <Typography variant="subtitle1">
          Next, UI/UX mockups were created to show the layout of the actual
          music player. Note that the host's interface would include more
          functionality than those of connected clients, including executive
          controls over the music playback.
        </Typography>
        <SubtitleDivider
          text={"Final Product"}
          otherProps={{ className: classes.divider }}
        />
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.applicationImage}
            fluid={
              _.find(images, (d: { name: string }) => d.name === "zic4")
                .childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          In terms of future business applications of this software, it could be
          installed into a speaker or a speaker attachment via a microcomputer
          (e.g. Raspberry Pi) or be hosted completely online.
        </Typography>
      </SampleWorkTemplate>
    );
  }
}

export const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "sample_work/zic" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(ZicPage);
