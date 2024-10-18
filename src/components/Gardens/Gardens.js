import React, { useState } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

const Gardens = () => {
  const [activeTab, setActiveTab] = useState("#tab-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  React.useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });
  }, []);

  return (
    <div>
      <section className="page-title">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/banner/inner-banner.jpg)",
          }}
        ></div>
        <div className="line-box">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Gardens</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="#.">City Profile</a>
              </li>
              <li>
                <span>Gardens</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />

      <div className="auto-container mb-5 mt-5">
        <div className="col-lg-12 col-md-12 col-sm-12 content-side">
          <div className="department-details-content">
            <div className="content-three">
              <div className="tabs-box">
                <div className="tab-btn-box">
                  <ul className="tab-btns tab-buttons clearfix">
                    <li
                      className={`tab-btn ${
                        activeTab === "#tab-1" ? "active-btn" : ""
                      }`}
                      data-tab="#tab-1"
                      onClick={() => handleTabClick("#tab-1")}
                    >
                      Ambernath Bunglow Society Garden
                    </li>
                    <li
                      className={`tab-btn ${
                        activeTab === "#tab-2" ? "active-btn" : ""
                      }`}
                      data-tab="#tab-2"
                      onClick={() => handleTabClick("#tab-2")}
                    >
                      Badlapur Gymkhana
                    </li>
                    <li
                      className={`tab-btn ${
                        activeTab === "#tab-3" ? "active-btn" : ""
                      }`}
                      data-tab="#tab-3"
                      onClick={() => handleTabClick("#tab-3")}
                    >
                      Balasaheb Thakrey Smarak Udyan Shantinagar
                    </li>
                    <li
                      className={`tab-btn ${
                        activeTab === "#tab-4" ? "active-btn" : ""
                      }`}
                      data-tab="#tab-4"
                      onClick={() => handleTabClick("#tab-4")}
                    >
                      Chaitanya Sankul Garden
                    </li>
                    <li
                      className={`tab-btn ${
                        activeTab === "#tab-5" ? "active-btn" : ""
                      }`}
                      data-tab="#tab-5"
                      onClick={() => handleTabClick("#tab-5")}
                    >
                      Dharmaveer Anand Dighe Sabhagruh
                    </li>
                  </ul>
                </div>
                <div className="tabs-content">
                <div className={`tab ${activeTab === "#tab-1" ? "active-tab" : ""}`} id="tab-1">
                    <div className="content-box department-section">
                      <div className="row">
                        <a
                          href="assets/images/gardens/ambernath-buglow-gardens/img1.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery1"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/ambernath-buglow-gardens/img1.jpg"
                            alt="img1"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/ambernath-buglow-gardens/img2.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery1"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/ambernath-buglow-gardens/img2.jpg"
                            alt="img2"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/ambernath-buglow-gardens/img3.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery1"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/ambernath-buglow-gardens/img3.jpg"
                            alt="img3"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/ambernath-buglow-gardens/img4.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery1"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/ambernath-buglow-gardens/img4.jpg"
                            alt="img4"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/ambernath-buglow-gardens/img5.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery1"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/ambernath-buglow-gardens/img5.jpg"
                            alt="img5"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`tab ${activeTab === "#tab-2" ? "active-tab" : ""}`} id="tab-2">
                    <div className="content-box department-section">
                      <div className="row">
                        <a
                          href="assets/images/gardens/badlapur-gymkhana/img1.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery2"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/badlapur-gymkhana/img1.jpg"
                            alt="img1"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/badlapur-gymkhana/img2.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery2"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/badlapur-gymkhana/img2.jpg"
                            alt="img2"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/badlapur-gymkhana/img3.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery2"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/badlapur-gymkhana/img3.jpg"
                            alt="img3"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/badlapur-gymkhana/img4.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery2"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/badlapur-gymkhana/img4.jpg"
                            alt="img4"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/badlapur-gymkhana/img5.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery2"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/badlapur-gymkhana/img5.jpg"
                            alt="img5"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/badlapur-gymkhana/img6.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery2"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/badlapur-gymkhana/img6.jpg"
                            alt="img6"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`tab ${activeTab === "#tab-3" ? "active-tab" : ""}`} id="tab-3">
                    <div className="content-box department-section">
                      <div className="row">
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img1.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img1.jpg"
                            alt="img1"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img2.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img2.jpg"
                            alt="img2"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img3.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img3.jpg"
                            alt="img3"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img4.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img4.jpg"
                            alt="img4"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img5.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img5.jpg"
                            alt="img5"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img6.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img6.jpg"
                            alt="img6"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img7.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img7.jpg"
                            alt="img7"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img8.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img8.jpg"
                            alt="img8"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img9.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img9.jpg"
                            alt="img9"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img10.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img10.jpg"
                            alt="img10"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img11.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img11.jpg"
                            alt="img11"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/balasaheb-takare-udyan/img12.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery3"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/balasaheb-takare-udyan/img12.jpg"
                            alt="img12"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`tab ${activeTab === "#tab-4" ? "active-tab" : ""}`} id="tab-4">
                    <div className="content-box department-section">
                      <div className="row">
                        <a
                          href="assets/images/gardens/chaitanya-sankul-garden/img1.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery4"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/chaitanya-sankul-garden/img1.jpg"
                            alt="img1"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/chaitanya-sankul-garden/img2.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery4"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/chaitanya-sankul-garden/img2.jpg"
                            alt="img2"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/chaitanya-sankul-garden/img3.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery4"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/chaitanya-sankul-garden/img3.jpg"
                            alt="img3"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/chaitanya-sankul-garden/img4.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery4"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/chaitanya-sankul-garden/img4.jpg"
                            alt="img4"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/chaitanya-sankul-garden/img5.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery4"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/chaitanya-sankul-garden/img5.jpg"
                            alt="img5"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/chaitanya-sankul-garden/img6.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery4"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/chaitanya-sankul-garden/img6.jpg"
                            alt="img6"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="assets/images/gardens/chaitanya-sankul-garden/img7.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery4"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/chaitanya-sankul-garden/img7.jpg"
                            alt="img7"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`tab ${activeTab === "#tab-5" ? "active-tab" : ""}`} id="tab-5">
                    <div className="content-box department-section">
                      <div className="row">
                        <a
                          href="assets/images/gardens/anand-dighe-sabhagruh/img1.jpg"
                          data-toggle="lightbox"
                          data-gallery="example-gallery4"
                          className="col-sm-2 glightbox"
                        >
                          <img
                            src="assets/images/gardens/anand-dighe-sabhagruh/img1.jpg"
                            alt="img1"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery End */}
    </div>
  );
};

export default Gardens;
