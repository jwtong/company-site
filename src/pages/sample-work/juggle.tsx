import React from "react";
import { Link, graphql } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Code from "@material-ui/icons/Code";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PaletteOutlined from "@material-ui/icons/PaletteOutlined";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  withStyles,
  Chip
} from "@material-ui/core";
import StandardPopover from "../../components/standard_popover";
import Img from "gatsby-image/withIEPolyfill";
import Slide from "@material-ui/core/Slide";
import VisibilitySensor from "react-visibility-sensor";
import TransitionOnShow from "../../components/transition_on_show";
import Hero from "../../components/hero";
import roles from "../../utils/roles";
import ServicePopovers from "../../components/service_popovers";
import SampleWorkTemplate from "../../components/sample_work_template";

const styles = {
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

class JugglePage extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      element1: false
    };
  }

  private onChange = elementId => isVisible => {
    if (isVisible) {
      this.setState({
        [elementId]: isVisible
      });
    }
  };

  public render() {
    const { classes, data } = this.props;

    const juggleRoles = [roles[0], roles[1], roles[2], roles[3]];
    const juggleTechnologies = [
      "React Native",
      "Sketch",
      "Balsamiq",
      "Ruby on Rails",
      "MySQL",
      "AWS",
      "Google Firebase"
    ];

    return (
      <SampleWorkTemplate
        title={"Juggle"}
        subtitle={
          "A mobile app that allows families to book sitters on demand, designed with a focus on ease-of-use while providing a robust set of user-feedback driven features."
        }
        roles={juggleRoles}
        technologies={juggleTechnologies}
      >
        <div style={{ marginBottom: "3%", marginTop: "3%" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "left", textTransform: "uppercase" }}
          >
            Preliminary Design
          </Typography>
          <Divider
            style={{
              height: "2px"
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3%"
          }}
        >
          <Img fixed={data.newAppFlow.childImageSharp.fixed} />
        </div>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          Juggle's mobile app was rebuilt to offer cross-platform (Android/iOS)
          support, a revamped user-interface, and to support a suite of new
          critical features. First, a research study was conducted on families
          and sitters to ensure that the new app targeted the right concerns.
          Next, feature specifications and UI/UX mockups were drafted and
          presented to users and shared with the Juggle team, then refined to
          unitized objectives to be translated into code.
        </Typography>
        <div style={{ marginBottom: "3%", marginTop: "3%" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "left", textTransform: "uppercase" }}
          >
            Notable Features
          </Typography>
          <Divider
            style={{
              height: "2px"
            }}
          />
        </div>
        <TransitionOnShow
          visibilitySensorProps={{ partialVisibility: true }}
          transitionType="Zoom"
          transitionProps={{ timeout: { enter: 1000 } }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Img fixed={data.messaging1.childImageSharp.fixed} />
            <Img fixed={data.messaging2.childImageSharp.fixed} />
          </div>
        </TransitionOnShow>
        <Typography variant="h6" style={{ textAlign: "left" }} gutterBottom>
          Proprietary In-App Messaging Platform
        </Typography>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          Built in Google Firebase and inspired by Tinder, Juggle's in-app
          messaging platform allows families to communicate with sitters in
          real-time, making it easier to coordinate bookings and special
          requests.
        </Typography>
        <Divider
          style={{
            height: "1px",
            marginTop: "4%",
            marginBottom: "2%",
            color: "#F6F6F6"
          }}
        />
        <TransitionOnShow
          visibilitySensorProps={{ partialVisibility: true }}
          transitionType="Zoom"
          transitionProps={{ timeout: { enter: 1000 } }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <Img fixed={data.pricing1.childImageSharp.fixed} />
            <Img fixed={data.pricing2.childImageSharp.fixed} />
            <Img fixed={data.pricing3.childImageSharp.fixed} />
            <Img fixed={data.pricing4.childImageSharp.fixed} />
          </div>
        </TransitionOnShow>
        <Typography variant="h6" style={{ textAlign: "left" }} gutterBottom>
          Surge / Variable Pricing Model Support and Roll-Out
        </Typography>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          Juggle's new app supports a completely revamped pricing model. This
          includes variable pricing for each market location, surge pricing to
          accomodate high-demand periods, promo-code and gift cards,
          transportation reimbursement, and pre-booking payment estimation.
        </Typography>
        <Divider
          style={{
            height: "1px",
            marginTop: "4%",
            marginBottom: "2%",
            color: "#F6F6F6"
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Img fixed={data.search1.childImageSharp.fixed} />
          <Img fixed={data.search2.childImageSharp.fixed} />
          <Img fixed={data.search3.childImageSharp.fixed} />
        </div>
        <Typography variant="h6" style={{ textAlign: "left" }} gutterBottom>
          Smart Search
        </Typography>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          In the new app, Juggle families can now browse, favorite, and request
          their sitters directly. Date and time filters allow families to find
          sitters by their posted availabilities, while profile filters allow
          families to narrow sitters based on experience, certifications, and
          interests. Search results are sorted by a weighted rating that depends
          on number of connections, rating, and number of jobs completed.
        </Typography>
        <Divider
          style={{
            height: "1px",
            marginTop: "4%",
            marginBottom: "2%",
            color: "#F6F6F6"
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Img fixed={data.backgroundCheck1.childImageSharp.fixed} />
          <Img fixed={data.backgroundCheck2.childImageSharp.fixed} />
        </div>
        <Typography variant="h6" style={{ textAlign: "left" }} gutterBottom>
          Evident Background Check Integration
        </Typography>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          After discussing with Evident, Juggle's third party background check
          provider, a solution was formulated to automatically distribute checks
          to sitter's who requested them on their applications, then process the
          completed checks automatically into the app as represented by the
          green shield checkmark.
        </Typography>
        <Divider
          style={{
            height: "1px",
            marginTop: "4%",
            marginBottom: "2%",
            color: "#F6F6F6"
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Img fixed={data.referral1.childImageSharp.fixed} />
          <Img fixed={data.referral2.childImageSharp.fixed} />
          <Img fixed={data.referral3.childImageSharp.fixed} />
        </div>
        <Typography variant="h6" style={{ textAlign: "left" }} gutterBottom>
          Referral Code Program
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ textAlign: "left" }}
          gutterBottom
        >
          As inspired by Uber and Lyft, Juggle has referral codes that allow
          families and sitters to receive benefits for signing up for the
          platform, as well as having a referred user complete their first
          booking. The user base has nearly doubled since this feature was made
          live.
        </Typography>
        <Divider
          style={{
            height: "1px",
            marginTop: "4%",
            marginBottom: "2%",
            color: "#F6F6F6"
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          <Img fixed={data.emergency1.childImageSharp.fixed} />
          <Img fixed={data.emergency2.childImageSharp.fixed} />
          <Img fixed={data.emergency3.childImageSharp.fixed} />
          <Img fixed={data.emergency4.childImageSharp.fixed} />
        </div>
        <Typography variant="h6" style={{ textAlign: "left" }} gutterBottom>
          Emergency / Last Minute Need Support
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ textAlign: "left" }}
          gutterBottom
        >
          To outcompete similar apps, much of Juggle's new functionality centers
          around addressing last-minute emergency situations. When scheduling a
          booking, families may optionally specify whether Juggle should
          automatically post a new job for applicants if the scheduled sitter
          cancels, and within 48 hours of a booking start, they may additionally
          add a cash bonus to incentivize sitters to cover the booking. Juggle
          also features an alert dashboard to announce last-minute opportunities
          to sitters. Together, this allows Juggle to successfully match sitters
          with families for over 90% of requests made.
        </Typography>
      </SampleWorkTemplate>
    );
  }
}

export const query = graphql`
  query {
    messaging1: file(
      relativePath: { eq: "sample_work/juggle/messaging/messaging1.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    messaging2: file(
      relativePath: { eq: "sample_work/juggle/messaging/messaging2.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pricing1: file(
      relativePath: { eq: "sample_work/juggle/pricing/pricing1.png" }
    ) {
      childImageSharp {
        fixed(width: 245, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pricing2: file(
      relativePath: { eq: "sample_work/juggle/pricing/pricing2.png" }
    ) {
      childImageSharp {
        fixed(width: 245, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pricing3: file(
      relativePath: { eq: "sample_work/juggle/pricing/pricing3.png" }
    ) {
      childImageSharp {
        fixed(width: 245, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pricing4: file(
      relativePath: { eq: "sample_work/juggle/pricing/pricing4.png" }
    ) {
      childImageSharp {
        fixed(width: 245, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    search1: file(
      relativePath: { eq: "sample_work/juggle/search/search1.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    search2: file(
      relativePath: { eq: "sample_work/juggle/search/search2.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    search3: file(
      relativePath: { eq: "sample_work/juggle/search/search3.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    backgroundCheck1: file(
      relativePath: {
        eq: "sample_work/juggle/background_check/background_check1.png"
      }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    backgroundCheck2: file(
      relativePath: {
        eq: "sample_work/juggle/background_check/background_check2.png"
      }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    referral1: file(
      relativePath: { eq: "sample_work/juggle/referral/referral1.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    referral2: file(
      relativePath: { eq: "sample_work/juggle/referral/referral2.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    referral3: file(
      relativePath: { eq: "sample_work/juggle/referral/referral3.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    emergency1: file(
      relativePath: { eq: "sample_work/juggle/emergency/emergency1.png" }
    ) {
      childImageSharp {
        fixed(width: 245, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    emergency2: file(
      relativePath: { eq: "sample_work/juggle/emergency/emergency2.png" }
    ) {
      childImageSharp {
        fixed(width: 245, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    emergency3: file(
      relativePath: { eq: "sample_work/juggle/emergency/emergency3.png" }
    ) {
      childImageSharp {
        fixed(width: 245, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    emergency4: file(
      relativePath: { eq: "sample_work/juggle/emergency/emergency4.png" }
    ) {
      childImageSharp {
        fixed(width: 245, height: 550, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    newAppFlow: file(
      relativePath: { eq: "sample_work/juggle/new_app_flow.png" }
    ) {
      childImageSharp {
        fixed(width: 1500, height: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(JugglePage);
