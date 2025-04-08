import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import WebDevDetails from "../components/webdev-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Web Development Details"} />
      <WebDevDetails />
    </Wrapper>
  );
};

export default index;
