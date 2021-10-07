import React from "react";
import IndexTemplate from "../../templates/IndexTemplate";
// import withStyledComponentsRendered from "../../hooks/withStyledComponentsRendered";

/**
 *
 * @param {*} param0
 * @returns
 */
const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data)
    // return withStyledComponentsRendered(<IndexTemplate fields={data} />);
    return <IndexTemplate fields={data} />;
  else return <div>Loading...</div>;
};

export default IndexPagePreview;
