import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import VideoPopup from "@/src/modals/video-popup";
import ServiceContactForm from "@/src/forms/service-contact-form";
import service_details_thumb from "@assets/img/services/service-details/img-1_.jpg";
import service_video_thumb from "@assets/img/services/service-details/consultation_img-2_.jpg";
import RightSymbol from "@/src/svg/right-symbol";
import accordion from "@/src/data/accordion";

const service_details_content = {
  service_details_tab: [
    { id: 1, title: "Consumer Product", active: "active" },
    { id: 2, title: "Marketing Analysis", active: "" },
    { id: 3, title: "Speed Optimization", active: "" },
    { id: 4, title: "Email Marketing", active: "" },
    { id: 5, title: "Marketing Analysis", active: "" },
    { id: 6, title: "Media Marketing", active: "" },
  ],
  title: <>IT Consultation</>,
  description: (
    <>
      In our IT Consultation services, we offer personalized guidance to
      businesses navigating the complexities of the digital world. We analyze
      your specific needs, providing expert insights and crafting tailored
      solutions to enhance your IT infrastructure and overall performance.
      Teqsify is your dedicated partner in achieving optimal results in the
      ever-evolving tech landscape.
    </>
  ),
  title_2: <>We are your one-stop IT consultation shop, dedicated to:</>,
  description_2: <></>,
  feture_list: [
    <>
      <strong>Understanding your unique needs:</strong>We take the time to
      listen and assess your specific IT challenges and goals. Whether you're
      struggling with outdated infrastructure, security vulnerabilities, or
      inefficient processes, we identify the root causes and design customized
      solutions.
    </>,
    <>
      <strong>Providing expert guidance:</strong> Our experienced consultants
      possess in-depth knowledge across various IT domains, from cloud computing
      and network security to data management and software development.
    </>,
    <>
      <strong>Streamlining your operations:</strong> We help you optimize your
      IT infrastructure and processes, enhancing efficiency and productivity. We
      also offer ongoing support and maintenance, ensuring your systems run
      smoothly and securely.
    </>,
    <>
      <strong>Delivering measurable results:</strong> We don't just recommend
      solutions; we track their impact and provide data-driven insights to
      measure success. You'll see tangible improvements in areas like cost
      savings, performance, and business agility.
    </>,
  ],
  description_3: (
    <>
      {/*  Need something changed or is there something not quite working the way you
      envisaged? Is your van a little old and tired and need refreshing? Lorem
      Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry’s standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the
      leap into electronic typesetting, remaining essentially unchanged. */}
    </>
  ),
};
const {
  service_details_tab,
  title,
  description,
  title_2,
  description_2,
  feture_list,
  description_3,
} = service_details_content;

const ServiceDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isActive, setIsActive] = useState(1);

  return (
    <>
      <section className="tp-service-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-4">
              <div className="tp-service-widget">
                <div className="tp-service-widget-item mb-40">
                  <div className="tp-service-widget-tab">
                    <ul>
                      {service_details_tab.map((item, i) => (
                        <li key={i}>
                          <Link className={item.active} href="/service-details">
                            {item.title}{" "}
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="tp-service-widget-item mb-40">
                  <div className="tp-service-contact">
                    <div className="tp-service-contact-form">
                      <ServiceContactForm />
                      <p className="ajax-response"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-lg-12">
              <div className="tp-service-details-wrapper">
                {/* <div className="tp-service-details-thumb">
                  <Image src={service_details_thumb} alt="teqsify" />
                </div> */}
                <h3 className="tp-service-details-title">{title}</h3>
                <p>{description}</p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tp-service-details-thumb p-relative">
                      <Image src={service_video_thumb} alt="theme-pure" />
                      {/*  <div className="tp-video-play text-center">
                        <a
                          className="popup-video effect-1 effect-2"
                          onClick={() => setIsVideoOpen(true)}>
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </a>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tp-service-details-list">
                      <h3 className="tp-service-details-title">{title_2}</h3>
                      <p>{description_2}</p>
                      <ul>
                        {feture_list.map((item, i) => (
                          <li key={i}>
                            <span>
                              {" "}
                              <RightSymbol />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <p>{description_3}</p>

                <div className="tp-service-details-faq faq-style-1">
                  <div className="tp-faq-tab-content tp-accordion">
                    <div className="accordion" id="general_accordion">
                      {accordion.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => setIsActive(item.id)}
                          className={`accordion-item ${
                            isActive === item.id && "tp-faq-active"
                          }`}>
                          <h2
                            className="accordion-header"
                            id={`heading${item.accordion_id}`}>
                            <button
                              className={`accordion-button ${item.collapsed}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${item.accordion_id}`}
                              aria-expanded={item.aria_expanded}
                              aria-controls={`collapse${item.accordion_id}`}>
                              {item.question}
                            </button>
                          </h2>
                          <div
                            id={`collapse${item.accordion_id}`}
                            className={`accordion-collapse collapse ${
                              item?.active && "show"
                            }`}
                            aria-labelledby={`heading${item.accordion_id}`}
                            data-bs-parent="#general_accordion">
                            <div className="accordion-body">
                              <p>{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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

export default ServiceDetailsArea;
