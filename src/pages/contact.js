import React from "react";
import Layout from "../components/Layout";
import "twin.macro";

const Contact = () => {
  return (
    <Layout
      offblack
      meta={{ description: "Contact Lori", title: "Lori Schmon - Contact" }}
    >
      <div tw="w-full bg-offblack h-24 md:h-32" />
    </Layout>
  );
};

export default Contact;
