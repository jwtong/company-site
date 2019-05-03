import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Something from "../assets/devicon-master/icons/amazonwebservices/amazonwebservices-original.svg";

const IndexPage = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "red",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{ color: "white" }}>
        Coders for hire. Progressive Web and Mobile Development. No BS.
      </h1>
    </div>
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{ color: "white" }}>The best technologies for you</h1>
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-around"
        }}
      >
        <Something style={{ height: "100px" }} className="awsicon" />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
