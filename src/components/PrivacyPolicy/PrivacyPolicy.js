import React from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";

const PrivacyPolicy = () => {
  return (
    <div>
      <section class="page-title">
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
            <h1>Privacy Policy</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section class="event-details">
        <div class="auto-container">
          <div class="content-side">
            <div class="event-details-content">
              <div class="content-one">
                <h3>Disclaimer</h3>
                <p>
                  Although information and contents of various departmental
                  websites on this portal have been provided with care and
                  diligence, Government of Maharashtra does not take
                  responsibility on how this information is used or the
                  consequences of its use. In case of any inconsistency/
                  confusion, the user should contact the concerned
                  Department/Officer of the Government of Maharashtra for
                  further clarifications.
                </p>
                <h3>Copyright Policy</h3>
                <p>
                  Material featured on this portal may be reproduced free of
                  charge in any format or media without requiring specific
                  permission. This is subject to the material being reproduced
                  accurately and not being used in a derogatory manner or in a
                  misleading context. Where the material is being published or
                  issued to others, the source must be prominently acknowledged.
                  However, the permission to reproduce this material does not
                  extend to any material on this site which is identified as
                  being the copyright of the third party.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
