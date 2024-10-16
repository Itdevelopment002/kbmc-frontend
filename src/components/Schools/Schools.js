import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css"; // Import GLightbox CSS
import './lightbox-custom.css'
import img1 from "../../assets/images/banner/inner-banner.jpg";

const schoolsData = [
  { id: 1, name: "KBMC School No. 1", address: "Kulgaon", medium: "Marathi" },
  { id: 2, name: "KBMC School No. 2", address: "Kulgaon", medium: "Urdu" },
  { id: 3, name: "KBMC School No. 3", address: "Juveli", medium: "Marathi" },
  { id: 4, name: "KBMC School No. 4", address: "Mankivali", medium: "Marathi" },
  { id: 5, name: "KBMC School No. 5", address: "Vajpe", medium: "Marathi" },
  {
    id: 6,
    name: "KBMC School No. 6",
    address: "Shirgaon Aptewadi",
    medium: "Marathi",
  },
  { id: 7, name: "KBMC School No. 7", address: "Katrap", medium: "Marathi" },
  {
    id: 8,
    name: "KBMC School No. 8",
    address: "Katrap Mohpada",
    medium: "Marathi",
  },
  {
    id: 9,
    name: "KBMC School No. 9",
    address: "Hendrepada",
    medium: "Marathi",
  },
  { id: 10, name: "KBMC School No. 10", address: "Badlapur", medium: "Urdu" },
  {
    id: 11,
    name: "KBMC School No. 11",
    address: "Sonivali",
    medium: "Marathi",
  },
  {
    id: 12,
    name: "KBMC School No. 12",
    address: "Valivali",
    medium: "Marathi",
  },
  { id: 13, name: "KBMC School No. 13", address: "Eranjad", medium: "Marathi" },
  {
    id: 14,
    name: "KBMC School No. 14",
    address: "Belavali",
    medium: "Marathi",
  },
  {
    id: 15,
    name: "KBMC School No. 15",
    address: "Vadavali",
    medium: "Marathi",
  },
  {
    id: 16,
    name: "KBMC School No. 16",
    address: "Manjarli",
    medium: "Marathi",
  },
];

const schoolImages = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
];

const Schools = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox", // Selector for the lightbox
    });
  }, []);

  return (
    <div>
      <section className="page-title">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Schools</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="#.">City Profile</a>
              </li>
              <li>
                <span>Schools</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />

      <section className="service-style-four mt-5 pb-1">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="text-center">
                <tr>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Sr. No
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    School Names
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Address
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Medium
                  </th>
                </tr>
              </thead>
              <tbody>
                {schoolsData.map((school) => (
                  <tr key={school.id}>
                    <td>{school.id}</td>
                    <td>{school.name}</td>
                    <td>{school.address}</td>
                    <td>{school.medium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="container mb-5">
        <div className="col-lg-12 col-md-12 col-sm-12 content-side">
          <div className="department-details-content">
            <div className="content-three">
              <div className="tabs-box">
                <div className="tab-btn-box">
                  <ul className="tab-btns tab-buttons clearfix">
                    <li className="tab-btn active-btn" data-tab="#tab-1">
                      Schools Photo Gallery
                    </li>
                  </ul>
                </div>
                <div className="tabs-content">
                  <div className="tab active-tab" id="tab-1">
                    <div className="content-box">
                      <div className="content-box department-section">
                        <div className="row">
                          {schoolImages.map((image, index) => (
                            <div className="col-sm-2" key={index}>
                              <a
                                href={`assets/images/schools/${image}`}
                                className="glightbox"
                              >
                                <img
                                  src={`assets/images/schools/${image}`}
                                  alt={`img${index + 1}`}
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schools;
