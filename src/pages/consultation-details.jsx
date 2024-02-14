import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import ConsultationDetails from "../components/consultation-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"IT Consultation"} />
      <ConsultationDetails />
    </Wrapper>
  );
};

export default index;
