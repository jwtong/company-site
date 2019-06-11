import React from "react";
import { graphql } from "gatsby";
import {
  Typography,
  Divider,
  withStyles,
  withWidth,
  createStyles
} from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import TransitionOnShow from "../../components/transition_on_show";
import roles from "../../utils/roles";
import SampleWorkTemplate from "../../components/sample_work_template";
import SubtitleDivider from "../../components/subtitle_divider";
import { isWidthDown } from "@material-ui/core/withWidth";

const styles = theme =>
  createStyles({
    divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      }
    },
    dividerLine: {
      maxHeight: "1px",
      color: "#F6F6F6"
    },
    appImage: {
      width: "300px",
      height: "550px",
      [theme.breakpoints.down("md")]: {
        width: "275px",
        height: "500px"
      }
    },
    designImageWrapper: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(3)
      }
    },
    appImageWrapper: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(3)
    },
    designImage: {
      width: "1500px",
      height: "600px",
      [theme.breakpoints.down("xs")]: {
        width: "750px",
        height: "300px"
      }
    }
  });

class JugglePage extends React.Component {
  private getAppImage = (imageName: string) => {
    const { classes, data } = this.props;
    return (
      <TransitionOnShow
        visibilitySensorProps={{ partialVisibility: true }}
        transitionType="Zoom"
        transitionProps={{ timeout: { enter: 1000 } }}
      >
        <Img
          className={classes.appImage}
          fluid={data[imageName].childImageSharp.fluid}
        />
      </TransitionOnShow>
    );
  };

  public render() {
    const { classes, data } = this.props;

    const themeWidth = this.props.width;

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
        <SubtitleDivider
          text={"Preliminary Design"}
          otherProps={{ className: classes.divider }}
        />
        <div className={classes.designImageWrapper}>
          <Img
            className={classes.designImage}
            fluid={data.newAppFlow.childImageSharp.fluid}
          />
        </div>
        <Typography variant="subtitle1">
          Juggle's mobile app was rebuilt to offer cross-platform (Android/iOS)
          support, a revamped user-interface, and to support a suite of new
          critical features. First, a research study was conducted on families
          and sitters to ensure that the new app targeted the right concerns.
          Next, feature specifications and UI/UX mockups were drafted and
          presented to users and shared with the Juggle team, then refined to
          unitized objectives to be translated into code.
        </Typography>
        <SubtitleDivider
          text={"Notable Features"}
          otherProps={{ className: classes.divider }}
        />
        <div className={classes.appImageWrapper}>
          {this.getAppImage("messaging1")}
          {this.getAppImage("messaging2")}
        </div>
        <Typography variant="h6" gutterBottom>
          Proprietary In-App Messaging Platform
        </Typography>
        <Typography variant="subtitle1">
          Built in Google Firebase and inspired by Tinder, Juggle's in-app
          messaging platform allows families to communicate with sitters in
          real-time, making it easier to coordinate bookings and special
          requests.
        </Typography>
        <Divider className={`${classes.divider} ${classes.dividerLine}`} />
        <div className={classes.appImageWrapper}>
          {this.getAppImage("pricing1")}
          {this.getAppImage("pricing2")}
          {this.getAppImage("pricing3")}
          {this.getAppImage("pricing4")}
        </div>

        <Typography variant="h6" gutterBottom>
          Surge / Variable Pricing Model Support and Roll-Out
        </Typography>
        <Typography variant="subtitle1">
          Juggle's new app supports a completely revamped pricing model. This
          includes variable pricing for each market location, surge pricing to
          accomodate high-demand periods, promo-code and gift cards,
          transportation reimbursement, and pre-booking payment estimation.
        </Typography>
        <Divider className={`${classes.divider} ${classes.dividerLine}`} />
        <div className={classes.appImageWrapper}>
          {this.getAppImage("search1")}
          {this.getAppImage("search2")}
          {this.getAppImage("search3")}
        </div>
        <Typography variant="h6" gutterBottom>
          Smart Search
        </Typography>
        <Typography variant="subtitle1">
          In the new app, Juggle families can now browse, favorite, and request
          their sitters directly. Date and time filters allow families to find
          sitters by their posted availabilities, while profile filters allow
          families to narrow sitters based on experience, certifications, and
          interests. Search results are sorted by a weighted rating that depends
          on number of connections, rating, and number of jobs completed.
        </Typography>
        <Divider className={`${classes.divider} ${classes.dividerLine}`} />
        <div className={classes.appImageWrapper}>
          {this.getAppImage("backgroundCheck1")}
          {this.getAppImage("backgroundCheck2")}
        </div>
        <Typography variant="h6" gutterBottom>
          Evident Background Check Integration
        </Typography>
        <Typography variant="subtitle1">
          After discussing with Evident, Juggle's third party background check
          provider, a solution was formulated to automatically distribute checks
          to sitter's who requested them on their applications, then process the
          completed checks automatically into the app as represented by the
          green shield checkmark.
        </Typography>
        <Divider className={`${classes.divider} ${classes.dividerLine}`} />
        <div className={classes.appImageWrapper}>
          {this.getAppImage("referral1")}
          {this.getAppImage("referral2")}
          {this.getAppImage("referral3")}
        </div>
        <Typography variant="h6" gutterBottom>
          Referral Code Program
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          As inspired by Uber and Lyft, Juggle has referral codes that allow
          families and sitters to receive benefits for signing up for the
          platform, as well as having a referred user complete their first
          booking. The user base has nearly doubled since this feature was made
          live.
        </Typography>
        <Divider className={`${classes.divider} ${classes.dividerLine}`} />
        <div className={classes.appImageWrapper}>
          {this.getAppImage("emergency1")}
          {this.getAppImage("emergency2")}
          {this.getAppImage("emergency3")}
          {this.getAppImage("emergency4")}
        </div>
        <Typography variant="h6" gutterBottom>
          Emergency / Last Minute Need Support
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
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
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    messaging2: file(
      relativePath: { eq: "sample_work/juggle/messaging/messaging2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pricing1: file(
      relativePath: { eq: "sample_work/juggle/pricing/pricing1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pricing2: file(
      relativePath: { eq: "sample_work/juggle/pricing/pricing2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pricing3: file(
      relativePath: { eq: "sample_work/juggle/pricing/pricing3.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pricing4: file(
      relativePath: { eq: "sample_work/juggle/pricing/pricing4.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    search1: file(
      relativePath: { eq: "sample_work/juggle/search/search1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    search2: file(
      relativePath: { eq: "sample_work/juggle/search/search2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    search3: file(
      relativePath: { eq: "sample_work/juggle/search/search3.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    backgroundCheck1: file(
      relativePath: {
        eq: "sample_work/juggle/background_check/background_check1.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    backgroundCheck2: file(
      relativePath: {
        eq: "sample_work/juggle/background_check/background_check2.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    referral1: file(
      relativePath: { eq: "sample_work/juggle/referral/referral1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    referral2: file(
      relativePath: { eq: "sample_work/juggle/referral/referral2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    referral3: file(
      relativePath: { eq: "sample_work/juggle/referral/referral3.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emergency1: file(
      relativePath: { eq: "sample_work/juggle/emergency/emergency1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emergency2: file(
      relativePath: { eq: "sample_work/juggle/emergency/emergency2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emergency3: file(
      relativePath: { eq: "sample_work/juggle/emergency/emergency3.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emergency4: file(
      relativePath: { eq: "sample_work/juggle/emergency/emergency4.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newAppFlow: file(
      relativePath: { eq: "sample_work/juggle/new_app_flow.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default withWidth()(withStyles(styles, { withTheme: true })(JugglePage));
