import React from "react";
import Layout from "../components/layout";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <h1>About Us</h1>
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <h3>Jeremy Tong</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <h3>Thomas Clark</h3>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
