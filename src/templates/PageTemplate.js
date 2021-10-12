import React from "react";
import Layout from "../components/Layout";
import Sections from "../components/Sections";

const PageTemplate = ({ fields }) => {
  return (
    <Layout {...fields.layoutSettings} meta={fields.meta}>
      <Sections sections={fields.sections} />
    </Layout>
  );
};

export default PageTemplate;
