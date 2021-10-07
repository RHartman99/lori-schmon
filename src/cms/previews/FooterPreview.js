import React from "react";
import Footer from "../../components/Footer";

/**
 *
 * @param {*} param0
 * @returns
 */
const FooterPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) return <Footer fields={data} />;
  else return <div>Loading...</div>;
};

export default FooterPreview;
