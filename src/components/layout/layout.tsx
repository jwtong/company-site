// site wrapper contains header, footer, and things that belong on all pages
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import "./layout.css";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({
  children,
  location: any
}: {
  children: any;
  location: any;
}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            companyName
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.companyName}</title>
          <link rel="canonical" href="https://knit.dev" />
        </Helmet>
        <Header
          location={location}
          pages={[
            { text: "Process", link: "/process/" },
            { text: "Services", link: "/services/" },
            { text: "About Us", link: "/about/" },
            { text: "Sample Work", link: "/sample-work/" },
            { text: "Contact", link: "/contact/" }
          ]}
        />
        <div>
          <main>{children}</main>
        </div>
        <Footer
          mainText={`Coded with ReactJS and GatsbyJS by ${
            data.site.siteMetadata.companyName
          } ©  ${new Date().getFullYear()}`}
          email="blah"
          linkedIn="blah"
        />
      </>
    )}
  />
);

export default Layout;
