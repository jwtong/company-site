// site wrapper contains header, footer, and things that belong on all pages
import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

interface Props {
  children?: any;
  title: string;
  description: string;
}

const SiteHelmet = ({ children, title, description }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteHelmetQuery {
        site {
          siteMetadata {
            companyName
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>
          {data.site.siteMetadata.companyName} | {title}
        </title>
        {children}
      </Helmet>
    )}
  />
);

export default SiteHelmet;
