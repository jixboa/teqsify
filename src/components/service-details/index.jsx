import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const ServiceDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Machine Learning" page_title="Service Details" />
        <ServiceDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default ServiceDetails;
