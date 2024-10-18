import React, { useState } from "react";

const DeptLayer2 = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active accordion

  // Function to handle the click event on an accordion
  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active accordion
  };

  return (
    <div>
      <section class="page-title ">
        <div
          class="bg-layer"
          style={{
            backgroundImage: "url(assets/images/banner/inner-banner.jpg)",
          }}
        ></div>
        <div class="line-box">
          <div class="line-1"></div>
          <div class="line-2"></div>
        </div>
        <div class="auto-container">
          <div class="content-box">
            <h1>General Admin Department</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <a href="/departments">Departments</a>
              </li>
              <li>
                <span>General Admin Department</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="departments-style-two faq-section alternat-2">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-9 col-md-12 col-sm-12 content-side">
              <div class="department-details-content">
                <div class="content-one dept_leyer_1">
                  <div class="title-box">
                    <h3>
                      General Meeting and Standing Committee Meeting Resolutions
                    </h3>
                    <hr />
                  </div>
                </div>
              </div>
              <div class="row clearfix">
                <div class="col-lg-1 col-md-1 col-sm-1 image-column">
                  <div class="image-box">
                    <figure class="image">
                      <img src="assets/images/resource/faq-1.jpg" alt="" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-11 col-md-11 col-sm-11 content-column">
                  <div className="content-box">
                    <ul className="accordion-box year-accordion-box">
                      {/* First Accordion */}
                      <li className={`accordion block ${activeIndex === 0 ? 'active-block' : ''}`}>
                        <div className="acc-btn" onClick={() => handleAccordionClick(0)}>
                          <span class="count-text">01</span>
                          <h3>Year 2021 - 2022</h3>
                        </div>
                        <div className="acc-content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                          <div class="row">
                            <div class="col-md-6">
                              <h5 class="pb-3 pl-5">General Meeting</h5>
                              <ul></ul>
                            </div>
                            <div class="col-md-6">
                              <h5 class="pb-3 pl-5">
                                Standing Committee Meeting Resolutions
                              </h5>
                              <ul>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/01_Prashaskiy Tharav April - 2021.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav April 2021
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/02_Prashaskiy Tharav May - 2021.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav May 2021
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/03_Prashaskiy Tharav June - 2021.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav June 2021
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/04_Prashaskiy Tharav July - 2021.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav July 2021
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/05_Prashaskiy Tharav Aug - 2021.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav August 2021
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/06_Prashaskiy Tharav Sept - 2021.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav September 2021
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/07_Prashaskiy Tharav Oct - 2021.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav October 2021
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/08_Prashaskiy Tharav Nov - 2021.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav November 2021
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/09_Prashaskiy Tharav Dec - 2021.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav December 2021
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/10_Prashaskiy Tharav Jan - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav January 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/11_Prashaskiy Tharav Feb - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav February 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2021-22/12_Prashaskiy Tharav Mar - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav March 2022
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={`accordion block ${activeIndex === 1 ? 'active-block' : ''}`}>
                        <div className="acc-btn" onClick={() => handleAccordionClick(1)}>
                          <span class="count-text">02</span>
                          <h3>Year 2022 - 2023</h3>
                        </div>
                        <div className="acc-content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                          <div class="row">
                            <div class="col-md-6">
                              <h5 class="pb-3 pl-5">General Meeting</h5>
                              <ul></ul>
                            </div>
                            <div class="col-md-6">
                              <h5 class="pb-3 pl-5">
                                Standing Committee Meeting Resolutions
                              </h5>
                              <ul>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/01_Prashaskiy Tharav April - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav April 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/02_Prashaskiy Tharav May - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav May 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/03_Prashaskiy Tharav June - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav June 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/04_Prashaskiy Tharav July - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav July 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/05_Prashaskiy Tharav Aug - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav August 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/06_Prashaskiy Tharav Sept - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav September 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/07_Prashaskiy Tharav Oct - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav October 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/08_Prashaskiy Tharav Nov - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav November 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/09_Prashaskiy Tharav Dec - 2022.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav December 2022
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/10_Prashaskiy Tharav Jan - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav January 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/11_Prashaskiy Tharav Feb - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav February 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2022-23/12_Prashaskiy Tharav Mar - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav March 2023
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={`accordion block ${activeIndex === 2 ? 'active-block' : ''}`}>
                        <div className="acc-btn" onClick={() => handleAccordionClick(2)}>
                          <span class="count-text">03</span>
                          <h3>Year 2023 - 2024</h3>
                        </div>
                        <div className="acc-content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                          <div class="row">
                            <div class="col-md-6">
                              <h5 class="pb-3 pl-5">General Meeting</h5>
                              <ul>
                                {/* <li><a href="#.">Annual General Meeting dated 31st May 2010</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 02nd June 2010</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 21st June 2010</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 04th July 2010</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 04th August 2010</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 12th August 2010</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 08th September 2010</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 09th October 2010</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 11th October 2010</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 09th February 2011</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 21st February 2011</a></li>
                                                    <li><a href="#.">Annual General Meeting dated 12th March 2011</a></li> */}
                              </ul>
                            </div>
                            <div class="col-md-6">
                              <h5 class="pb-3 pl-5">
                                Standing Committee Meeting Resolutions
                              </h5>
                              <ul>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/01_Prashaskiy Tharav April - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav April 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/02_Prashaskiy Tharav May - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav May 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/03_Prashaskiy Tharav June - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav June 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/04_Prashaskiy Tharav July - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav July 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/05_Prashaskiy Tharav Aug - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav August 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/06_Prashaskiy Tharav Sapt - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav September 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/07_Prashaskiy Tharav Oct - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav October 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/08_Prashaskiy Tharav Nov -2023.pdf/"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav November 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/09_Prashaskiy Tharav Dec - 2023.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav December 2023
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/documents/general_admin_deprt/year-2023-24/10_Prashaskiy Tharav Jan - 2024.pdf"
                                    target="_blank"
                                  >
                                    Prashaskiy Tharav January 2024
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={`accordion block ${activeIndex === 3 ? 'active-block' : ''}`}>
                        <div className="acc-btn" onClick={() => handleAccordionClick(3)}>
                          <span class="count-text">04</span>
                          <h3>Year 2024 - 2025</h3>
                        </div>
                        <div className="acc-content" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
                          <div class="row">
                            <div class="col-md-6">
                              <h5 class="pb-3 pl-5">General Meeting</h5>
                              <ul></ul>
                            </div>
                            <div class="col-md-6">
                              <h5 class="pb-3 pl-5">
                                Standing Committee Meeting Resolutions
                              </h5>
                              <ul></ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div class="department-sidebar">
                <div class="category-widget">
                  <div class="widget-content">
                  <ul class="category-list clearfix">
                      <li>
                        {" "}
                        <a href="/general-admin-department">
                          General Admin Department
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/audit-department">Audit Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/tax-department">Tax Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/account-department">Account Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/town-planning">Town Planning</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/electrical-department">
                          Electrical Department
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/public-work-department">
                          Public Work Department (PWD)
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/income-department">Milkat (Income)</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/egovernance-department">
                          E-Governance Department
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/health-department">Health Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/wcd">WCD (Women and Child Development)</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/advertisement-department">
                          Advertisement Department
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/education-department">Education Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="#.">Security Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/vehicle-department">Vehicle Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/nulm-department">NULM Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/hospital-department">Hospital Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/fire-department">Fire Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/legal-department">Legal Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/disability-welfare-department">
                          Disability Welfare
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#.">Store &amp; Records Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="#.">Marriage Registration</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/birth-death-department">
                          Birth &amp; Death Department
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeptLayer2;
