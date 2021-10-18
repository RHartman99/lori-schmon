import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
const SEO = ({ meta }) => {
  const { pathname, href, host } = useLocation();
  const noIndex = meta?.noIndex === true;
  const title = !!meta?.title
    ? meta.title
    : `${pathname.replace(/\//g, "").replace(/-/g, " ")}`;
  const metaList = [
    {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow",
    },
    { name: "title", content: title },
    { name: "og:title", content: title },
    { property: "og:url", content: href },
    { property: "og:type", content: "website" },
    { property: "twitter:card", content: "summary" },
    { property: "twitter:domain", content: host },
    { property: "twitter:title", content: title },
  ];

  if (!!meta?.description) {
    metaList.push({ name: "description", content: meta.description });
    metaList.push({ name: "og:description", content: meta.description });
    metaList.push({ name: "twitter:description", content: meta.description });
  }

  return (
    <Helmet meta={metaList}>
      <title>{title}</title>
      {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
