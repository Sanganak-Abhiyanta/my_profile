import React from "react";
import "./contacts.css";
export default function Contacts() {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__tilte">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <div className="contact__title"></div>
          <p className="contact__details">
            Don't like forms? Send me an email. ✌🤞🔥
          </p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Enter Your subject"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              cols={30}
              rows={10}
              className="contact__form-input"
              placeholder="Write Your Query or Message"
            ></textarea>
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}
