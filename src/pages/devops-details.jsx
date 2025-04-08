import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import DevopsDetails from "../components/devops-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Devops Tution"} />
      <DevopsDetails />
    </Wrapper>
  );
};

export default index;
