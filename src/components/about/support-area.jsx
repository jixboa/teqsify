import VideoPopup from "@/src/modals/video-popup";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import RightSymbol from "@/src/svg/right-symbol";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import support_img_1 from "@assets/img/about/home-3/img-1.jpg";
import support_img_2 from "@assets/img/about/home-3/img-2.jpg";
import support_img_3 from "@assets/img/about/home-3/img-3.jpg";
import support_shape from "@assets/img/about/home-3/shape-1.png";

const support_contact = {
  sub_title_1: "Count on our seasoned experts to guide you",
  sub_title_2: " to success in the realm of IT",
  info: (
    <>
      Seek Our Service, the tech hub where simplicity unlocks innovation.
      Explore solutions, ignite your ideas, and be part of the future
    </>
  ),
  lists: [
    <>Our consultations inspire innovative strategies for long-term success.</>,
    <>Unlock the complexities of Linux and DevOps with our online course</>,
    <>
      Teqsify's web development services and tuition deliver simplicity in
      creating dynamic, user-centric websites.{" "}
    </>,
  ],
};
const { sub_title_1, sub_title_2, info, lists } = support_contact;

const SupportArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="tp-support-breadcrumb fix pt-120 pb-210">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-fun-fact-title-wrapper support-breadcrumb">
                <span className="tp-section-title__pre">
                  teQsify <span className="title-pre-color">IT Consult</span>
                  <AngleArrow />
                </span>
                <h3 className="tp-section-title">
                  {sub_title_1}
                  <span className="title-color">{sub_title_2}</span>
                  <span className="title-left-shape">
                    <LineArrowTwo />
                  </span>
                </h3>
                <p>{info}</p>
                <ul className="mb-65">
                  {lists.map((list, i) => (
                    <li key={i}>
                      {" "}
                      <span>
                        {" "}
                        <RightSymbol />
                      </span>{" "}
                      {list}
                    </li>
                  ))}
                </ul>
                <div className="tp-support-breadcrumb-btn mb-30">
                  <Link className="tp-btn" href="/service">
                    Tell us How Can We Help
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-3-img p-relative fadeRight">
                <Image src={support_img_1} alt="theme-pure" />
                <Image
                  className="shape-1"
                  src={support_img_2}
                  alt="theme-pure"
                />
                {/* <div className="shape-2 p-relative">
                  <Image src={support_img_3} alt="theme-pure" />
                  <div className="tp-video-play">
                    <a
                      className="popup-video"
                      onClick={() => setIsVideoOpen(true)}>
                      <i className="fa-sharp fa-solid fa-play"></i>
                    </a>
                  </div>
                </div> */}
                <Image
                  className="shape-3"
                  src={support_shape}
                  alt="theme-pure"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"dGcsHMXbSOA"}
      /> */}
      {/* video modal end */}
    </>
  );
};
export default SupportArea;
