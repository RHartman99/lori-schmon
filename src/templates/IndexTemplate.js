import React from "react";
import Layout from "../components/Layout";
import FrontHero from "../components/FrontHero";
import About from "../components/About";
import Overview from "../components/Overview";
import Portfolio from "../components/Portfolio";

const IndexTemplate = ({ fields }) => {
  const { frontHero, about, overview, portfolio } = fields;
  return (
    <Layout meta={fields.meta}>
      <FrontHero {...frontHero} />
      <About {...about} />
      <Overview {...overview} />
      <Portfolio {...portfolio} />
    </Layout>
  );
};

export default IndexTemplate;
