// site wrapper contains header, footer, and things that belong on all pages
import React from "react";
import { StaticQuery, graphql } from "gatsby";

import "./layout.css";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }: { children: any }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
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
          mainText={`Coded with ReactJS and GatsbyJS by ______ ©  ${new Date().getFullYear()}`}
          email="blah"
          linkedIn="blah"
        />
      </>
    )}
  />
);

export default Layout;
