import React from "react";
import { FormattedMessage } from "react-intl";
const Story = () => {
  return (
    <>
      <div
        className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center"
        style={{
          backgroundImage:
            "url(https://theme7x.com/shapen/images/left-men.png), url(https://theme7x.com/shapen/images/background/bg-4.png)",
        }}
      >
        <div className="section-content">
          <div className="container">
            <div className="section-head">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 site-text-primary">
                      <FormattedMessage
                        id="title1.recital"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />{" "}
                    </span>{" "}
                    <FormattedMessage
                      id="title1.1.recital"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left"
                  style={{
                    backgroundImage:
                      "url(https://theme7x.com/shapen/images/background/bg-site.png)",
                  }}
                >
                  <h3 className="m-t0">
                    <span className="font-weight-100">
                      {" "}
                      <FormattedMessage
                        id="title1.recital"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                    </span>
                    <br />{" "}
                    <FormattedMessage
                      id="title1.1.recital"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </h3>
                  <p>
                    <FormattedMessage
                      id="text1.recital"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </p>
                  <ul className="list-angle-right anchor-line">
                    <li>
                      <a href="services.html">
                        <FormattedMessage
                          id="link1.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        <FormattedMessage
                          id="link2.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        <FormattedMessage
                          id="link3.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        <FormattedMessage
                          id="link4.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        {" "}
                        <FormattedMessage
                          id="link5.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                      </a>
                    </li>
                  </ul>
                  <div className="text-right">
                    <a
                      href="about-1.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      <FormattedMessage
                        id="see.recital"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="mission-mid bg-no-repeat bg-cover m-b30"
                  style={{
                    backgroundImage:
                      "url(https://theme7x.com/shapen/images/mission.jpg)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Story;
