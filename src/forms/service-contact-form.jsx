import React from "react";
import Swal from "sweetalert2";

const ServiceContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Make a POST request to the API route
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // Handle success
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: data.message,
            timer: 10000,
          });

          //console.log("Form submitted successfully!");
          e.target.reset();
        } else {
          // Handle error
          Swal.fire({
            icon: "eror",
            title: "Failed",
            text: "Please refresh page and try again",
            timer: 10000,
          });
          // console.error("Form submission failed!");
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error("Error:", error);
      });
  };

  return (
    <>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        method="POST"
        action="/api/contact">
        <p>
          <h3>Entroll Now</h3>
        </p>
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="name" type="text" placeholder="Fast Name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="lastname" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-service-contact-input">
              <input name="email" type="email" placeholder="Email" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="phone" type="text" placeholder="Phone" required />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-service-contact-input">
              <textarea name="message" placeholder="Enter Message"></textarea>
            </div>
          </div>
          <div className="tp-service-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Submit Details
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ServiceContactForm;
