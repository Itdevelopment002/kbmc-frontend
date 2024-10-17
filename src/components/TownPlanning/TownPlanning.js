import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import badlapurDp from "../../assets/images/town-planning/BADLAPUR-D-all-dp.jpg";
import mankivaliImage from "../../assets/images/town-planning/01-Mankivali.jpg";
import badlapur1Image from "../../assets/images/town-planning/02-Badlapur-1.jpg";
import katrapImage from "../../assets/images/town-planning/03-Katrap.jpg";
import Joveli from "../../assets/images/town-planning/04-Joveli.jpg";
import yernzad from "../../assets/images/town-planning/05-Yernzad.jpg";
import badalpur2 from "../../assets/images/town-planning/06-Badlapur-2.jpg";
import valvili from "../../assets/images/town-planning/07-Valivli.jpg";
import belavali from "../../assets/images/town-planning/08-Belavali.jpg";
import manjarli from "../../assets/images/town-planning/09-Manjarli.jpg";
import sanavali from "../../assets/images/town-planning/10-Sonivali.jpg";
import kharvai from "../../assets/images/town-planning/11-Kharvai.jpg";
import shirgaon from "../../assets/images/town-planning/12-Shirgaon-2.jpg";
import shirgaon2 from "../../assets/images/town-planning/13-Shirgaon-02.jpg";
import kulgaon from "../../assets/images/town-planning/14-Kulgaon.jpg";

const TownPlanning = () => {
  useEffect(() => {
    // Initialize GLightbox when the component is mounted
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    return () => {
      // Cleanup on unmount
      lightbox.destroy();
    };
  }, []);
  return (
    <div>
      <section class="page-title ">
        <div
          class="bg-layer"
          style={{ backgroundImage: `url(${innerBanner})` }}
        ></div>
        <div class="line-box">
          <div class="line-1"></div>
          <div class="line-2"></div>
        </div>
        <div class="auto-container">
          <div class="content-box">
            <h1>Town Planning Department</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <a href="departments.php">Departments</a>
              </li>
              <li>
                <span>Town Planning Department</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section class="departments-style-two alternat-2" id="town-planning">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-9 col-md-12 col-sm-12 content-side">
              <div class="department-details-content">
                <div class="content-one">
                  <div class="title-box">
                    <h3>Town Planning Department</h3>
                  </div>
                  <div class="text-box">
                    <p>
                      The Urban Planning Department is responsible for creating
                      land use policies, zoning regulations, and development
                      plans to ensure organized and sustainable growth of the
                      city or town. This department plays a crucial role in
                      shaping the future growth and development of urban areas.
                      They work on creating plans and policies that promote
                      sustainable, well-organized, and comprehensive growth,
                      while also taking into consideration the environment and
                      community interests. Typically, this department consists
                      of urban planners, landscape architects, engineers, and
                      other professionals who collaborate to develop
                      comprehensive plans for the future development of the
                      community.
                    </p>
                  </div>
                </div>
                <br />
                <div class="content-box">
                  <div class="row">
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/BADLAPUR-D-all-dp.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class=""
                      >
                        <img
                          src="assets/images/town-planning/BADLAPUR-D-all-dp.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Badlapur</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/BADLAPUR-D-all-dp.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/01-Mankivali.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class=""
                      >
                        <img
                          src="assets/images/town-planning/01-Mankivali.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Mankivali</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/01-Mankivali.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/02-Badlapur-1.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/02-Badlapur-1.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Badlapur</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/02-Badlapur-1.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/03-Katrap.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/03-Katrap.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Katrap</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/03-Katrap.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/04-Joveli.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/04-Joveli.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Joveli</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/04-Joveli.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/05-Yernzad.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/05-Yernzad.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Yernzad</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/05-Yernzad.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/06-Badlapur-2.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/06-Badlapur-2.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Badlapur</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/06-Badlapur-2.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/07-Valivli.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/07-Valivli.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Valivli</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/07-Valivli.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/08-Belavali.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/08-Belavali.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Belavali</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/08-Belavali.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/09-Manjarli.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/09-Manjarli.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Manjarli</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/09-Manjarli.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/10-Sonivali.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/10-Sonivali.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Sonivali</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/10-Sonivali.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/11-Kharvai.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/11-Kharvai.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Kharvai</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/11-Kharvai.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/12-Shirgaon-2.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/12-Shirgaon-2.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Shirgaon</h6>
                      </a>{" "}
                      alt=""
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/12-Shirgaon-2.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/13-Shirgaon-02.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/13-Shirgaon-02.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Shirgaon</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/13-Shirgaon-02.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 town_plan">
                      <a
                        href="assets/images/town-planning/14-Kulgaon.jpg"
                        data-toggle="lightbox"
                        data-gallery="example-gallery"
                        class="col-sm-3"
                      >
                        <img
                          src="assets/images/town-planning/14-Kulgaon.jpg"
                          alt=""
                          class="img-fluid"
                        />
                        <h6 class="text-center">Kulgaon</h6>
                      </a>
                      <div class="pdf-dwnl">
                        <a
                          href="assets/images/town-planning/pdf/14-Kulgaon.pdf"
                          download
                          target="_blank"
                        >
                          <i class="fa fa-download"></i>
                        </a>
                      </div>
                    </div>
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
                        <a href="/general-admin-dept">
                          General Admin Department
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/audit-dept">Audit Department</a>
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
                        <a href="/income-dept">Milkat (Income)</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/egovernance-dept">E-Governance Department</a>
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
                        <a href="/advertisement-dept">
                          Advertisement Department
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/education-department">Education Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/#">Security Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/vehicle-dept">Vehicle Department</a>
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
                        <a href="/legal-dept">Legal Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/disability-welfare-dept">
                          Disability Welfare
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/#">Store &amp; Records Department</a>
                      </li>
                      <li>
                        {" "}
                        <a href="/#">Marriage Registration</a>
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

export default TownPlanning;
