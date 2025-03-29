// File: src/components/Home/Form.js
import "../../App.css";
import { send } from "emailjs-com";
import React, { useState } from "react";
import "./Form.css"; // We'll create this file

export const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "abdelkouddous.hamel@gmail.com",
    message: "",
    reply_to: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    send("service_r6atkzd", "template_y06klou", toSend, "LBT-kCZmh8wG87Ccv")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitStatus("success");
        setToSend({
          from_name: "",
          to_name: "abdelkouddous.hamel@gmail.com",
          message: "",
          reply_to: "",
        });
        alert("Thank you for connecting with me, I will contact you soon!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setSubmitStatus("error");
        alert("Message failed to send. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="tool-stack-container">
      <div className="contact-section ">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-subheading">
          Have a question or want to work together? Drop me a message!
        </p>

        <div className="contact-form-wrapper">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="from_name" className="visually-hidden">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Your Name"
                value={toSend.from_name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="reply_to" className="visually-hidden">
                Your Email
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                placeholder="Your Email"
                value={toSend.reply_to}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="visually-hidden">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={toSend.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-control"
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {submitStatus === "success" && (
              <div className="form-status success">
                Message sent successfully!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="form-status error">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
