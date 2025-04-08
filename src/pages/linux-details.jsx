import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import LinuxDetails from "../components/linux-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Linux Tution"} />
      <LinuxDetails />
    </Wrapper>
  );
};

export default index;
