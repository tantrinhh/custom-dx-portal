import { FormattedMessage } from "react-intl";
import React from "react";
const Digital_conversion = () => {
  return (
    <>
      <div
        className="section-full  mobile-page-padding p-t80 p-b30 site-bg-dark bg-repeat square_shape2 bg-moving"
        style={{
          backgroundImage:
            "url(https://theme7x.com/shapen/images/background/bg-6.png)",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-white text-uppercase sep-line-one ">
                  <span className="font-weight-300 site-text-primary">
                    <FormattedMessage
                      id="only"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />{" "}
                  </span>{" "}
                  <FormattedMessage
                    id="title1.conversion"
                    values={{ b: (chunks) => <b>{chunks}</b> }}
                  />{" "}
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="owl-carousel about-home owl-btn-vertical-center">
                  {/* COLUMNS 1 */}
                  <div className="item ">
                    <div className="mt-img-effect zoom-slow">
                      <a href="about-1.html">
                        <img
                          src="https://theme7x.com/shapen/images/gallery/pic1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  {/* COLUMNS 2 */}
                  <div className="item ">
                    <div className="mt-img-effect zoom-slow">
                      <a href="about-1.html">
                        <img
                          src="https://theme7x.com/shapen/images/gallery/pic8.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  {/* COLUMNS 3 */}
                  <div className="item ">
                    <div className="mt-img-effect zoom-slow">
                      <a href="about-1.html">
                        <img
                          src="https://theme7x.com/shapen/images/gallery/pic9.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  {/* COLUMNS 4 */}
                  <div className="item ">
                    <div className="mt-img-effect zoom-slow">
                      <a href="about-1.html">
                        <img
                          src="https://theme7x.com/shapen/images/gallery/pic6.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  {/* COLUMNS 5 */}
                  <div className="item ">
                    <div className="mt-img-effect zoom-slow">
                      <a href="about-1.html">
                        <img
                          src="https://theme7x.com/shapen/images/gallery/pic2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="about-home-right bg-white p-a30">
                  <h4 className="m-t0">
                    <span className="font-weight-100" />
                    <FormattedMessage
                      id="title2.conversion"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </h4>
                  <p>
                    <FormattedMessage
                      id="text1.conversion"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </p>
                  <p>
                    <FormattedMessage
                      id="text2.conversion"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </p>
                  <div className="text-right">
                    <a
                      href="about-1.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      <FormattedMessage
                        id="see.conversion"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Digital_conversion;
