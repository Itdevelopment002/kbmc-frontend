import React, { useEffect } from "react";
import $ from "jquery";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import img1 from "../../assets/images/satymev-jayate-3.png";
import img2 from "../../assets/images/icons/icon-25.png";
import img3 from "../../assets/images/kbmc_logo.jpg";
import img5 from "../../assets/images/icons/icon-4.png";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    if ($(".mobile-menu").length) {
      const mobileMenuContent = $(".main-header .menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
      $(".sticky-header .main-menu").append(mobileMenuContent);

      // Open the dropdown initially and keep it open
      $(".mobile-menu li.dropdown .dropdown-btn").each(function () {
        const $this = $(this);
        $this.addClass("open"); // Keep the dropdown open initially
        $this.prev("ul").slideDown(0); // Show the dropdown content
        $this.find(".fas").addClass("rotate-icon"); // Optional: add the rotate effect for the icon
      });

      // Dropdown Button Toggle
      $(".mobile-menu li.dropdown .dropdown-btn").on("click", function (e) {
        e.stopPropagation();

        const $this = $(this);
        const $dropdownMenu = $this.prev("ul");

        // Check if the dropdown is already open
        if ($this.hasClass("open")) {
          // Do NOT close the dropdown automatically
          return;
        } else {
          // Open the clicked dropdown and close any other open dropdowns
          $(".mobile-menu li.dropdown .dropdown-btn.open").each(function () {
            $(this).removeClass("open");
            $(this).prev("ul").slideUp(500);
            $(this).find(".fas").removeClass("rotate-icon");
          });

          $this.addClass("open");
          $dropdownMenu.slideDown(500);
          $this.find(".fas").addClass("rotate-icon");
        }
      });

      // Mobile menu toggle button
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
        $(".mobile-menu").addClass("visible");
      });

      // Close button for mobile menu
      $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
        "click",
        function () {
          $("body").removeClass("mobile-menu-visible");
          $(".mobile-menu").removeClass("visible");

          // Remove open state and collapse all dropdowns when the mobile menu is closed
          $(".mobile-menu li.dropdown .dropdown-btn").removeClass("open");
          $(".mobile-menu li.dropdown ul  ").slideUp(500);
        }
      );

      // Optional: Close dropdown if clicked outside
      $(document).on("click", function () {
        $(".mobile-menu li.dropdown .dropdown-btn").removeClass("open");
        $(".mobile-menu li.dropdown ul").slideUp(500);
      });
    }
  }, []);

  return (
    <>
      <div class="boxed_wrapper">
        <div id="search-popup" class="search-popup">
          <div class="popup-inner">
            <div class="upper-box clearfix">
              <figure class="logo-box pull-left">
                <a href="/">
                  <img src={img3} alt="KBMC Logo" />
                </a>
              </figure>
              <div class="close-search pull-right">
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
            <div class="overlay-layer"></div>
            <div class="auto-container">
              <div class="search-form">
                <form method="post" action="#.">
                  <div class="form-group">
                    <fieldset>
                      <input
                        type="search"
                        class="form-control"
                        name="search-input"
                        value=""
                        placeholder="Type your keyword and hit"
                        required
                      />
                      <button type="submit">
                        <img src={img5} alt="" />
                      </button>
                    </fieldset>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <header class="main-header">
          <div class="header-top">
            <div class="row" style={{ alignItems: "center" }}>
              <div class="col-md-5 col-xl-5 text-start"></div>
              <div class="col-md-2 col-xl-2">
                <figure class="logo text-center">
                  <a href="#.">
                    <img src={img1} alt="logo" style={{ width: "50px" }} />
                  </a>
                </figure>
              </div>

              <div class="col-md-2 col-xl-2">
                <div class="search-box">
                  <form method="post" action="#.">
                    <div class="form-group">
                      <input
                        type="search"
                        name="search-field"
                        placeholder="Search here..."
                        required
                      />
                      <button type="submit">
                        <img src={img2} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-2 col-xl-3">
                <ul class="social-links clearfix d-none d-md-block">
                  <li>
                    <div class="language-box">
                      <div class="select-box">
                        <select class="selectmenu">
                          <option>English</option>
                          <option>Marathi</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#.">
                      <span class="fab fa-youtube"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <span class="fab fa-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/home"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span class="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100015538206978&mibextid=ZbWKwL"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span class="fab fa-facebook"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="header-lower">
            <div class="outer-box">
              <div class="logo-box">
                <figure class="logo">
                  <a href="/">
                    <img src="assets/images/kbmc_logo.jpg" alt="logo" />
                  </a>
                </figure>
              </div>
              <div class="menu-area">
                <div class="mobile-nav-toggler">
                  <i class="icon-bar"></i>
                  <i class="icon-bar"></i>
                  <i class="icon-bar"></i>
                </div>
                <nav class="main-menu navbar-expand-md navbar-light">
                  <div
                    class="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul class="navigation clearfix">
                      <li class="current">
                        <a href="/">Home</a>{" "}
                      </li>
                      <li class="dropdown">
                        <a href="#.">About KBMC</a>
                        <ul>
                          <li>
                            <a href="/history">History</a>
                          </li>
                          <li>
                            <a href="/ward">Wards</a>
                          </li>
                          <li>
                            <a href="/elected-member">Elected Wing</a>
                          </li>
                          <li>
                            <a href="/org-structure">Organization Structure</a>
                          </li>
                          <li>
                            <a href="/functions">Functions</a>
                          </li>
                          <li>
                            <a href="/departments">Departments</a>
                          </li>
                          <li>
                            <a href="/elected-pre-officer">
                              Previous Chief Officers
                            </a>
                          </li>
                          <li>
                            <a href="/elected-pre-representative">
                              Previous Presidents
                            </a>
                          </li>
                          <li>
                            <a href="/awards">Awards</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#.">City Profile</a>
                        <ul>
                          <li>
                            <a
                              href="assets/documents/KBMC CIRCULATION A3 COLOR-Brown-24 (1).pdf"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Areas{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/property-holder">Property Holder</a>
                          </li>
                          <li>
                            <a href="/properties-milkat">Muncipal Properties</a>
                          </li>
                          <li>
                            <a href="/schools">Schools</a>
                          </li>
                          <li>
                            <a href="/gardens">Gardens</a>
                          </li>
                          <li>
                            <a href="/electric">Electric</a>
                          </li>
                          <li>
                            <a href="/roads">Roads</a>
                          </li>
                          <li>
                            <a href="/tree-census">Tree Census</a>
                          </li>
                          <li>
                            <a href="/health">Health</a>
                          </li>
                          <li>
                            <a href="/ponds-talao">Ponds / Talao</a>
                          </li>
                          <li>
                            <a href="/fire-station">Fire Station</a>
                          </li>
                          <li>
                            <a href="/private-hospital">Private Hospital</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#.">Online Services</a>
                        <ul>
                          <li>
                            <a
                              href="https://mahaulb.in/MahaULB/property/propertyOnlinePay"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Property Tax Payment
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://mahaulb.in/MahaULB/property/onlineReceiptReprint"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Property Tax Receipt
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://mjp.maharashtra.gov.in/pay-water-bill-online/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Water Tax Payment
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://crsorgi.gov.in/web/index.php/auth/login"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Birth &amp; Death Search{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://mahatenders.gov.in/nicgep/app"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Online Tenders
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://maha.autodcr.com/BPAMSClient/Default.aspx"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Auto DCR
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#.">Schemes</a>
                        <ul>
                          <li>
                            <a
                              href="assets/documents/Nulm_mahiti.pdf"
                              target="_blank"
                              rel="noreferrer"
                            >
                              NULM
                            </a>
                          </li>
                          <li>
                            <a href="/pmay">PMAY</a>
                          </li>
                          <li>
                            <a href="/nuhm">NUHM</a>
                          </li>
                          <li>
                            <a href="/amrut">AMRUT</a>
                          </li>
                          <li>
                            <a
                              href="assets/documents/Swachh_Bharat_Abhiyan.pdf"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Swachh Bharat
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="dropdown">
                        <a href="#.">Complaints</a>
                        <ul>
                          <li>
                            <a
                              href="https://aaplesarkar.mahaonline.gov.in/en"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Aaple Sarkar
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://pgportal.gov.in/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              P G Portal
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://rtionline.maharashtra.gov.in/RTIMIS/login/index.php"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Right to Information
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div class="menu-right-content">
                  <div class="btn-box">
                    <a href="#." class="header-btn">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sticky-header">
            <div class="outer-container">
              <div class="outer-box">
                <div class="logo-box">
                  <figure class="logo">
                    <a href="#.">
                      <img
                        src="assets/images/KBMC-logo-1-edited2.png"
                        alt="logo"
                      />
                    </a>
                  </figure>
                </div>
                <div class="menu-area clearfix">
                  <nav class="main-menu clearfix"></nav>
                  <div class="menu-right-content">
                    <div class="search-box">
                      <div class="search-box-outer search-toggler">
                        <img src="assets/images/icons/icon-4.png" alt="" />
                      </div>
                    </div>

                    <div class="btn-box">
                      <a href="#." class="header-btn">
                        Administration Chief
                      </a>
                    </div>
                    <div class="language-box">
                      <div class="select-box">
                        <select class="selectmenu">
                          <option>English</option>
                          <option>Marathi</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <i className="fas fa-times"></i>
          </div>

          <nav className="menu-box mCustomScrollbar">
            <div className="nav-logo">
              <a href="#.">
                <img
                  src="assets/images/KBMC-logo-1-edited2.png"
                  alt=""
                  title=""
                />
              </a>
            </div>

            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li className="current">
                  <a href="/">Home</a>
                </li>
                <li className="dropdown">
                  <a href="#.">About KBMC</a>
                  <ul>
                    <li>
                      <a href="/history">History</a>
                    </li>
                    <li>
                      <a href="/ward">Wards</a>
                    </li>
                    <li>
                      <a href="/elected-member">Elected Wing</a>
                    </li>
                    <li>
                      <a href="/org-structure">Organization Structure</a>
                    </li>
                    <li>
                      <a href="/functions">Functions</a>
                    </li>
                    <li>
                      <a href="/departments">Departments</a>
                    </li>
                    <li>
                      <a href="/elected-pre-officer">Previous Chief Officers</a>
                    </li>
                    <li>
                      <a href="/elected-pre-representative">
                        Previous Presidents
                      </a>
                    </li>
                    <li>
                      <a href="/awards">Awards</a>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <span className="fas fa-angle-down"></span>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#.">City Profile</a>
                  <ul>
                    <li>
                      <a
                        href="assets/documents/KBMC CIRCULATION A3 COLOR-Brown-24 (1).pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Areas
                      </a>
                    </li>
                    <li>
                      <a href="/property-holder">Property Holder</a>
                    </li>
                    <li>
                      <a href="/properties-milkat">Municipal Properties</a>
                    </li>
                    <li>
                      <a href="/schools">Schools</a>
                    </li>
                    <li>
                      <a href="/gardens">Gardens</a>
                    </li>
                    <li>
                      <a href="/electric">Electric</a>
                    </li>
                    <li>
                      <a href="/roads">Roads</a>
                    </li>
                    <li>
                      <a href="/tree-census">Tree Census</a>
                    </li>
                    <li>
                      <a href="/health">Health</a>
                    </li>
                    <li>
                      <a href="/ponds-talao">Ponds / Talao</a>
                    </li>
                    <li>
                      <a href="/fire-station">Fire Station</a>
                    </li>
                    <li>
                      <a href="/private-hospital">Private Hospital</a>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <span className="fas fa-angle-down"></span>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#.">Online Services</a>
                  <ul>
                    <li>
                      <a
                        href="https://mahaulb.in/MahaULB/property/propertyOnlinePay"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Property Tax Payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mahaulb.in/MahaULB/property/onlineReceiptReprint"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Property Tax Receipt
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mjp.maharashtra.gov.in/pay-water-bill-online/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Water Tax Payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://crsorgi.gov.in/web/index.php/auth/login"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Birth & Death Search
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mahatenders.gov.in/nicgep/app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Online Tenders
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://maha.autodcr.com/BPAMSClient/Default.aspx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Auto DCR
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <span className="fas fa-angle-down"></span>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#.">Schemes</a>
                  <ul>
                    <li>
                      <a
                        href="assets/documents/Nulm_mahiti.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        NULM
                      </a>
                    </li>
                    <li>
                      <a href="/pmay">PMAY</a>
                    </li>
                    <li>
                      <a href="/nuhm">NUHM</a>
                    </li>
                    <li>
                      <a href="/amrut">AMRUT</a>
                    </li>
                    <li>
                      <a
                        href="assets/documents/Swachh Bharat Abhiyan (Health).pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Swachh Bharat
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <span className="fas fa-angle-down"></span>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#.">Complaints</a>
                  <ul>
                    <li>
                      <a
                        href="https://aaplesarkar.mahaonline.gov.in/en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Aaple Sarkar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://pgportal.gov.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        P G Portal
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://rtionline.maharashtra.gov.in/RTIMIS/login/index.php"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Right to Information
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <span className="fas fa-angle-down"></span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="#.">
                    <span className="fab fa-youtube"></span>
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100015538206978&amp;mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fab fa-facebook"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
