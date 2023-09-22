import { FormattedMessage } from "react-intl";
import React from "react";
const Support = () => {
  return (
    <div className="section-full mobile-page-padding our-service-wrap  p-b50  square_shape2">
      <div className="section-content">
        <div
          className="Service-half-top p-t80   bg-moving"
          style={{
            backgroundImage:
              "url(https://theme7x.com/shapen/images/background/ptn-1.png)",
          }}
        >
          <div className="container">
            <div className="section-head text-white">
              <div className="mt-separator-outer separator-left">
                <div className="mt-separator">
                  <h2 className="text-white text-uppercase sep-line-one ">
                    <span className="font-weight-300 site-text-primary">
                      <FormattedMessage
                        id="base.support"
                        values={{
                          b: (chunks) => <b className="text-black">{chunks}</b>,
                        }}
                      />
                    </span>
                    <b style={{ color: "black" }}>
                      {" "}
                      <FormattedMessage
                        id="support.support"
                        values={{
                          b: (chunks) => <b className="text-black">{chunks}</b>,
                        }}
                      />{" "}
                    </b>{" "}
                  </h2>
                </div>
              </div>
              <h3 style={{ color: "black" }}>
                <FormattedMessage
                  id="text1.support"
                  values={{
                    b: (chunks) => <b className="text-black">{chunks}</b>,
                  }}
                />
              </h3>
            </div>
          </div>
        </div>
        <div className="services-half-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="mt-icon-box-wraper m-b30">
                  <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                    <span className="icon-count-number">1</span>
                    <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                      <span className="icon-cell">
                        <img
                          src="https://theme7x.com/shapen/images/icon/crane-1.png"
                          alt=""
                        />
                      </span>
                    </div>

                    <div className="icon-content">
                      <h4 className=" m-b25">
                        <FormattedMessage
                          id="text2.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                        &amp;{" "}
                        <FormattedMessage
                          id="text3.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </h4>
                      <p>
                        <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </p>
                      <a
                        href="services.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="mt-icon-box-wraper m-b30">
                  <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                    <span className="icon-count-number">2</span>
                    <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                      <span className="icon-cell">
                        <img
                          src="https://theme7x.com/shapen/images/icon/renovation.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className=" m-b25">
                        <FormattedMessage
                          id="text6.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </h4>
                      <p>
                        <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </p>
                      <a
                        href="services.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="mt-icon-box-wraper m-b30">
                  <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                    <span className="icon-count-number">3</span>
                    <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                      <span className="icon-cell">
                        <img
                          src="https://theme7x.com/shapen/images/icon/toolbox.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className=" m-b25">
                        <FormattedMessage
                          id="text8.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </h4>
                      <p>
                        <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </p>
                      <a
                        href="services.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="mt-icon-box-wraper m-b30">
                  <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                    <span className="icon-count-number">4</span>
                    <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                      <span className="icon-cell">
                        <img
                          src="https://theme7x.com/shapen/images/icon/compass.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className=" m-b25">
                        <FormattedMessage
                          id="text9.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                      </h4>
                      <p>
                        <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </p>
                      <a
                        href="services.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="mt-icon-box-wraper m-b30">
                  <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                    <span className="icon-count-number">5</span>
                    <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                      <span className="icon-cell">
                        <img
                          src="https://theme7x.com/shapen/images/icon/crane-1.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className=" m-b25">
                        {" "}
                        <FormattedMessage
                          id="text10.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </h4>
                      <p>
                        <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </p>
                      <a
                        href="services.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="mt-icon-box-wraper m-b30">
                  <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                    <span className="icon-count-number">6</span>
                    <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                      <span className="icon-cell">
                        <img
                          src="https://theme7x.com/shapen/images/icon/renovation.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className=" m-b25">
                        <FormattedMessage
                          id="text11.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </h4>
                      <p>
                        <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </p>
                      <a
                        href="services.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="mt-icon-box-wraper m-b30">
                  <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                    <span className="icon-count-number">7</span>
                    <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                      <span className="icon-cell">
                        <img
                          src="https://theme7x.com/shapen/images/icon/toolbox.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className=" m-b25">
                        <FormattedMessage
                          id="text12.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </h4>
                      <p>
                        <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </p>
                      <a
                        href="services.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="mt-icon-box-wraper m-b30">
                  <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                    <span className="icon-count-number">8</span>
                    <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                      <span className="icon-cell">
                        <img
                          src="https://theme7x.com/shapen/images/icon/compass.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className=" m-b25">
                        {" "}
                        <FormattedMessage
                          id="text13.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </h4>
                      <p>
                        <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                      </p>
                      <a
                        href="services.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                        <i className="fa fa-angle-right arrow-animation" />
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
  );
};
export default Support;
