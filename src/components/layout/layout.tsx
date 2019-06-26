// site wrapper contains header, footer, and things that belong on all pages
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./layout.css";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: any;
  location: any;
}

const Layout = ({ children, location }: Props) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            companyName
            email
            linkedIn
          }
        }
      }
    `}
    render={data => (
      <>
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
          email={data.site.siteMetadata.email}
          linkedIn={data.site.siteMetadata.linkedIn}
        />
      </>
    )}
  />
);

export default Layout;
