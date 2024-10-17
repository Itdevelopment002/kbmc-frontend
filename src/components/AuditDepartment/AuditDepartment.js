import React from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";

const AuditDepartment = () => {
  return (
    <>
      <section class="page-title ">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${innerBanner})` }}
        ></div>
        <div class="line-box">
          <div class="line-1"></div>
          <div class="line-2"></div>
        </div>
        <div class="auto-container">
          <div class="content-box">
            <h1>Audit Department</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <a href="departments.php">Departments</a>
              </li>
              <li>
                <span>Audit Department</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section class="departments-style-two alternat-2">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-9 col-md-12 col-sm-12 content-side">
              <div class="department-details-content">
                <div class="content-one dept_leyer_1">
                  <div class="title-box">
                    <h3>Audit Department</h3>
                    <hr />
                  </div>
                  <ul>
                    <li>
                      <a href="#.">Heading 1</a>
                    </li>
                    <li>
                      <a href="#.">Heading 2</a>
                    </li>
                    <li>
                      <a href="#.">Heading 3</a>
                    </li>
                    <li>
                      <a href="#.">Heading 4</a>
                    </li>
                    <li>
                      <a href="#.">Heading 5</a>
                    </li>
                  </ul>
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
    </>
  );
};

export default AuditDepartment;
