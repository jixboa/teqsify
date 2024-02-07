import React from "react";
import Image from "next/image";

import business_shape_1 from "@assets/img/business/shape-1.png";
import business_shape_2 from "@assets/img/business/shape-2.png";
import business_shape_3 from "@assets/img/business/shape-3.png";
import business_shape_4 from "@assets/img/business/shape-4.png";
import business_img_1 from "@assets/img/business/img-1_.jpg";
import business_img_2 from "@assets/img/business/img-2_.png";
import business_img_3 from "@assets/img/business/img-3_.png";
import business_user from "@assets/img/business/user.png";

import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import CodeIcon from "@/src/svg/code-icon";
import PhoneIcon2 from "@/src/svg/phone-icon2";
import Link from "next/link";
import LineArrowSix from "@/src/svg/line-arrow-6";
import TechIcon from "@/src/svg/tech-icon";

const BusinessArea = () => {
  return (
    <>
      <section className="tp-business-area p-relative pt-110 pb-115">
        <div className="tp-business-shape">
          <Image
            className="shape-1 d-none d-lg-block"
            src={business_shape_1}
            alt="theme-pure"
          />
          <Image className="shape-2" src={business_shape_2} alt="theme-pure" />
          <Image className="shape-3" src={business_shape_3} alt="theme-pure" />
          <Image className="shape-4" src={business_shape_4} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-business-thumb-wrapper p-relative">
                <div className="tp-business-thumb text-center">
                  <Image src={business_img_1} alt="theme-pure" />
                </div>
                <div className="circle-animation business-4">
                  <span className="tp-circle-1"></span>
                </div>
                <div className="circle-animation business-3">
                  <span className="tp-circle-2"></span>
                </div>
                <div className="circle-animation business-2">
                  <span className="tp-circle-3"></span>
                </div>
                <div className="tp-business-thumb-shape">
                  <Image
                    className="shape-1"
                    src={business_img_2}
                    alt="theme-pure"
                  />
                  <Image
                    className="shape-2"
                    src={business_img_3}
                    alt="theme-pure"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-business-title-wrapper">
                {/* <span className="tp-section-title__pre">
                  feature <span className="title-pre-color">IT Solutions</span>
                  <AngleArrow />
                </span> */}
                <h3 className="tp-section-title">
                  We lead in IT education and consultation, setting the bar for
                  excellence.
                  <span className="title-left-shape">
                    <LineArrowTwo />
                  </span>
                </h3>
                <p>
                  If you're ready to embark on a journey towards a successful IT
                  career, <br />
                  look no further – we're your destination, <br />
                  committed to supporting your learning goals and professional
                  growth
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="tp-business-box mb-30">
                    <div className="tp-business-box-title d-flex align-items-center">
                      <span>
                        <TechIcon />
                      </span>
                      <h4 className="tp-business-title">Land a Remote Job</h4>
                    </div>
                    <p>
                      We offer meticulously crafted course outlines, guiding
                      learners <br /> to success and empowering them to secure
                      jobs in IT.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="tp-business-box mb-30">
                    <div className="tp-business-box-title d-flex align-items-center">
                      <span>
                        <PhoneIcon2 />
                      </span>
                      <h4 className="tp-business-title">
                        IT Consultant & Tech
                      </h4>
                    </div>
                    <p>
                      Our IT consultation services extend to expert website
                      development, <br /> providing tailored solutions to
                      elevate your digital presence.
                    </p>
                  </div>
                </div>

                {/* <div className="tp-business-btn-area d-flex align-items-center mt-20">
                  <Link className="tp-btn" href="/about">
                    About Our Agency
                  </Link>
                  <Image
                    className="d-none d-xl-block"
                    src={business_user}
                    alt="theme-pure"
                  />
                  <i>
                    5m+ Customer
                    <span>
                      <LineArrowSix />
                    </span>
                  </i>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessArea;
