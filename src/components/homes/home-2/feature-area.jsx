import React from "react";
import Link from "next/link";
import Image from "next/image";

import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowFive from "@/src/svg/line-arrow-5";

import feature_img_1 from "@assets/img/feature/mission.png";
import feature_img_2 from "@assets/img/feature/vision.png";
import feature_img_3 from "@assets/img/feature/objectives.png";
import shape_1 from "@assets/img/feature/shape-1.png";
import shape_2 from "@assets/img/feature/shape-2.png";
import shape_3 from "@assets/img/feature/img-shape.png";

const feature_content = {
  feature_data: [
    {
      id: 1,
      img: feature_img_1,
      title: "Our mission",
      description: (
        <p>
          To empower individuals with the knowledge and skills needed for
          success in the dynamic field of IT. Through our cutting-edge courses
          and expert consultation services, we aim to foster a community of tech
          enthusiasts who are well-equipped to innovate and thrive in the
          ever-evolving digital landscape.
        </p>
      ),
    },
    {
      id: 2,
      img: feature_img_2,
      title: "Our Vision",
      description: (
        <p>
          To be a beacon of excellence in IT education and consultation,
          inspiring a future generation of tech leaders. We envision a world
          where individuals, guided by Teqsify, not only master the intricacies
          of IT but also contribute to groundbreaking innovations that simplify
          and transform the tech industry.
        </p>
      ),
    },
    {
      id: 3,
      img: feature_img_3,
      title: "Our Objectives",
      description: (
        <>
          <ul>
            <li>
              <span>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z"
                    fill="currentColor"
                  />
                </svg>
              </span>{" "}
              Provide well-structured and comprehensive courses that meet the
              evolving demands of the IT industry.
            </li>
            <li>
              <span>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z"
                    fill="currentColor"
                  />
                </svg>
              </span>{" "}
              Guide learners to not only acquire theoretical knowledge but also
              gain hands-on experience.
            </li>
            <li>
              <span>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z"
                    fill="currentColor"
                  />
                </svg>
              </span>{" "}
              Facilitate a transition from learning to practical application by
              offering expert IT consultation services.
            </li>
          </ul>
        </>
      ),
    },
  ],
};
const { feature_data } = feature_content;

const FeatureArea = ({ about }) => {
  return (
    <>
      <section
        className={`tp-feature-area ${
          about ? "feature-breadcrumb pb-100" : ""
        }`}>
        {about ? null : (
          <div className="tp-feature-shape">
            <Image src={shape_1} alt="theme-pure" />
          </div>
        )}
        <div className="container container-large">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-feature-title-wrapper">
                <span className="tp-section-title__pre">
                  teqsify <span className="title-pre-color">IT Consult</span>
                  <AngleArrow />
                </span>
                <h3 className="tp-section-title">
                  We’ve Been Thriving For{" "}
                  <span className="title-color">10 Years</span>
                  <span className="title-right-shape">
                    <LineArrowFive />
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-feature-wrapper p-relative">
                <p>
                  As IT demand rises, Teqsify is here to equip you with
                  cutting-edge <br />
                  skills and expert guidance
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {feature_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="tp-feature-item-box p-relative wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s">
                  <div className="tp-feature-item p-relative mb-30">
                    <div className="tp-feature-item-shape">
                      <Image src={shape_2} alt="theme-pure" />
                    </div>
                    <div className="tp-feature-item-wrapper">
                      <div className="tp-feature-item-thumb">
                        <div className="shape">
                          <Image src={shape_3} alt="theme-pure" />
                        </div>
                        <Image
                          src={item.img}
                          className="thumb"
                          alt="theme-pure"
                        />
                      </div>
                      <div className="tp-feature-item-content">
                        <h3 className="feature-title">
                          <Link href="/about">{item.title}</Link>
                          <span>
                            <AngleArrow />
                          </span>
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="tp-feature-item-btn">
                    <Link href="/about">
                      <i className="fa-regular fa-arrow-right"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
