import React from "react";
import Layout from "../components/Layout";
import Sections from "../components/Sections";

const PageTemplate = ({ fields }) => {
  console.log(fields);
  return (
    <Layout {...fields.layoutSettings}>
      <Sections sections={fields.sections} />
    </Layout>
  );
};

export default PageTemplate;
