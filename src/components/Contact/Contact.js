import React from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import Location from "../../assets/images/icons/Location Icon.png";
import Quick from "../../assets/images/icons/Quick Contact Icon.png";
import Off from "../../assets/images/icons/Off hours Icon.png";

const Contact = () => {
  return (
    <>
      <section className="page-title">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${innerBanner})` }}
        ></div>
        {/* <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-25.png)' }}></div> */}
        <div className="line-box">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Contact Us</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
      {/* Contact Info Section */}
      <section className="contact-info-section centred">
        <div className="auto-container">
          <div className="tabs-box">
            <div className="tabs-content pt-5">
              <div className="tab active-tab" id="tab-1">
                <div className="row clearfix">
                  <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                    <div className="info-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <img
                            src={Location}
                            alt="Location Icon"
                          />
                        </div>
                        <h3>Location</h3>
                        <div className="text-box">
                          <p>
                            568P+85P, Veer Savarkar Flyover, Katrap, Badlapur,
                            Maharashtra 421503
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                    <div className="info-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <img
                            src={Quick}
                            alt="Quick Contact Icon"
                          />
                        </div>
                        <h3>Quick Contact</h3>
                        <div className="text-box">
                          <p>
                            <a href="tel:02512690271">0251 269 0271</a>
                            <br />
                            <a href="mailto:support@kbmc.gov.in">
                              support@kbmc.gov.in
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                    <div className="info-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <img
                            src={Off}
                            alt="Off hours Icon"
                          />
                        </div>
                        <h3>Off Hours</h3>
                        <div className="text-box">
                          <p>
                            Daily 10am to 4:30pm, <br />
                            Sat & Sun Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Style Two */}
      <section className="contact-style-two mb-5">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 map-column">
              <div className="map-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6714464400943!2d73.23056668507914!3d19.165853902897943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be792d35920ed4d%3A0x17d29709cf64ec88!2sKulgoan%20Badlapur%20Municipal%20Council!5e0!3m2!1sen!2sin!4v1717412383057!5m2!1sen!2sin"
                  width="600"
                  height="525"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="sec-title">
                  <h2>Send Your Feedback</h2>
                  <p>
                    Fill out this form to send your inquiries or complaints.
                  </p>
                </div>
                <div className="form-inner">
                  <form
                    method="post"
                    action="sendemail.php"
                    id="contact-form"
                    className="default-form"
                  >
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="mobileno"
                          placeholder="Mobile No."
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Your Feedback ..."
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button
                          className="theme-btn btn-one"
                          style={{ backgroundColor: "#29aae1" }}
                          type="submit"
                          name="submit-form"
                        >
                          Send a Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
