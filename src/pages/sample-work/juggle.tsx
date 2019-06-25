import React from "react";
import _ from "lodash";
import { graphql } from "gatsby";
import {
  Typography,
  Divider,
  withStyles,
  withWidth,
  createStyles,
  WithStyles,
  Paper
} from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import TransitionOnShow from "../../components/TransitionOnShow";
import roles from "../../utils/roles";
import SampleWorkTemplate from "../../components/SampleWorkTemplate";
import SubtitleDivider from "../../components/SubtitleDivider";
import { isWidthDown } from "@material-ui/core/withWidth";
import { dividerWithMargin } from "../../components/SharedStyles";
import clsx from "clsx";

const styles = (theme: any) =>
  createStyles({
    dividerWithMargin: dividerWithMargin(theme),
    dividerLine: {
      maxHeight: "1px",
      color: "#F6F6F6"
    },
    appImage: {
      width: "300px",
      height: "550px",
      [theme.breakpoints.down("xs")]: {
        width: "275px",
        height: "500px"
      }
    },
    designImageWrapper: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("xs")]: {
        marginBottom: theme.spacing(3)
      }
    },
    appImagesContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(3)
    },
    designImage: {
      width: "1500px",
      height: "600px",
      [theme.breakpoints.down("sm")]: {
        width: "1200px",
        height: "400px"
      },
      [theme.breakpoints.down("xs")]: {
        width: "750px",
        height: "300px"
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: any;
  width: any;
}
class JugglePage extends React.Component<Props> {
  private getAppImage = (appImages: Array<any>, imageName: string) => {
    const { classes } = this.props;
    return (
      <TransitionOnShow
        visibilitySensorProps={{ partialVisibility: true }}
        transitionType="Zoom"
        transitionProps={{ timeout: { enter: 1000 } }}
      >
        <Img
          className={classes.appImage}
          fluid={
            _.find(appImages, (ai: { name: string }) => ai.name === imageName)
              .childImageSharp.fluid
          }
        />
      </TransitionOnShow>
    );
  };

  public render() {
    const { classes, data } = this.props;
    const themeWidth = this.props.width;

    const appImages = data.appImages.edges.map((e: { node: any }) => e.node);

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
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <Paper className={classes.designImageWrapper}>
          <Img
            className={classes.designImage}
            fluid={data.newAppFlow.childImageSharp.fluid}
          />
        </Paper>
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
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <div className={classes.appImagesContainer}>
          {this.getAppImage(appImages, "messaging1")}
          {this.getAppImage(appImages, "messaging2")}
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
        <Divider
          className={clsx(classes.dividerWithMargin, classes.dividerLine)}
        />
        <div className={classes.appImagesContainer}>
          {this.getAppImage(appImages, "pricing1")}
          {this.getAppImage(appImages, "pricing2")}
          {this.getAppImage(appImages, "pricing3")}
          {this.getAppImage(appImages, "pricing4")}
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
        <Divider
          className={clsx(classes.dividerWithMargin, classes.dividerLine)}
        />
        <div className={classes.appImagesContainer}>
          {this.getAppImage(appImages, "search1")}
          {this.getAppImage(appImages, "search2")}
          {this.getAppImage(appImages, "search3")}
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
        <Divider
          className={clsx(classes.dividerWithMargin, classes.dividerLine)}
        />
        <div className={classes.appImagesContainer}>
          {this.getAppImage(appImages, "backgroundCheck1")}
          {this.getAppImage(appImages, "backgroundCheck2")}
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
        <Divider
          className={clsx(classes.dividerWithMargin, classes.dividerLine)}
        />
        <div className={classes.appImagesContainer}>
          {this.getAppImage(appImages, "referral1")}
          {this.getAppImage(appImages, "referral2")}
          {this.getAppImage(appImages, "referral3")}
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
        <Divider
          className={clsx(classes.dividerWithMargin, classes.dividerLine)}
        />
        <div className={classes.appImagesContainer}>
          {this.getAppImage(appImages, "emergency1")}
          {this.getAppImage(appImages, "emergency2")}
          {this.getAppImage(appImages, "emergency3")}
          {this.getAppImage(appImages, "emergency4")}
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
    appImages: allFile(
      filter: { relativePath: { regex: "/sample_work/juggle/app_images/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 600, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
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
