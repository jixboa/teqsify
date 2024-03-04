import React from "react";
import Image from "next/image";

import headphone from "@assets/img/cta/home-3/headphone.png";
import conversation from "@assets/img/cta/home-3/conversation.png";
import footer_contact_shape_1 from "@assets/img/cta/home-3/shape-2.png";
import footer_contact_shape_2 from "@assets/img/cta/home-3/shape-3.png";

const FooterContact = ({ bg_style, contact_style }) => {
  return (
    <>
      <div
        style={{ marginTop: "30px" }}
        className={`${
          bg_style
            ? ""
            : contact_style
            ? "tp-contact-cta-area"
            : "tp-cta-4-area"
        } p-relative`}>
        <div className="tp-cta-4-shape">
          <Image src={footer_contact_shape_1} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row gx-0">
            <div className="col-xl-6">
              <div className="tp-cta-4-wrapper-left">
                <Image
                  className="shape-1"
                  src={footer_contact_shape_2}
                  alt="theme-pure"
                />
                <div className="tp-cta-4-mail d-flex flex-wrap justify-content-center justify-content-xl-start align-items-center">
                  <Image src={conversation} alt="theme-pure" />
                  <a href="mailto:@themepure.gmail.com">
                    Send us a mail : <span>teqsify.it@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-cta-4-wrapper-right">
                <div className="tp-cta-4-headphone d-flex flex-wrap justify-content-center ">
                  <div className="tp-cta-4-headphone-thumb">
                    <Image src={headphone} alt="theme-pure" />
                  </div>
                  <div className="tp-cta-4-content">
                    <p>
                      Call Us <span>On</span>
                    </p>
                    <a href="tel:+16143448413">+1 614 344 8413</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
