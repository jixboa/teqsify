import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";

const ServiceDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb
          top_title="Linux Admin Tution"
          page_title="Linux Admin Tution"
        />
        <ServiceDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default ServiceDetails;
