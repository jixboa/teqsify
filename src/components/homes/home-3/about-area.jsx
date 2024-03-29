import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AngleArrow from "@/src/svg/angle-arrow";
import VideoPopup from "@/src/modals/video-popup";
// about img import here
import about_img_1 from "@assets/img/about/home-3/shape-4.png";
import about_img_2 from "@assets/img/about/home-3/img-1.jpg";
import about_img_3 from "@assets/img/about/home-3/img-2.jpg";
import about_img_4 from "@assets/img/about/home-3/img-3.jpg";
// about shape import here
import about_shape_1 from "@assets/img/about/home-3/shape-1.png";
import about_shape_2 from "@assets/img/about/home-3/shape-2.png";
import about_shape_3 from "@assets/img/about/home-3/shape-3.png";
// import progressbar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import about_img from "@assets/img/about/about-1_.png";
import about_img_10 from "@assets/img/business/shape-5.png";

const AboutArea = ({ about }) => {
  const percentage = 50;
  const percentage2 = 75;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className={`${
          about
            ? "tp-about-breadcrumb pt-100 pb-90"
            : "tp-about-3-area pt-185 pb-170"
        } p-relative`}>
        {about ? (
          <div className="tp-about-3-shape d-none d-lg-block">
            <Image src={about_img_10} alt="theme-pure" />
          </div>
        ) : (
          /**  <div className="shape-bg">
            <Image src={about_img_1} alt="theme-pure" />
          </div> */
          <></>
        )}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                <Image src={about_img} alt="theme-pure" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tp-about-3-wrapper">
                <div className="tp-about-3-title-wrapper">
                  <span className="tp-section-title__pre">
                    teqsify <span className="title-pre-color">IT Consult</span>
                    <AngleArrow />
                  </span>
                  <h3 className="tp-section-title">
                    <span className="title-color"> Inspiring </span> Innovations
                    <span className="title-color"> </span> <br /> Delivering
                    <span className="title-color">{""} Simplicity</span>
                  </h3>
                </div>
                <p className="text">
                  Teqsify is a pioneering technology hub that empowers
                  individuals and businesses to embrace the power of technology
                  through its simplified solutions and unwavering commitment to
                  fostering innovation.
                  <br /> Specializing in online{" "}
                  <strong>Linux & DevOps tuition</strong>, our flagship course
                  simplifies complex tech concepts while fostering creativity
                  and problem-solving.
                  <br />
                  As <strong>IT consultants</strong>, we provide tailored
                  solutions that simplify the digital landscape for businesses.
                  <br />
                  In <strong>web development</strong>, we craft dynamic,
                  user-centric websites, offering both services and tuition to
                  simplify and inspire in the world of coding. <br />. Teqsify
                  goes beyond services, assisting individuals in structuring
                  resumes and guiding them towards landing remote jobs.
                </p>
                <div className="tp-about-progressbar-inner d-flex flex-wrap pt-20">
                  <div className="tp-about-3-progressbar d-flex align-items-center">
                    <div className="circular tl-progress">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={5}
                        className="knob"
                      />
                    </div>
                    <div className="tp-about-3-progressbar-title">
                      <p>
                        Business <br /> Strategy Growth
                      </p>
                    </div>
                  </div>
                  <div className="tp-about-3-progressbar d-flex align-items-center">
                    <div className="circular tl-progress">
                      <CircularProgressbar
                        value={percentage2}
                        text={`${percentage2}%`}
                        strokeWidth={5}
                      />
                    </div>
                    <div className="tp-about-3-progressbar-title">
                      <p>
                        Valuable <br /> Ideas
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="tp-about-3-btn-inner d-flex flex-wrap">
                  <div className="tp-about-btn ">
                    <Link className="tp-btn" href="/about">
                      Our History
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                  <div className="tp-about-3-year">
                    <p>
                      Bright Dua
                      <br />
                      <span>CEO, since 2015</span>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"csnD5EVL5z8"}
      />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;
