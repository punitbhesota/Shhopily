import React from "react";
import { Helmet } from "react-helmet";

function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: " Welcome to CandyShop",
  description: "We sell the best products for cheap",
  keywords: "electronics, toys,cars, cheap electronics",
};

export default Meta;
