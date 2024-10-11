import "../../App.css";
import { send } from "emailjs-com";
import React from "react";
import { useState } from "react";
import { RxRowSpacing } from "react-icons/rx";

export const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "abdelkouddous.hamel@gmail.com",
    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    //send func API
    //
    send("service_r6atkzd", "template_y06klou", toSend, "LBT-kCZmh8wG87Ccv")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "Thank you for connecting with us, we will contact with you soon!"
        );
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const styleDiv = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1px",
    width: "100%",
    margin: " 2px auto",
  };

  const styleMainDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "transparent",
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div style={styleMainDiv}>
      <form onSubmit={onSubmit}>
        <div style={styleDiv}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* <div style={styleDiv}>
            <input
              type="label"
              name="to_name"
              placeholder="to name"
              value={toSend.to_name}
              onChange={handleChange}
            />
          </div> */}
        <div style={styleDiv}>
          <input
            type="email"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styleDiv}>
          <textarea
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <button style={styleDiv} className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
