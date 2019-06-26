// site wrapper contains header, footer, and things that belong on all pages
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./Layout.css";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: any;
  location: any;
}

const Layout = ({ children, location }: Props) => (
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
      mainText={`Coded with ReactJS and GatsbyJS by Knit
      } ©  ${new Date().getFullYear()}`}
      email={"blah"}
      linkedIn={"blah"}
    />
  </>
);

export default Layout;
