import React from "react";
import { graphql } from "gatsby";
import { Typography, withStyles } from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import SampleWorkTemplate from "../../components/sample_work_template";
import roles from "../../utils/roles";
import SubtitleDivider from "../../components/subtitle_divider";

const styles = {
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
};

class ZicPage extends React.Component {
  public render() {
    const { classes, data } = this.props;
    const zicRoles = [roles[0], roles[1], roles[2], roles[3]];
    const zicTechnologies = [
      "HTML / CSS",
      "Javascript / JQuery",
      "Java (Spark)"
    ];

    return (
      <SampleWorkTemplate
        title={"Zic Web Jukebox"}
        subtitle={"A collaborative playlist maker and music player"}
        roles={zicRoles}
        technologies={zicTechnologies}
      >
        <Typography
          variant="subtitle1"
          style={{ textAlign: "left" }}
          gutterBottom
        >
          A full-stack web application that allows one user to host a playlist
          on their computer, which other users can connect to and add songs of
          their choice from the SoundCloud library. As songs are added, the host
          can simultaneously sort, manage, and playback the playlist.
        </Typography>
        <SubtitleDivider
          text={"Design"}
          containerStyle={{ marginBottom: "3%", marginTop: "3%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "3%",
            marginBottom: "3%"
          }}
        >
          <Img fixed={data.zic1.childImageSharp.fixed} />
        </div>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          The first step was to diagram the business-logic features and
          user-interactions of this multi-faceted program.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "3%",
            marginBottom: "3%"
          }}
        >
          <Img fixed={data.zic2.childImageSharp.fixed} />
        </div>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          Once drafted, these considerations were translated into UML diagram
          that better defined how the features would be translated to code and
          data.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "3%",
            marginBottom: "3%"
          }}
        >
          <Img fixed={data.zic3.childImageSharp.fixed} />
        </div>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          Next, UI/UX mockups were created to show the layout of the actual
          music player. Note that the host's interface would include more
          functionality than those of connected clients, including executive
          controls over the music playback.
        </Typography>
        <SubtitleDivider
          text={"Final Product"}
          containerStyle={{ marginBottom: "3%", marginTop: "3%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "3%",
            marginBottom: "3%"
          }}
        >
          <Img fixed={data.zic4.childImageSharp.fixed} />
        </div>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
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
    zic1: file(relativePath: { eq: "sample_work/zic/zic1.png" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zic2: file(relativePath: { eq: "sample_work/zic/zic2.png" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zic3: file(relativePath: { eq: "sample_work/zic/zic3.jpg" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zic4: file(relativePath: { eq: "sample_work/zic/zic4.png" }) {
      childImageSharp {
        fixed(width: 1000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(ZicPage);
