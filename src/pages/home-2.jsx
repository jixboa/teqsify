import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Teqsify" />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;
